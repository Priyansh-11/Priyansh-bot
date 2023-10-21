const fs = require("fs");
module.exports.config = {
	name: "vineboom",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "𝐏𝐫𝐢𝐲𝐚𝐧𝐬𝐡 𝐑𝐚𝐣𝐩𝐮𝐭", 
	description: "hihihihi",
	commandCategory: "Không cần dấu lệnh",
	usages: "vineboom",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
  let bot = ['100081534257842'];
	if (event.body.indexOf("vineboom")==0 || event.body.indexOf("Vineboom")==0 || event.body.indexOf("vine boom")==0 || event.body.indexOf("Vine boom")==0 ||event.body.indexOf("therock")==0 || event.body.indexOf("Therock")==0 || event.body.indexOf("the rock")==0 || event.body.indexOf("The Rock")==0 ||event.body.indexOf("darock")==0 || event.body.indexOf("Darock")==0 && !bot.includes(event.senderID))  {
		var msg = {
				body: "🤨",
				attachment: fs.createReadStream(__dirname + `/noprefix/vineboom.gif`)
			}
			api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("🤨", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }