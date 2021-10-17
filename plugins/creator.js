/* Copyright (C) 2021 Aqua-Snake.

Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.

Cyber Bot - Aqua-Snake
*/ 

const Asena = require('../events');
const {MessageType} = require('@adiwajshing/baileys');
const got = require("got");
const fs = require('fs');
const Config = require('../config');


if (Config.WORKTYPE == 'private') {

Asena.addCommand({pattern: 'info', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

	await message.sendMessage(fs.readFileSync('media/cabot.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio, ptt: true});
	 await message.sendMessage(fs.readFileSync('media/CyberBot.jpg'), MessageType.image, {caption: `_____ *Cyber Bot* _____\n\n Creator : Aqua Snake \n Github : https://github.com/Aqua-Snake/ \n Whatsapp : wa.me/+94764746599 \n Telegram : https://t.me/Aqua_Snake/ \n Bot Link : https://aqua-snake.github.io/CBot/ `});

	}));

}

else if (Config.WORKTYPE == 'public') {

Asena.addCommand({pattern: 'info', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

	    await message.sendMessage(fs.readFileSync('media/cabot.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio, ptt: true});
	    await message.sendMessage(fs.readFileSync('media/CyberBot.jpg'), MessageType.image, {caption: `_____ *Cyber Bot* _____\n\n Creator : Aqua Snake \n Github : https://github.com/Aqua-Snake/ \n Whatsapp : wa.me/+94764746599 \n Telegram : https://t.me/Aqua_Snake/ \n Bot Link : https://aqua-snake.github.io/CBot/ `});
    }));
}