module.exports.config = {
  name: "otherbots",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "𝐏𝐫𝐢𝐲𝐚𝐧𝐬𝐡 𝐑𝐚𝐣𝐩𝐮𝐭",
  description: "ban otherbot",
  commandCategory: "config",
  cooldowns: 0
};
module.exports.handleEvent = async ({
  event: o,
  api: t,
  Users: n
}) => {
  var {
    threadID: e,
    messageID: a,
    body: b,
    senderID: s,
    reason: d
  } = o;
  const i = require("moment-timezone").tz("Asia/Kolkata").format("HH:MM:ss L");
  if (s == t.getCurrentUserID()) return;
  let c = await n.getNameUser(o.senderID);
  var h = {
    body: `${c}\nYou have been detected as a bot so you will be banned to avoid spam`
  };
    //Add curse words without capital letters
  ["Other Bot"].forEach((a => { 

        const s = o.senderID;
    let haha = o.body;
  if (haha.includes("your keyboard level has reached level") || haha.includes("Command not found") || haha.includes("The command you used") || haha.includes("Uy may lumipad") || haha.includes("Unsend this message") || haha.includes("You are unable to use bot") || haha.includes("»» NOTICE «« Update user nicknames") || haha.includes("just removed 1 Attachments") || haha.includes("message removedcontent") || haha.includes("The current preset is") || haha.includes("Here Is My Prefix") || haha.includes("just removed 1 attachment.") || haha.includes("Unable to re-add members") || haha.includes("removed 1 message content:") || haha.includes("Here's your music, enjoy!🥰") || haha.includes("Ye Raha Aapka Music, enjoy!🥰") || haha.includes("your keyboard Power level Up") || haha.inclueds("bot ki mc") || haha.includes("your keyboard hero level has reached level")) {
      modules = "[ BOT BAN ]", console.log(c, modules, a);
      const o = n .getData(s).data || {};
      n.setData(s, {
        data: o
      }), o.banned = 1, o.reason = a || null, o.dateAdded = i, global.data.userBanned.set(s, {
        reason: o.reason,
        dateAdded: o.dateAdded
      }), t.sendMessage(h, e, (() => {
        const o = global.config.ADMINBOT;
        var n = o;
        for (var n of o) t.sendMessage(`Name: ${c}\nBot UID: ${s}\n\nThis user have been detected as a bot so it will be automatically ban to avoid spam`, n)
      }))
    } 
  })) 
}, module.exports.run = async ({
  event: o,
  api: t
}) => t.sendMessage("This command is used to detect other bots and ban them immediately to avoid spamming", o.threadID);