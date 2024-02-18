const fs = require("fs");
module.exports.config = {
	name: "pari",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "Priyansh", 
	description: "hihihihi",
	commandCategory: "no prefix",
	usages: "paridhi",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("paridhi")==0 || event.body.indexOf("Paridhi")==0 || event.body.indexOf("PARIDHI")==0 || event.body.indexOf("@Cuty Paridhi")==0) {
		var msg = {
				body: "𝐘𝐞 𝐇𝐚𝐢 𝐑𝐚𝐣 𝐊𝐢 𝐂𝐮𝐭𝐞 𝐅𝐫𝐢𝐞𝐧𝐝 𝐊𝐚𝐥𝐢 𝐊𝐚𝐥𝐮𝐭𝐢 𝐌𝐨𝐭𝐢 𝐏𝐚𝐫𝐢𝐝𝐡𝐢😝😍😍🙈🙈",
				attachment: fs.createReadStream(__dirname + `/noprefix/Pari.mp4`)
			}
			api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("🙈", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }