import { useMemo, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import type { Direction, Service } from "../data/types";
import { useElementSize } from "../lib/hooks";

const DIR_COLOR: Record<Direction, string> = {
  in: "var(--green)",
  out: "var(--blue)",
  both: "var(--purple)",
};
const DIR_LABEL: Record<Direction, string> = {
  in: "送進來 (in)",
  out: "送出去 (out)",
  both: "雙向 (both)",
};

type Placed = {
  i: number;
  /** 節點左上角（HTML 定位用） */
  x: number;
  y: number;
  /** 節點中心（連線起終點用） */
  cx: number;
  cy: number;
  to: string;
  dir: Direction;
  how: string;
  name: string;
  zh: string;
  emoji: string;
  target?: Service;
};

/**
 * 依容器大小把每個互動服務放到外圈，並計算連線。
 * 回傳節點「左上角」座標（x / y）與中心座標（cx / cy）：
 * framer-motion 會接管 transform，所以不能靠 CSS 的 translate(-50%,-50%) 置中，
 * 否則節點會被畫出容器外而被裁切。
 */
function layout(
  count: number,
  w: number,
  h: number,
  nodeW: number,
  nodeH: number,
): { x: number; y: number; cx: number; cy: number }[] {
  const cx = w / 2;
  const cy = h / 2;
  const padX = nodeW / 2 + 16;
  const padY = nodeH / 2 + 16;
  const rx = Math.max(60, w / 2 - padX);
  const ry = Math.max(50, h / 2 - padY);
  const rings = count <= 7 ? [1] : count <= 14 ? [1, 0.6] : [1, 0.72, 0.44];
  const perRing = Math.ceil(count / rings.length);
  const groups: number[][] = rings.map(() => []);
  for (let i = 0; i < count; i++) {
    let best = 0;
    for (let r = 0; r < rings.length; r++) if (groups[r].length < perRing) best = r;
    groups[best].push(i);
  }
  const clamp = (v: number, min: number, max: number) => Math.min(Math.max(v, min), max);
  const out: { x: number; y: number; cx: number; cy: number }[] = new Array(count);
  groups.forEach((group, ri) => {
    const scale = rings[ri];
    const n = group.length;
    group.forEach((idx, k) => {
      const angle = -Math.PI / 2 + (k * 2 * Math.PI) / n + (ri % 2 ? Math.PI / n : 0);
      const px = clamp(cx + rx * scale * Math.cos(angle), nodeW / 2 + 4, Math.max(nodeW / 2 + 4, w - nodeW / 2 - 4));
      const py = clamp(cy + ry * scale * Math.sin(angle), nodeH / 2 + 4, Math.max(nodeH / 2 + 4, h - nodeH / 2 - 4));
      out[idx] = { x: px - nodeW / 2, y: py - nodeH / 2, cx: px, cy: py };
    });
  });
  return out;
}

export function IntegrationGraph({
  service,
  services,
  onNavigate,
}: {
  service: Service;
  services: Service[];
  onNavigate: (id: string) => void;
}) {
  const { ref, width, height } = useElementSize<HTMLDivElement>();
  const reduce = useReducedMotion();
  const [hover, setHover] = useState<number | null>(null);

  const nodeW = width > 0 && width < 560 ? 104 : 146;
  const nodeH = width > 0 && width < 560 ? 40 : 48;
  const byId = useMemo(
    () => new Map(services.map((s) => [s.id, s])),
    [services],
  );

  const placed = useMemo<Placed[]>(() => {
    const positions = layout(
      service.interactions.length,
      width,
      height,
      nodeW,
      nodeH,
    );
    return service.interactions.map((it, i) => {
      const target = byId.get(it.to);
      const pos = positions[i] ?? { x: 0, y: 0, cx: 0, cy: 0 };
      return {
        i,
        x: pos.x,
        y: pos.y,
        cx: pos.cx,
        cy: pos.cy,
        to: it.to,
        dir: it.dir,
        how: it.how,
        name: target?.name ?? it.to,
        zh: target?.zh ?? "",
        emoji: target?.emoji ?? "🔹",
        target,
      };
    });
  }, [service, byId, width, height, nodeW, nodeH]);

  const cx = width / 2;
  const cy = height / 2;
  const active = hover !== null ? placed[hover] : null;

  return (
    <div>
      <div className="graph" ref={ref}>
        {width > 0 && (
          <>
            <svg
              width={width}
              height={height}
              viewBox={`0 0 ${width} ${height}`}
            >
              <defs>
                {(["in", "out", "both"] as Direction[]).map((d) => (
                  <marker
                    key={d}
                    id={`arrow-${d}`}
                    viewBox="0 0 10 10"
                    refX="8"
                    refY="5"
                    markerWidth="6"
                    markerHeight="6"
                    orient="auto-start-reverse"
                  >
                    <path d="M 0 1 L 9 5 L 0 9 z" fill={DIR_COLOR[d]} />
                  </marker>
                ))}
              </defs>
              {placed.map((p) => {
                // out / both 由中心指向對方；in 反向畫，讓虛線流動方向代表資料流向
                const from =
                  p.dir === "in" ? { x: p.cx, y: p.cy } : { x: cx, y: cy };
                const to =
                  p.dir === "in" ? { x: cx, y: cy } : { x: p.cx, y: p.cy };
                const dx = to.x - from.x;
                const dy = to.y - from.y;
                const len = Math.hypot(dx, dy) || 1;
                const ux = dx / len;
                const uy = dy / len;
                const start = { x: from.x + ux * 34, y: from.y + uy * 26 };
                const end = {
                  x: to.x - ux * (nodeW / 2 + 4),
                  y: to.y - uy * (nodeH / 2 + 4),
                };
                const mx = (start.x + end.x) / 2 - uy * len * 0.07;
                const my = (start.y + end.y) / 2 + ux * len * 0.07;
                const dim = hover !== null && hover !== p.i;
                return (
                  <g
                    key={p.i}
                    style={{
                      opacity: dim ? 0.16 : 1,
                      transition: "opacity .2s ease",
                    }}
                  >
                    <motion.path
                      d={`M ${start.x} ${start.y} Q ${mx} ${my} ${end.x} ${end.y}`}
                      fill="none"
                      stroke={DIR_COLOR[p.dir]}
                      strokeOpacity={0.45}
                      strokeWidth={hover === p.i ? 2.2 : 1.4}
                      markerEnd={`url(#arrow-${p.dir})`}
                      markerStart={
                        p.dir === "both" ? `url(#arrow-${p.dir})` : undefined
                      }
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{
                        duration: 0.7,
                        delay: 0.06 * p.i,
                        ease: [0.22, 0.61, 0.36, 1],
                      }}
                    />
                    {!reduce && (
                      <path
                        className="flow-line"
                        d={`M ${start.x} ${start.y} Q ${mx} ${my} ${end.x} ${end.y}`}
                        fill="none"
                        stroke={DIR_COLOR[p.dir]}
                        strokeWidth={1.4}
                        strokeOpacity={hover === p.i ? 0.95 : 0.5}
                        style={{ animationDelay: `${p.i * 0.13}s` }}
                      />
                    )}
                  </g>
                );
              })}
            </svg>

            <motion.div
              className="graph-node graph-center"
              style={{ left: cx - 88, top: cy - 26, width: 176 }}
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ type: "spring", stiffness: 320, damping: 24 }}
            >
              <div className="gn-name">
                {service.emoji} {service.name}
              </div>
              <div className="gn-zh">{service.zh}</div>
            </motion.div>

            {placed.map((p) => (
              <motion.div
                key={p.i}
                className="graph-node"
                style={{
                  left: p.x,
                  top: p.y,
                  width: nodeW,
                  height: nodeH,
                  borderColor: hover === p.i ? DIR_COLOR[p.dir] : undefined,
                  opacity: hover !== null && hover !== p.i ? 0.35 : 1,
                }}
                initial={{ scale: 0.6, opacity: 0 }}
                animate={{
                  scale: hover === p.i ? 1.06 : 1,
                  opacity: hover !== null && hover !== p.i ? 0.35 : 1,
                }}
                transition={{
                  type: "spring",
                  stiffness: 380,
                  damping: 26,
                  delay: 0.03 * p.i,
                }}
                onMouseEnter={() => setHover(p.i)}
                onMouseLeave={() => setHover((h) => (h === p.i ? null : h))}
                onClick={() => p.target && onNavigate(p.to)}
              >
                <div className="gn-name">
                  <span style={{ color: DIR_COLOR[p.dir], fontWeight: 700 }}>
                    {p.i + 1}.
                  </span>{" "}
                  {p.name}
                </div>
                <div className="gn-zh">{p.zh || p.to}</div>
              </motion.div>
            ))}

            <div className="graph-legend">
              {(["in", "out", "both"] as Direction[]).map((d) => (
                <span key={d}>
                  <i
                    className="legend-dot"
                    style={{ background: DIR_COLOR[d] }}
                  />
                  {DIR_LABEL[d]}
                </span>
              ))}
            </div>

            <motion.div
              initial={false}
              animate={{ opacity: active ? 1 : 0, y: active ? 0 : 6 }}
              transition={{ duration: 0.18 }}
              style={{
                position: "absolute",
                right: 10,
                top: 10,
                maxWidth: "min(320px, 62%)",
                background: "var(--bg-elevated)",
                boxShadow: "0 2px 10px rgba(0,0,0,0.12)",
                border: "1px solid var(--border)",
                borderRadius: 8,
                padding: "8px 10px",
                fontSize: 12.5,
                lineHeight: 1.55,
                color: "var(--text-2)",
                pointerEvents: "none",
              }}
            >
              {active && (
                <>
                  <strong style={{ color: "var(--text)" }}>
                    {active.emoji} {active.name}
                  </strong>
                  <div>{active.how}</div>
                </>
              )}
            </motion.div>
          </>
        )}
      </div>
    </div>
  );
}
