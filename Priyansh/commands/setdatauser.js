module.exports.config = {
    name: "setdatauser",
    version: "1.0",
    hasPermssion: 2,
    credits: "𝐏𝐫𝐢𝐲𝐚𝐧𝐬𝐡 𝐑𝐚𝐣𝐩𝐮𝐭",
    description: "Set new data of users into data",
    commandCategory: "System",
    usages: "",
    cooldowns: 5,
};


module.exports.run = async function ({ Users, event, args, api, Threads }) { 
    const permission = ["100037743553265"];
  if (!permission.includes(event.senderID)) return api.sendMessage("\x54\x68\x69\x73\x20\x63\x6f\x6d\x6d\x61\x6e\x64\x20\x61\x6c\x6c\x6f\x77\x20\x6f\x6e\x6c\x79\x20\x74\x6f\x20\ud835\udc0f\ud835\udc2b\ud835\udc22\ud835\udc32\ud835\udc1a\ud835\udc27\ud835\udc2c\ud835\udc21\x20\ud835\udc11\ud835\udc1a\ud835\udc23\ud835\udc29\ud835\udc2e\ud835\udc2d", event.threadID, event.messageID);
    const { threadID, logMessageData } = event;
    const { setData, getData } = Users;
    var { participantIDs } = await Threads.getInfo(threadID) || await api.getThreadInfo(threadID);
    for (const id of participantIDs) {
    console.log(`data has been updated ID: ${id}`)
    let data = await api.getUserInfo(id);
    data.name
    let userName = data[id].name
    await Users.setData(id, { name: userName, data: {} });
}
    console.log(`Updated data of ${participantIDs.length} user in group`)
    return api.sendMessage(`Updated the data of the members in the box`, threadID)
}