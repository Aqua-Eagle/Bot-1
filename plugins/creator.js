const Asena = require('../events');
const {MessageType} = require('@adiwajshing/baileys');
const fs = require('fs');
const Config = require('../config');


if (Config.WORKTYPE == 'private') {

Asena.addCommand({pattern: 'creator', fromMe: true, dontAddCommandList: true}, (async (message, match) => {


	 await message.sendMessage(fs.readFileSync('media/CyberBot.jpg'), MessageType.image, {caption: `_____ *Cyber Bot* _____\n\n Creator : Aqua Snake \n Github : https://github.com/Aqua-Snake/ \n Whatsapp : wa.me/+94764746599 \n Telegram : https://t.me/Aqua_Smake/ \n Bot Link : https://aqua-snake.github.io/CBot/ `});

	}));
}

else if (Config.WORKTYPE == 'public') {

Asena.addCommand({pattern: 'creator', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

	    await message.sendMessage(fs.readFileSync('media/CyberBot.jpg'), MessageType.image, {caption: `_____ *Cyber Bot* _____\n\n Creator : Aqua Snake \n Github : https://github.com/Aqua-Snake/ \n Whatsapp : wa.me/+94764746599 \n Telegram : https://t.me/Aqua_Smake/ \n Bot Link : https://aqua-snake.github.io/CBot/ `});
    }));
}
