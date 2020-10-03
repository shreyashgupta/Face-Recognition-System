const accountSid = 'AC60b83e128b9a2def807f7ce6dd923f19';
const authToken = '5f9295fd0007a8a1a12dc21b4d584746';
const client = require('twilio')(accountSid, authToken);

client.messages
      .create({
         from: 'whatsapp:+14155238886',
         body: 'Hello, there!',
         to: 'whatsapp:+919140701395'
       })
      .then(message => console.log(message.sid));