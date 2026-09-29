import type { Service } from './types'
import { compute } from './compute'
import { storage } from './storage'
import { database } from './database'
import { network } from './network'
import { security } from './security'
import { integration } from './integration'
import { monitoring } from './monitoring'
import { analytics } from './analytics'
import { ml } from './ml'
import { migration } from './migration'

/** 目錄順序 = 側邊欄與上/下一頁的順序 */
export const services: Service[] = [
  ...compute,
  ...storage,
  ...database,
  ...network,
  ...security,
  ...integration,
  ...monitoring,
  ...analytics,
  ...ml,
  ...migration,
]

export const servicesById = new Map(services.map((s) => [s.id, s]))
export type { Service }
