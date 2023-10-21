module.exports.config = {
	name: "rnamebot",
	version: "1.0.1",
	hasPermssion: 2,
	credits: "𝐏𝐫𝐢𝐲𝐚𝐧𝐬𝐡 𝐑𝐚𝐣𝐩𝐮𝐭",
	description: "Change the bot's nickname in the whole bot!",
	commandCategory: "system",
	usages: "[Nickname to set]",
	cooldowns: 20,
};

module.exports.run = async ({ event, api, args, Threads }) => {
    const custom = args.join(" "),
            allThread = await Threads.getAll(["threadID"]),
            idBot = api.getCurrentUserID();
    var threadError = [],
        count = 0;
    if (custom.length != 0) {
        for (const idThread of allThread) {
            api.changeNickname(custom, idThread.threadID, idBot, (err) => (err) ? threadError.push(idThread.threadID) : '');
            count+=1;
            await new Promise(resolve => setTimeout(resolve, 500));
        }
        return api.sendMessage(`Successfully renamed for ${count} group`, event.threadID, () => {
            if (threadError != 0) return api.sendMessage("[!] Unable to change name at" + threadError.lenght + " Group",event.threadID, event.messageID)
        }, event.messageID);
    }
    else {
        for (const idThread of allThread) {
            const threadSetting = global.client.threadData.get(idThread.threadID) || {};
            api.changeNickname(`[ ${(threadSetting.hasOwnProperty("PREFIX")) ? threadSetting.PREFIX : global.config.PREFIX} ] • ${(!global.config.BOTNAME) ? "MrTomXxX" : global.config.BOTNAME}`, idThread.threadID, idBot, (err) => (err) ? threadError.push(idThread.threadID) : '');
            count+=1;
            await new Promise(resolve => setTimeout(resolve, 500));
        }
        return api.sendMessage(`Successfully renamed ${count} group`, event.threadID, () => {
            if (threadError != 0) return api.sendMessage("[!] Unable to change name at " + threadError.length + " Group",event.threadID, event.messageID)
        }, event.messageID);
    }
}