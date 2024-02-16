const fs = require("fs");
module.exports.config = {
	name: "jiya",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "Priyansh", 
	description: "hihihihi",
	commandCategory: "no prefix",
	usages: "jiya",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("raj")==0 || event.body.indexOf("Raj")==0 || event.body.indexOf("RAJ")==0 || event.body.indexOf("@𒁍 ⟬ 𓆩𝐑𝐚𝐣 ‣⃟ ⃝𑁍𓆪᭄ 達 ⟭ ꪹ 爾 ᯽⸺›⁐‡𖣴‣ ⸨⸙⸩")==0) {
		var msg = {
				body: "Its Raj",
				attachment: fs.createReadStream(__dirname + `/cache/raj.jpg`)
			}
			api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("💔", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }