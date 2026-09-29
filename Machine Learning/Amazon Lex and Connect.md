# Amazon Lex and Connect

## Amazon Lex

- Uses the same technology that powers Alexa.
- Automatic Speech Recognition (ASR) to convert speech to text.
- Natural Language Understanding to recognise the intent of text and callers.
- Helps build chatbots and call centre bots.

## Amazon Connect

- Receive calls and create contact flows as a cloud-based virtual contact centre.
- Can integrate with other CRM systems or AWS services.
- No upfront payments and about 80% cheaper than traditional contact centre solutions.

![[SAA-v48-p567-lex-connect.png]]

## Combined Flow

A phone call is streamed to Amazon Connect, which invokes Amazon Lex. Lex recognises the intent and invokes a Lambda function to schedule an appointment in a CRM.

## Related

- [[Machine Learning/Machine Learning Services]]
- [[Serverless/Lambda]]

Source slides: p. 567.
