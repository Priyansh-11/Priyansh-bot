module.exports.config = {
  name: "pair",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "𝐏𝐫𝐢𝐲𝐚𝐧𝐬𝐡 𝐑𝐚𝐣𝐩𝐮𝐭",
  description: "Pairing",
  commandCategory: "love",
  usages: "pair",
  dependencies: {
        "axios": "",
        "fs-extra": ""
  },
  cooldowns: 0
}

module.exports.run = async function ({ args, Users, Threads, api, event, Currencies }) {
  const { loadImage, createCanvas } = require("canvas");
  const fs = global.nodemodule["fs-extra"];
  const axios = global.nodemodule["axios"];
  // let pathImg = __dirname + "/cache/giflove.png";
  // let pathAvt1 = __dirname + "/cache/Avtmot.png";
  // let pathAvt2 = __dirname + "/cache/Avthai.png";

  var id1 = event.senderID;
  var name1 = await Users.getNameUser(id1);
  var ThreadInfo = await api.getThreadInfo(event.threadID);
  var all = ThreadInfo.userInfo
  for (let c of all) {
    if (c.id == id1) var gender1 = c.gender;
  };
  const botID = api.getCurrentUserID();
  let ungvien = [];
  if(gender1 == "FEMALE"){
    for (let u of all) {
      if (u.gender == "MALE") {
      if (u.id !== id1 && u.id !== botID) ungvien.push(u.id)
      }
    }
  }
  else if(gender1 == "MALE"){
    for (let u of all) {
      if (u.gender == "FEMALE") {
      if (u.id !== id1 && u.id !== botID) ungvien.push(u.id)
      }
    }
  }
  else {
  for (let u of all) {
      if (u.id !== id1 && u.id !== botID) ungvien.push(u.id)
    }
  }
  var id2 = ungvien[Math.floor(Math.random() * ungvien.length)];
  var name2 = await Users.getNameUser(id2);
  var rd1 = Math.floor(Math.random() * 100) + 1;
  var cc = ['21%', '67%', '19%', '37%', '17%', '96%', '52%', '62%', '76%', '83%', '100%', '99%', "0%", "48%"];
  var rd2 = cc[Math.floor(Math.random() * cc.length)];
  var djtme = [`${rd1}`, `${rd1}`, `${rd1}`, `${rd1}`, `${rd1}`, `${rd2}`, `${rd1}`, `${rd1}`, `${rd1}`, `${rd1}`];

  var tile = djtme[Math.floor(Math.random() * djtme.length)];

  let getAvtmot = (
    await axios.get(
      `https://graph.facebook.com/${id1}/picture?width=720&height=720&access_token=6628568379%7Cc1e620fa708a1d5696fb991c1bde5662`,
      { responseType: "arraybuffer" }
    )
  ).data;
  fs.writeFileSync( __dirname + "/cache/avt.png", Buffer.from(getAvtmot, "utf-8"));

  let gifLove = (await axios.get( `https://i.imgur.com/vcydK3t.gif`, { responseType: "arraybuffer" } )).data; 
  fs.writeFileSync( __dirname + "/cache/giflove.png", Buffer.from(gifLove, "utf-8") );

  let getAvthai = (
    await axios.get(
      `https://graph.facebook.com/${id2}/picture?width=720&height=720&access_token=6628568379%7Cc1e620fa708a1d5696fb991c1bde5662`,
      { responseType: "arraybuffer" }
    )
  ).data;
  fs.writeFileSync( __dirname + "/cache/avt2.png", Buffer.from(getAvthai, "utf-8"));

  var imglove = [];
        imglove.push(fs.createReadStream(__dirname + "/cache/avt.png"));
        imglove.push(fs.createReadStream(__dirname + "/cache/giflove.png"));
        imglove.push(fs.createReadStream(__dirname + "/cache/avt2.png"));
  var msg = {body: `🥰Successful pairing!\n💌Wish you two hundred years of happiness\nDual ratio: ${tile}%\n`+name1+" "+"❤️"+" "+name2, mentions: [{
                       tag: `${name2}`,
                       id: id2
                     }], attachment: imglove}  
   return api.sendMessage(msg, event.threadID, event.messageID);
  }
