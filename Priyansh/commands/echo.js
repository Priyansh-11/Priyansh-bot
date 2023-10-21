module.exports.config = {
  name: "echo",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "𝐏𝐫𝐢𝐲𝐚𝐧𝐬𝐡 𝐑𝐚𝐣𝐩𝐮𝐭",
  description: "echo",
  commandCategory: "Other",
    cooldowns: 0,
};
module.exports.run = async function({ api, event, args }) {
let juswa = args.join(" ");
return api.sendMessage(`${juswa}`, event.threadID, event.messageID);
}