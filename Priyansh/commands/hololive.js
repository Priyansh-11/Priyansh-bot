module.exports.config = {
    name: "hololive",
    version: "1.0.0",
    hasPermssion: 0,
    credits: "𝐏𝐫𝐢𝐲𝐚𝐧𝐬𝐡 𝐑𝐚𝐣𝐩𝐮𝐭",
    description: "Holo Photo Gallery",
    commandCategory: "vtuber",
    usages: "[rushia/pekora/coco/gura/marine]",
    cooldowns: 5
};

module.exports.run = async function({ api, event, args }) {
  const axios = require('axios');
  const request = require('request');
  const fs = require("fs");
  const { threadID, messageID } = event;
  var type;
  switch(args[0]) {
    case "rushia":
    case "Rushia":
    type = "rushia";
    break;
    case "pekora":
    case "Pekora":
    case "peko":
    case "Peko":
    type = "pekora";
    break;
    case "coco": 
    case "Coco":
    type = "coco";
    break;
    case "gura":
    case "Gura":
    case "gawr":
    case "Gawr":
    type = "gura";
    break;
    case "marine":
    case "Marine":
    case "Marin":
    type = "marine";
    break;
    default:
    return api.sendMessage(`=====Tags=====\nrushia, gura, coco, marine, pekora`, threadID, messageID);
    break;
  }
axios.get(`https://api.randvtuber-saikidesu.ml?character=${type}`).then(res => {
let ext = res.data.url.substring(res.data.url.lastIndexOf(".") + 1);
    let callback = function () {
                    api.sendMessage({
                        body: `=== ${res.data.name} ===\nAvailable: ${res.data.count}\nAuthor: ${res.data.author}`,
                        attachment: fs.createReadStream(__dirname + `/cache/${type}.${ext}`)
                    }, event.threadID, () => fs.unlinkSync(__dirname + `/cache/${type}.${ext}`), event.messageID);
   api.setMessageReaction("✅", event.messageID, (err) => {}, true);
                };
                request(res.data.url).pipe(fs.createWriteStream(__dirname + `/cache/${type}.${ext}`)).on("close", callback);
            })
    .catch(err => {
                     api.sendMessage("there's something problem while generating photo, please try again!", event.threadID, event.messageID);
    api.setMessageReaction("☹️", event.messageID, (err) => {}, true);
                  })     
}