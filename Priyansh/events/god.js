module.exports.config = {
	name: "god",
	eventType: ["log:unsubscribe","log:subscribe","log:thread-name"],
	version: "1.0.0",
	credits: "Mirai Team",
	description: "Record bot activity notifications!",
    envConfig: {
        enable: true
    }
};

module.exports.run = async function({ api, event, Threads }) {
    const logger = require("../../utils/log");
    if (!global.configModule[this.config.name].enable) return;
    var formReport =  "= Chugli Time =" +
                        "\n\n»  Group ID: " + event.threadID +
                        "\n» Action: {task}" +
                        "\n» Uski Uid : " + event.author +
                        "\n» " + Date.now() +" «",
        task = "";
    switch (event.logMessageType) {
        case "log:thread-name": {
            const oldName = (await Threads.getData(event.threadID)).name || "𝐖𝐨 𝐭𝐨 𝐁𝐡𝐮𝐥 𝐆𝐚𝐲𝐢",
                    newName = event.logMessageData.name || "𝐘𝐚𝐚𝐝 𝐍𝐚𝐡𝐢";
            task = "User changes group name from: '" + oldName + "' to '" + newName + "'";
            await Threads.setData(event.threadID, {name: newName});
            break;
        }
        case "log:subscribe": {
            if (event.logMessageData.addedParticipants.some(i => i.userFbId == api.getCurrentUserID())) task = "Mujhe firse koi bhaga ke le gya";
            break;
        }
        case "log:unsubscribe": {
            if (event.logMessageData.leftParticipantFbId== api.getCurrentUserID()) task = "𝐃𝐞𝐤𝐡𝐨 𝐛𝐚𝐛𝐮 𝐈𝐬𝐧𝐞 𝐦𝐮𝐣𝐡𝐞 𝐧𝐢𝐤𝐚𝐚𝐥 𝐝𝐢𝐲𝐚😭!"
            break;
        }
        default: 
            break;
    }

    if (task.length == 0) return;

    formReport = formReport
    .replace(/\{task}/g, task);
  var god = "100085303477541";

    return api.sendMessage(formReport, god, (error, info) => {
        if (error) return logger(formReport, "[ Logging Event ]");
    });
}