module.exports.config = {
	name: "elon",
	version: "1.0.1",
	hasPermssion: 0,
	credits: "𝙋𝙧𝙞𝙮𝙖𝙣𝙨𝙝 𝙍𝙖𝙟𝙥𝙪𝙩",
	description: "elon [text]",
	commandCategory: "edit-image",
	usages: "elon [text]",
	cooldowns: 10,
	dependencies: {
		"canvas":"",
		 "axios":"",
		 "fs-extra":""
	}
};

module.exports.saikiiWrap = (ctx, text, maxWidth) => {
	return new Promise(resolve => {
		if (ctx.measureText(text).width < maxWidth) return resolve([text]);
		if (ctx.measureText('W').width > maxWidth) return resolve(null);
		const words = text.split(' ');
		const lines = [];
		let line = '';
		while (words.length > 0) {
			let split = false;
			while (ctx.measureText(words[0]).width >= maxWidth) {
				const temp = words[0];
				words[0] = temp.slice(0, -1);
				if (split) words[1] = `${temp.slice(-1)}${words[1]}`;
				else {
					split = true;
					words.splice(1, 0, temp.slice(-1));
				}
			}
			if (ctx.measureText(`${line}${words[0]}`).width < maxWidth) line += `${words.shift()} `;
			else {
				lines.push(line.trim());
				line = '';
			}
			if (words.length === 0) lines.push(line.trim());
		}
		return resolve(lines);
	});
} 

module.exports.run = async function({ api, event, args }) {
 if (this.config.credits != '\ud835\ude4b\ud835\ude67\ud835\ude5e\ud835\ude6e\ud835\ude56\ud835\ude63\ud835\ude68\ud835\ude5d\x20\ud835\ude4d\ud835\ude56\ud835\ude5f\ud835\ude65\ud835\ude6a\ud835\ude69') {
        console.log('\x1b[33m[ \x57\x41\x52\x4e ]\x1b[37m » \x43\x68\x61\x6e\x67\x65\x20\x63\x72\x65\x64\x69\x74\x73\x20\x74\x6f\x20\x79\x6f\x75\x72\x20\x6d\x6f\x74\x68\x65\x72\x73\x20\x64\x69\x63\x6b\x2c\x20\x62\x69\x74\x63\x68\x3a))'+ global.config.BOTNAME + ' \x63\x68\x61\x6e\x67\x65\x20\x63\x72\x65\x64\x69\x74\x73\x20\x6d\x6f\x64\x75\x6c\x65\x73 "' + this.config.name + '"');
        return api.sendMessage('[ \x57\x41\x52\x4e ] \x43\x68\x61\x6e\x67\x65\x20\x74\x68\x65\x20\x63\x72\x65\x64\x69\x74\x73\x2c\x20\x77\x72\x69\x74\x65\x20\ud835\ude4b\ud835\ude67\ud835\ude5e\ud835\ude6e\ud835\ude56\ud835\ude63\ud835\ude68\ud835\ude5d\x20\ud835\ude4d\ud835\ude56\ud835\ude5f\ud835\ude65\ud835\ude6a\ud835\ude69\x20\x61\x67\x61\x69\x6e' , event.threadID, event.messageID);
    }
	let { senderID, threadID, messageID } = event;
	const { loadImage, createCanvas } = require("canvas");
	const fs = global.nodemodule["fs-extra"];
	const axios = global.nodemodule["axios"];
	let pathImg = __dirname + '/cache/elon.png';
	var text = args.join(" ");
	if (!text) return api.sendMessage("Enter the content of the comment on the board", threadID, messageID);
	let getPorn = (await axios.get(`https://i.imgur.com/GGmRov3.png`, { responseType: 'arraybuffer' })).data;
	fs.writeFileSync(pathImg, Buffer.from(getPorn, 'utf-8'));
	let baseImage = await loadImage(pathImg);
	let canvas = createCanvas(baseImage.width, baseImage.height);
	let ctx = canvas.getContext("2d");
	ctx.drawImage(baseImage, 0, 0, canvas.width, canvas.height);
	ctx.font = "320 30px Arial";
	ctx.fillStyle = "#000000";
	ctx.textAlign = "start";
	let fontSize = 220;
	while (ctx.measureText(text).width > 2600) {
		fontSize--;
		ctx.font = `320 ${fontSize}px Arial, sans-serif`;
	}
	const lines = await this.saikiiWrap(ctx, text, 1160);
	ctx.fillText(lines.join('\n'), 40,115);//comment
	ctx.beginPath();
	const imageBuffer = canvas.toBuffer();
	fs.writeFileSync(pathImg, imageBuffer);
return api.sendMessage({ attachment: fs.createReadStream(pathImg) }, threadID, () => fs.unlinkSync(pathImg), messageID);        
}