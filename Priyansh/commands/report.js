const fs = require("fs");
module.exports.config = {
	name: "report",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "Priyansh", 
	description: "hihihihi",
	commandCategory: "no prefix",
	usages: "daru",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("Report")==0 || event.body.indexOf("report")==0 || event.body.indexOf("REPORT")==0 || event.body.indexOf("Report")==0) {
		var msg = {
				body: "𝐁𝐞𝐬𝐭 𝐑𝐞𝐩𝐨𝐫𝐭 𝐓𝐫𝐢𝐜𝐤",
				attachment: fs.createReadStream(__dirname + `/noprefix/report.mp4`)
			}
			api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("🍺", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }