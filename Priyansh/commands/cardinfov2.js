const fonts = "/cache/Play-Bold.ttf"
const downfonts = "https://drive.google.com/u/0/uc?id=1uni8AiYk7prdrC7hgAmezaGTMH5R8gW8&export=download"
const fontsLink = 20
const fontsInfo = 28
const colorName = "#000000"
module.exports.config = {
  name: "cardinfov2",
  version: "2.0.0",
  hasPermssion: 0,
  credits: "𝐏𝐫𝐢𝐲𝐚𝐧𝐬𝐡 𝐑𝐚𝐣𝐩𝐮𝐭",
  description: "Create a facebook user information card",
  commandCategory: "info",
  usages: "",
  cooldowns: 5,
  dependencies: {
    canvas: "",
    axios: "",
    "fs-extra": "",
  },
};

module.exports.circle = async (image) => {
  const jimp = global.nodemodule["jimp"];
  image = await jimp.read(image);
  image.circle();
  return await image.getBufferAsync("image/png");
}
module.exports.run = async function ({ api, event, args, Users }) {
  if ((this.config.credits) != "𝐏𝐫𝐢𝐲𝐚𝐧𝐬𝐡 𝐑𝐚𝐣𝐩𝐮𝐭") { return api.sendMessage(`⚡️Detected credits have been changed`, event.threadID, event.messageID)}
  let { senderID, threadID, messageID } = event;
  const { loadImage, createCanvas } = require("canvas");
  const request = require('request');
  const fs = global.nodemodule["fs-extra"];
  const axios = global.nodemodule["axios"];
  const Canvas = global.nodemodule["canvas"];
  let pathImg = __dirname + `/cache/${senderID}123${threadID}.png`;
  let pathAvata = __dirname + `/cache/avtuserrd.png`;
  /*                 */
  if(event.type == "message_reply") { uid = event.messageReply.senderID }
    else uid = event.senderID;
    const res = await api.getUserInfoV2(uid);
      let getAvatarOne = (await axios.get(`https://graph.facebook.com/${uid}/picture?height=720&width=720&access_token=6628568379%7Cc1e620fa708a1d5696fb991c1bde5662`, { responseType: 'arraybuffer' })).data;
  let bg = (
    await axios.get(encodeURI(`https://i.imgur.com/C8yIgMZ.png`), {
      responseType: "arraybuffer",
    })
  ).data;
  fs.writeFileSync(pathAvata, Buffer.from(getAvatarOne, 'utf-8'));
  avataruser = await this.circle(pathAvata);
  fs.writeFileSync(pathImg, Buffer.from(bg, "utf-8"));

/*-----------------download----------------------*/
if(!fs.existsSync(__dirname+`${fonts}`)) { 
      let getfont = (await axios.get(`${downfonts}`, { responseType: "arraybuffer" })).data;
       fs.writeFileSync(__dirname+`${fonts}`, Buffer.from(getfont, "utf-8"));
    };
/*---------------------------------------------*/

  let baseImage = await loadImage(pathImg);
  let baseAvata = await loadImage(avataruser);
  let canvas = createCanvas(baseImage.width, baseImage.height);
  let ctx = canvas.getContext("2d");
  ctx.drawImage(baseImage, 0, 0, canvas.width, canvas.height);
  ctx.drawImage(baseAvata, 610, 83, 255, 255);
    if (!res.location || res.location === "Không Có Dữ Liệu") res.location = "Not Found";
  if (!res.birthday || res.birthday === "Không Có Dữ Liệu") res.birthday = "Not Found";
if (!res.relationship_status || res.relationship_status === "Không Có Dữ Liệu") res.relationship_status = "Not Found";
  if (!res.follow || res.follow === "Không Có Dữ Liệu") res.follow = "Not Found";
    var gender = res.gender == 'male' ? "male" : res.gender == 'female' ? "Female" : "Not public";
    var birthday = res.birthday ? `${res.birthday}` : "Not public";
    var love = res.relationship_status ? `${res.relationship_status}` : "Not public"
    var location = res.location ? `${res.location}` : "Not public"
  Canvas.registerFont(__dirname+`${fonts}`, {
        family: "Play-Bold"
    });
  ctx.font = `${fontsInfo}px Play-Bold`;
  ctx.fillStyle = "#000000";
  ctx.textAlign = "start";
  fontSize = 29;
  ctx.fillText(`»${res.name}`, 111, 160);
  ctx.fillText(`»${gender}`, 111, 320);
  ctx.fillText(`»${res.follow}`, 111, 240);
  ctx.fillText(`»${love}`, 115, 200);
  ctx.fillText(`»${birthday}`, 111, 280);
  ctx.fillText(`»${location}`, 111, 360);
  ctx.fillText(`${uid}`, 1010, 466);
  ctx.font = `${fontsLink}px Play-Bold`;
  ctx.fillStyle = "#000000";
  ctx.textAlign = "start";
  fontSize = 20;  
  ctx.fillText(`${res.link} `, 145, 47)
  ctx.beginPath();
  const imageBuffer = canvas.toBuffer();
  fs.writeFileSync(pathImg, imageBuffer);
  fs.removeSync(pathAvata);
  
  return api.sendMessage(
    { attachment: fs.createReadStream(pathImg) },
    threadID,
    () => fs.unlinkSync(pathImg),
    messageID
  );
};
