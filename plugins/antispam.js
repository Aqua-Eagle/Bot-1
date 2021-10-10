const Asena = require('../events');
const {MessageType} = require('@adiwajshing/baileys');


Asena.addCommand({pattern: 'antispam ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

  await message.client.sendMessage(message.jid, 'Activating Antispam Mode', MessageType.text);
  await message.client.sendMessage(message.jid, 'A\n n\n t\n i\n s\n p\n a\n m\n\n R\n i\n b\n b\n o\n n\n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n  A\n n\n t\n i\n s\n p\n a\n m\n\n R\n i\n b\n b\n o\n n\n ', MessageType.text);
  

}));
