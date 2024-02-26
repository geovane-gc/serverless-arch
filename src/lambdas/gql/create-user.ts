import { SQS } from 'aws-sdk';
import { CreateUserInput } from '../../graphql/types/graphql';

export async function handler(input: CreateUserInput): Promise<string> {
  try {
    const sqs = new SQS({
      apiVersion: '2012-11-05',
      region: process.env.REGION,
    });

    const response = await sqs
      .sendMessage({
        QueueUrl: process.env.CREATE_USER_QUEUE_URL as string,
        MessageBody: JSON.stringify(input),
      })
      .promise();

    if (response.MessageId)
      return `[SUCCESS] Message sent with ID: ${response.MessageId}`;
    throw new Error('Message not sent');
  } catch (error: any) {
    console.log('[ERROR]', error?.message);
    throw new Error(error?.message);
  }
}
