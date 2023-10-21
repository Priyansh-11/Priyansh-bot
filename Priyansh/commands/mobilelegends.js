module.exports.config = {
  name: "mobilelegends",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "𝐏𝐫𝐢𝐲𝐚𝐧𝐬𝐡 𝐑𝐚𝐣𝐩𝐮𝐭",
  description: "mobile legends memes",
  commandCategory: "Hình Ảnh",
  usages: "mobilelegends",
  cooldowns: 3,
  dependencies: {
    "request":"",
    "fs-extra":"",
    "axios":""
  }
};

module.exports.run = async({api,event,args,client,Users,Threads,__GLOBAL,Currencies}) => {
const axios = global.nodemodule["axios"];
const request = global.nodemodule["request"];
const fs = global.nodemodule["fs-extra"];
  var link = [
"https://i.imgur.com/KOoiqg6.jpg",
"https://i.imgur.com/sRUIrUk.jpg", 
"https://i.imgur.com/rQADlNS.jpg", 
"https://i.imgur.com/SFhEKpH.jpg", 
"https://i.imgur.com/QSnmMiE.jpg", 
"https://i.imgur.com/1CkO7F3.jpg", 
  ];
	 var callback = () => api.sendMessage({body:`sarap : ${link.length}`,attachment: fs.createReadStream(__dirname + "/cache/ken.jpg")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/ken.jpg"));	
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/ken.jpg")).on("close",() => callback());
   };