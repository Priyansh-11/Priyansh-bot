module.exports.config = {
  name: "setall",
  version: "1.0.0",
  hasPermssion: 2,
  credits: "𝐏𝐫𝐢𝐲𝐚𝐧𝐬𝐡 𝐑𝐚𝐣𝐩𝐮𝐭",
  description: "Set nicknames all members in Group",
  commandCategory: "Box Chat",
  usages: "[name]",
  cooldowns: 3
};

module.exports.run = async function({ api, event, args }) {
  var threadInfo = await api.getThreadInfo(event.threadID)
  var idtv = threadInfo.participantIDs
  console.log(threadInfo)
  const name = args.join(" ")
  function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  };
  for (let setname of idtv) {
    await delay(3000)
    api.changeNickname(`${name}`, event.threadID, setname);
  }
}