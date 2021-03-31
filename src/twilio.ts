
import { Twilio } from 'twilio';

require('dotenv').config()

const accountSid: any = process.env.TWILIO_ACCOUNT_SID;
const authToken: any = process.env.TWILIO_AUTH_TOKEN;
const client = new Twilio(accountSid, authToken);

export const createConversation = async ({friendlyName}:{friendlyName: string}) => {
    const resp = await client.conversations.conversations.create({friendlyName})
    return resp;
}

export const deleteConversation = async ({sid}:{sid: string}) =>(await client.conversations.conversations(sid).remove())
