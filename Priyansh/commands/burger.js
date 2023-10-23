const fs = require("fs");

module.exports.config = {

	name: "Burger",

    version: "7.8.6",

	hasPermssion: 0,

	credits: "Priyansh Rajput", 

	description: "no prefix",

	commandCategory: "No command marks needed",

	usages: "ADMIN INFO",

    cooldowns: 1, 

};



module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {

	var { threadID, messageID } = event;

	if (event.body.indexOf("Burger")==0 || (event.body.indexOf("BURGER")==0 || (event.body.indexOf("burger")==0 || (event.body.indexOf("Bot burger da")==0)))) {

		var msg = {

				body: "🥵-𝙇�𝙊𝙤 𝙇𝙚𝙩'𝙨 𝙀𝙖𝙩 𝘽𝙪𝙧𝙜𝙚𝙧 (⓿_⓿)-🍔",

				attachment: fs.createReadStream(__dirname + `/noprefix/burger.jpeg`)

			}

			api.sendMessage(msg, threadID, messageID);

		}

	}

	module.exports.run = function({ api, event, client, __GLOBAL }) {



                                 }
