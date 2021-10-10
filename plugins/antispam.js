const Asena = require('../events');
const {MessageType} = require('@adiwajshing/baileys');


Asena.addCommand({pattern: 'antispam ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

  await message.client.sendMessage(message.jid, 'Activating Antispam Mode', MessageType.text);
  await message.client.sendMessage(message.jid, '╔═════════════════╗\n' + '          🄲🅈🄱🄴🅁 🄱🄾🅃\n' + '╚═════════════════╝\n\nAɳƚιSραɱ Rιზზσɳ \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n A\n ɳ\n ƚ\n ι\n S\n ρ\n α\n ɱ\n\n R\n ι\n ზ\n ზ\n σ\n ɳ  ', MessageType.text);
  

}));
