module.exports.config = {
  name: "avt",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "𝐏𝐫𝐢𝐲𝐚𝐧𝐬𝐡 𝐑𝐚𝐣𝐩𝐮𝐭",
  description: "get avt id by people using it",
  commandCategory: "Công cụ",
  cooldowns: 0
};

module.exports.run = async function({ api, event, args, Threads }) {
const request = require("request");
const fs = require("fs")
const axios = require("axios")
const threadSetting = (await Threads.getData(String(event.threadID))).data || {};
const prefix = (threadSetting.hasOwnProperty("PREFIX")) ? threadSetting.PREFIX : global.config.PREFIX;
const mn = this.config.name
if (!args[0]) return api.sendMessage(`[⚜️]=== 𝗙𝗔𝗖𝗘𝗕𝗢𝗢𝗞 𝗔𝗩𝗧 ===[⚜️]\n\n[⚜️]→ ${prefix}${mn} box is get avt your group\n\n[⚜️]→ ${prefix}${mn} id [id to get] <get the image of the uid of the people>\n\n[⚜️]→ ${prefix}${mn} link [link to get] <get the link of your people>\n\n[⚜️]→ ${prefix}${mn} user <the empty command is the get avatar of your user user>\n\n[⚜️]→ ${prefix}${mn} user [@mentions] <get avatar people tagged>`,event.threadID,event.messageID);
  if (args[0] == "box") {
           if(args[1]){ let threadInfo = await api.getThreadInfo(args[1]);
           let imgg = threadInfo.imageSrc;
       if(!imgg) api.sendMessage(`[⚜️]→ AVATAR your box ${threadInfo.threadName} here`,event.threadID,event.messageID);
        else var callback = () => api.sendMessage({body:`[⚜️]→ Avata box ${threadInfo.threadName} here`,attachment: fs.createReadStream(__dirname + "/cache/1.png")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/1.png"), event.messageID); 
      return request(encodeURI(`${threadInfo.imageSrc}`)).pipe(fs.createWriteStream(__dirname+'/cache/1.png')).on('close',() => callback());
             }    

            let threadInfo = await api.getThreadInfo(event.threadID);
            let img = threadInfo.imageSrc;
          if(!img) api.sendMessage(`[⚜️]→ AVATAR your box ${threadInfo.threadName} here`,event.threadID,event.messageID)
          else  var callback = () => api.sendMessage({body:`[⚜️]→ AVATAR your box ${threadInfo.threadName} here`,attachment: fs.createReadStream(__dirname + "/cache/1.png")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/1.png"), event.messageID);   
      return request(encodeURI(`${threadInfo.imageSrc}`)).pipe(fs.createWriteStream(__dirname+'/cache/1.png')).on('close',() => callback());

}
else if (args[0] == "id") {
  try {
  var id = args[1];
  if (!id) return api.sendMessage(`[⚜️]→ Please enter uid to get avatar.`,event.threadID,event.messageID);
   var callback = () => api.sendMessage({attachment: fs.createReadStream(__dirname + "/cache/1.png")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/1.png"),event.messageID);   
   return request(encodeURI(`https://graph.facebook.com/${id}/picture?height=720&width=720&access_token=6628568379%7Cc1e620fa708a1d5696fb991c1bde5662`)).pipe(fs.createWriteStream(__dirname+'/cache/1.png')).on('close',() => callback());
 }
 catch (e) {
  api.sendMessage(`[⚜️]→ Can't get photo user.`,event.threadID,event.messageID);
 }
}
else if (args[0] == "link") {
var link = args[1];
if (!link) return api.sendMessage(`[⚜️]→ Please enter link to get avatar.`,event.threadID,event.messageID);
var tool = require("fb-tools");
try {
var id = await tool.findUid(args[1] || event.messageReply.body);
var callback = () => api.sendMessage({attachment: fs.createReadStream(__dirname + "/cache/1.png")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/1.png"),event.messageID);   
return request(encodeURI(`https://graph.facebook.com/${id}/picture?height=720&width=720&access_token=6628568379%7Cc1e620fa708a1d5696fb991c1bde5662`)).pipe(fs.createWriteStream(__dirname+'/cache/1.png')).on('close',() => callback());
}
catch(e){
    api.sendMessage("[⚜️]→ User does not exist.",event.threadID,event.messageID)
}
}
else if(args[0] == "user") {
  if (!args[1]) {
    var id = event.senderID;
    var callback = () => api.sendMessage({attachment: fs.createReadStream(__dirname + "/cache/1.png")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/1.png"),event.messageID);   
    return request(encodeURI(`https://graph.facebook.com/${id}/picture?height=720&width=720&access_token=6628568379%7Cc1e620fa708a1d5696fb991c1bde5662`)).pipe(fs.createWriteStream(__dirname+'/cache/1.png')).on('close',() => callback());
  }
  else if (args.join().indexOf('@') !== -1) {
    var mentions = Object.keys(event.mentions)
    var callback = () => api.sendMessage({attachment: fs.createReadStream(__dirname + "/cache/1.png")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/1.png"),event.messageID);   
    return request(encodeURI(`https://graph.facebook.com/${mentions}/picture?height=720&width=720&access_token=6628568379%7Cc1e620fa708a1d5696fb991c1bde5662`)).pipe(fs.createWriteStream(__dirname+'/cache/1.png')).on('close',() => callback());
  }
  else {
    api.sendMessage(`[⚜️]→ To install Sai order. Enter ${prefix}${mn} to see your module's commands..`,event.threadID,event.messageID);
  }
}
else {
  api.sendMessage(`[⚜️]→ To install Sai order. Enter ${prefix}${mn} to see your module's commands..`,event.threadID,event.messageID);
}
}
