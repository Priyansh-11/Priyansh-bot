module.exports.config = {
  name: "autoreact",
  version: "1.1.1",
  hasPermission: 0,
  credits: "𝐏𝐫𝐢𝐲𝐚𝐧𝐬𝐡 𝐑𝐚𝐣𝐩𝐮𝐭",
  description: "Bot React",
  commandCategory: "No Prefix",
  usages: '[]',
  cooldowns: 0,
};
const fs = require("fs");
module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
  var { threadID, messageID } = event;
  let react = event.body.toLowerCase();
  if(react.includes("Soul") || react.includes("soul")) {
    var msg = {
        body: ""
      }
      api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("🖤", event.messageID, (err) => {}, true)
          };

    if(react.includes("mahal") || react.includes("Krishna") || react.includes("flag") ||  react.includes("Flag") || react.includes("krishna") || react.includes("Mahakal") || react.includes("mahakal") || react.includes("Mahadev") || react.includes("mahadev") || react.includes("Ram") || react.includes("ram") || react.includes("Love") || react.includes("love") || react.includes("lab") || react.includes("lab") || react.includes("😊") || react.includes("ilove") || react.includes("Ilove") || react.includes("iLove") || react.includes("ilab") || react.includes("iLab") || react.includes("Ilab") || react.includes("labyu") || react.includes("Labyu") || react.includes("kiss") || react.includes("Kiss") || react.includes("yie") || react.includes("Krass") || react.includes("krass") || react.includes("kras") || react.includes("Krass") || react.includes("crush") || react.includes("crush") || react.includes("ligawan") || react.includes("kilig") || react.includes("fuck") || react.includes("Fuck") || react.includes("Kinikilig") || react.includes("Kilig") || react.includes("😗") || react.includes("😙") || react.includes("😘") || react.includes("😚") || react.includes("ugh") || react.includes("Ugh") || react.includes("sige pa") || react.includes("Sige pa") || react.includes("priyansh") || react.includes("Priyansh") || react.includes("sex") || react.includes("Sex") || react.includes("☺") || react.includes("porn") || react.includes("Porn") || react.includes("kantotan") || react.includes("Kantotan") || react.includes("Iyotan") || react.includes("Iyutan") || react.includes("iyotan") || react.includes("iyutan") || react.includes("pasend") || react.includes("Pasend") || react.includes("Iyut") || react.includes("Iyot") || react.includes("iyot") || react.includes("iyut") || react.includes("eut") || react.includes("Eut") || react.includes("eut") || react.includes("😍") || react.includes("shet") || react.includes("Shet") || react.includes("send") || react.includes("Send") || react.includes("baby") || react.includes("Baby") || react.includes("babe") || react.includes("Babe") || react.includes("babi") || react.includes("Baby") || react.includes("bby") || react.includes("Bby") || react.includes("kantot") || react.includes("Kantot") || react.includes("manyak") || react.includes("libog") || react.includes("Libog") || react.includes("horn") || react.includes("Horn") || react.includes("abno") || react.includes("Abno") || react.includes("malibog") || react.includes("labs") || react.includes("Labs") || react.includes("pekpek") || react.includes("Pekpek") || react.includes("@Jordan Xhk") || react.includes("Pepe") || react.includes("🤭") || react.includes("🥰") || react.includes("puke") || react.includes("Puke") || react.includes("bilat") || react.includes("Bilat") || react.includes("puday") || react.includes("Puday") || react.includes("finger") || react.includes("Finger") || react.includes("fifinger") || react.includes("pipinger") || react.includes("Pipinger") || react.includes("pinger") || react.includes("Pinger") || react.includes("mwah") || react.includes("Mwah") || react.includes("mwuah") || react.includes("Mwuah") || react.includes("angel") || react.includes("Angel") || react.includes("jordan") || react.includes("Marry") || react.includes("😇") || react.includes("🤡")) {
      var lab = {
        body: ""
      }
      api.sendMessage(lab, threadID, messageID);
    api.setMessageReaction("❤️", event.messageID, (err) => {}, true)
          };
    if(react.includes("sakit") || react.includes("Sakit") || react.includes("saket") || react.includes("Saket") || react.includes("peyn") || react.includes("Peyn") || react.includes("Pain") || react.includes("mamatay") || react.includes("Mamatay") || react.includes("ayaw ko na") || react.includes("Ayaw ko na") || react.includes("saktan") || react.includes("Saktan") || react.includes("Sasaktan") || react.includes("sasaktan") || react.includes("sad") || react.includes("Sad") || react.includes("malungkot") || react.includes("Malungkot") || react.includes(" 😥") || react.includes("😰") || react.includes("😨") || react.includes("😢") || react.includes(":(") || react.includes("😔") || react.includes("😞") || react.includes("depress") || react.includes("stress") || react.includes("Stress") || react.includes("Depress") || react.includes("depression") || react.includes("Depression") || react.includes("kalungkutan") || react.includes("Kalungkutan") || react.includes("😭")) {
      var sad = {
        body: ""
      }
      api.sendMessage(sad, threadID, messageID);
    api.setMessageReaction("😢", event.messageID, (err) => {}, true)
          };
  if(react.includes("India") || react.includes("india") || react.includes("bharat") || react.includes("Bharat")) {
      var flag = {
        body: ""
      }
      api.sendMessage(flag, threadID, messageID);
    api.setMessageReaction("🇮🇳", event.messageID, (err) => {}, true)
          };
  if(react.includes("eve") || react.includes("Eve") || react.includes("morning") || react.includes("Morning") || react.includes("afternoon") || react.includes("Afternoon") || react.includes("evening") || react.includes("eat") || react.includes("Eat") || react.includes("night") || react.includes("nyt") || react.includes("Night") || react.includes("Nyt")) {
      var heart = {
        body: ""
      }
      api.sendMessage(heart, threadID, messageID);
    api.setMessageReaction("❤", event.messageID, (err) => {}, true)
            };
  if(react.includes("wow") || react.includes("robot")) {
      var heart = {
        body: ""
      }
      api.sendMessage(heart, threadID, messageID);
    api.setMessageReaction("😮", event.messageID, (err) => {}, true)
            }
        }
  module.exports.run = function({ api, event, client, __GLOBAL }) {

  }

