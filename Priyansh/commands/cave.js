module.exports.config = {
	name: "cave",
	version: "1.0.0",
	hasPermssion: 0,
	credits: "𝐏𝐫𝐢𝐲𝐚𝐧𝐬𝐡 𝐑𝐚𝐣𝐩𝐮𝐭",
	description: "Sell ​​your own capital",
	commandCategory: "Make money",
    cooldowns: 5,
    envConfig: {
        cooldownTime: 1000000
    }
};

module.exports.languages = {
    "vi": {
        "cooldown": "𝐁𝐚̣𝐧 𝐯𝐮̛̀𝐚 𝐜𝐡𝐢̣𝐜𝐡 𝐭𝐫𝐨𝐧𝐠 𝐡𝐨̂𝐦 𝐧𝐚𝐲 𝐫𝐨̂̀𝐢, 𝐭𝐫𝐚́𝐧𝐡 𝐛𝐢̣ 𝐤𝐢𝐞̣̂𝐭 𝐬𝐮̛́𝐜 𝐡𝐚̃𝐲 𝐪𝐮𝐚𝐲 𝐥𝐚̣𝐢 𝐬𝐚𝐮: %1 𝐩𝐡𝐮́𝐭 %2 𝐠𝐢𝐚̂𝐲 🛏",
        "rewarded": "𝐁𝐚̣𝐧 𝐯𝐮̛̀𝐚 𝐜𝐡𝐢̣𝐜𝐡 𝐨𝐯𝐞𝐫𝐧𝐢𝐠𝐡𝐭 𝐯𝐨̛́𝐢 𝐜𝐮̣ 𝐓𝐨𝐤𝐮𝐝𝐚 𝐯𝐚̀ 𝐧𝐡𝐚̣̂𝐧 𝐯𝐞̂̀ %2$ 💸",
        "job1": "Bạn đã bán vốn tự có!",
    },
    "en": {
        "cooldown": "You have worked today, to avoid exhaustion please come back after: %1 minute(s) %2 second(s).",
        "rewarded": "You did the job: Cave and received: %2$",
        "job1": "Cave",
    }
}

module.exports.run = async ({ event, api, Currencies, getText }) => {
    const { threadID, messageID, senderID } = event;
    
    const cooldown = global.configModule[this.config.name].cooldownTime;
    let data = (await Currencies.getData(senderID)).data || {};
    if (typeof data !== "undefined" && cooldown - (Date.now() - data.workTime) > 0) {
        var time = cooldown - (Date.now() - data.workTime),
            minutes = Math.floor(time / 20000),
            seconds = ((time % 20000) / 500).toFixed(0);
        
		return api.sendMessage(getText("cooldown", minutes, (seconds < 10 ? "0" + seconds : seconds)), event.threadID, event.messageID);
    }
    else {
        const job = [
            getText("job1"),
        ];
        const amount = Math.floor(Math.random() * 10000);
        return api.sendMessage(getText("rewarded", job[Math.floor(Math.random() * job.length)], amount), threadID, async () => {
            await Currencies.increaseMoney(senderID, parseInt(amount));
            data.workTime = Date.now();
            await Currencies.setData(event.senderID, { data });
            return;
        }, messageID);
    }     
      }