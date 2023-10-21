module.exports.config = {
	name: "sendnoti2",
	version: "1.0.2",
	hasPermssion: 2,
	credits: "𝙋𝙧𝙞𝙮𝙖𝙣𝙨𝙝 𝙍𝙖𝙟𝙥𝙪𝙩",
	description: "Send messages to groups (reply to photos/videos to be attached)!\nBetter version of sendnotiUwU",
	commandCategory: "system",
	usages: "[Text]",
	cooldowns: 5
};

module.exports.languages = {
	"vi": {
		"sendSuccess": "Đã gửi tin nhắn đến %1 nhóm!",
		"sendFail": "[!] Không thể gửi thông báo tới %1 nhóm"
	},
	"en": {
		"sendSuccess": "Sent message to %1 thread!",
		"sendFail": "[!] Can't send message to %1 thread"
	}
}

module.exports.run = async ({ api, event, args, getText }) => {
if (event.type == "message_reply") {
const request = global.nodemodule["request"];
const fs = require('fs')
const axios = require('axios')



       
        var path = __dirname + `/cache/snoti.png`;
        var path = __dirname + `/cache/snoti.mp3`;
        var path = __dirname + `/cache/snoti.jpeg`;
        var path = __dirname + `/cache/snoti.jpg`;


var abc = event.messageReply.attachments[0].url;
    let getdata = (await axios.get(`${abc}`, { responseType: 'arraybuffer' })).data;

  fs.writeFileSync(path, Buffer.from(getdata, 'utf-8'));


	var allThread = global.data.allThreadID || [];
	var count = 1,
		cantSend = [];
	for (const idThread of allThread) {
		if (isNaN(parseInt(idThread)) || idThread == event.threadID) ""
		else {
			api.sendMessage({body:" »✦\ud835\uddd4\ud835\udde1\ud835\udde1\ud835\udde2\ud835\udde8\ud835\uddd6\ud835\uddd8\ud835\udde0\ud835\uddd8\ud835\udde1\ud835\udde7\x20\ud835\uddd9\ud835\udde5\ud835\udde2\ud835\udde0\x20\ud835\udde2\ud835\uddea\ud835\udde1\ud835\uddd8\ud835\udde5\x20\ud835\udc0f\ud835\udc11\ud835\udc08\ud835\udc18\ud835\udc00\ud835\udc0d\ud835\udc12\ud835\udc07✦«\n\n" + args.join(` `),attachment: fs.createReadStream(path) }, idThread, (error, info) => {
				if (error) cantSend.push(idThread);
			});
			count++;
			await new Promise(resolve => setTimeout(resolve, 500));
		}
	}
	return api.sendMessage(getText("sendSuccess", count), event.threadID, () => (cantSend.length > 0 ) ? api.sendMessage(getText("sendFail", cantSend.length), event.threadID, event.messageID) : "", event.messageID);

}
else {
	var allThread = global.data.allThreadID || [];
	var count = 1,
		cantSend = [];
	for (const idThread of allThread) {
		if (isNaN(parseInt(idThread)) || idThread == event.threadID) ""
		else {
			api.sendMessage("»\x41\x6e\x6e\x6f\x75\x6e\x63\x65\x6d\x65\x6e\x74\x20\x66\x72\x6f\x6d\x20\x74\x68\x65\x20\x41\x64\x6d\x69\x6e\x20\x50\x72\x69\x79\x61\x6e\x73\x68\x21«\n\n" + args.join(` `), idThread, (error, info) => {
				if (error) cantSend.push(idThread);
			});
			count++;
			await new Promise(resolve => setTimeout(resolve, 500));
		}
	}
	return api.sendMessage(getText("sendSuccess", count), event.threadID, () => (cantSend.length > 0 ) ? api.sendMessage(getText("sendFail", cantSend.length), event.threadID, event.messageID) : "", event.messageID); }
  }