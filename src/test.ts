import {createConversation, deleteConversation} from './twilio';

createConversation({friendlyName: 'hello-world'}).
then((obj:any)=>
deleteConversation({sid: obj.sid})
.then(()=>console.log(`deleted conversation with sid: ${obj.sid}`)));
