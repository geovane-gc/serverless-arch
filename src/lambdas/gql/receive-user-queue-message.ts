import { SQSEvent } from 'aws-lambda';

export async function handler(event: SQSEvent): Promise<void> {
    try {
        for (const message of event.Records) {
            const responseObject = JSON.parse(message.body);
            const receivedData = responseObject.arguments.input;

            console.log(receivedData)
        }
    } catch (error: any) {
        console.log('[ERROR]', error?.message);
        throw new Error(error?.message);
    }
}
