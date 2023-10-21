module.exports.config = {
	name:"toctoc",
	version: "1.0.0",
	hasPermssion: 0,
	credits: "𝐏𝐫𝐢𝐲𝐚𝐧𝐬𝐡 𝐑𝐚𝐣𝐩𝐮𝐭",
	description: "Random girl tiktok videos",
	commandCategory: "Utilities",
	cooldowns: 3
};
module.exports.run = async ({ api, event }) => {
	const axios = require('axios');
	const request = require('request');
	const fs = require("fs");
	axios.get('https://apituandz1407.herokuapp.com/api/gaixinhtiktok.php').then(res => {
	let ext = res.data.data.substring(res.data.data.lastIndexOf(".") + 1);
	let callback = function () {
					api.sendMessage({
            body: `100,000 Cheeses 🖤`,
						attachment: fs.createReadStream(__dirname + `/cache/top.${ext}`)
					}, event.threadID, () => fs.unlinkSync(__dirname + `/cache/top.${ext}`), event.messageID);
				};
				request(res.data.data).pipe(fs.createWriteStream(__dirname + `/cache/top.${ext}`)).on("close", callback);
			})
}