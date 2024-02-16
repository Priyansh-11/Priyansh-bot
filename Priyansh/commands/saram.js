const fs = require("fs");
module.exports.config = {
	name: "🫣",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "Priyansh", 
	description: "hihihihi",
	commandCategory: "no prefix",
	usages: "saram",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("🙄")==0 || event.body.indexOf("🙄🙄")==0 || event.body.indexOf("🙄🙄🙄")==0 || event.body.indexOf("😳")==0) {
		var msg = {
				body: "𝐀𝐢𝐬𝐞 𝐌𝐭 𝐃𝐞𝐤𝐡𝐨 𝐒𝐚𝐫𝐚𝐦 𝐀𝐚𝐭𝐚 𝐇𝐚𝐢😋",
				attachment: fs.createReadStream(__dirname + `/cache/saram.gif`)
			}
			api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("🫣", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }