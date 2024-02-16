const fs = require("fs");
module.exports.config = {
	name: "chumma",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "Priyansh", 
	description: "hihihihi",
	commandCategory: "no prefix",
	usages: "pizza",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("umhh umhh")==0 || event.body.indexOf("😘")==0 || event.body.indexOf("chumma")==0 || event.body.indexOf("kiss me")==0) {
		var msg = {
				body: "umhhhh UMHHHH UMHHHH Baby 😘😘😘😘😋",
				attachment: fs.createReadStream(__dirname + `/cache/kiss.gif`)
			}
			api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("😘", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }