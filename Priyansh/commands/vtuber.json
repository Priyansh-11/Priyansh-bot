module.exports.config = {
    name: "vtuber",
    version: "1.0.0",
    hasPermssion: 0,
    credits: "𝐏𝐫𝐢𝐲𝐚𝐧𝐬𝐡 𝐑𝐚𝐣𝐩𝐮𝐭",
    description: "generate random vtuber photos",
    commandCategory: "vtuber",
    usages: "[gura/marine/rushia/pekora/coco/korone/amelia/fubuki/okayu/watame/uto/chloe/ayame/polka/botan/aloe]",
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
    case "korone":
    case "Korone":
    type = "korone";
    break;
    case "amelia":
    case "Amelia":
    case "ame":
    case "Ame":
    type = "amelia";
    break;
    case "fubuki":
    case "Fubuki":
    type = "fubuki";
    break;
    case "okayu":
    case "Okayu":
    type = "okayu";
    break;
    case "watame":
    case "Watame":
    type = "watame";
    break;
    case "uto":
    case "Uto":
    type = "uto";
    break;
    case "chloe":
    case "Chloe":
    type = "chloe";
    break;
    case "ayame":
    case "Ayame":
    type = "ayame";
    break;
    case "polka":
    case "Polka":
    type = "polka";
    break;
    case "botan":
    case "Botan":
    type = "botan";
    break;
    case "aloe":
    case "Aloe":
    type = "aloe";
    break;
    default:
    return api.sendMessage(`Lists of the Characters:\n [gura/marine/rushia/pekora/coco/korone/amelia/fubuki/okayu/watame/uto/chloe/ayame/polka/botan/aloe]\n\nEx:\n${global.config.PREFIX}vtuber gura`, threadID, messageID);
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