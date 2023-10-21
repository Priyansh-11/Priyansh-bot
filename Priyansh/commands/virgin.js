module.exports.config = {
	name: "virgin",
	version: "1.0.0",
	hasPermssion: 0,
	credits: "𝐏𝐫𝐢𝐲𝐚𝐧𝐬𝐡 𝐑𝐚𝐣𝐩𝐮𝐭",
	description: "Random picture of the most beautiful boy in Vietnam :))",
	commandCategory: "Random-IMG",
	usages: "virgin",
	cooldowns: 5
};

module.exports.run = async ({ api, event }) => {
	const axios = require('axios');
	const request = require('request');
	const fs = require("fs");
	axios.get('https://ngoctrinh.ocvat2810.repl.co/').then(res => {
	let ext = res.data.data.substring(res.data.data.lastIndexOf(".") + 1);
	let callback = function () {
					api.sendMessage({
						attachment: fs.createReadStream(__dirname + `/cache/trinh.${ext}`)
					}, event.threadID, () => fs.unlinkSync(__dirname + `/cache/trinh.${ext}`), event.messageID);
				};
				request(res.data.data).pipe(fs.createWriteStream(__dirname + `/cache/trinh.${ext}`)).on("close", callback);
			})
}