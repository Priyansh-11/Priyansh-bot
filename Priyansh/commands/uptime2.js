module.exports.config = {
	name: "uptime2",
	version: "1.0.0",
	hasPermssion: 1,
	credits: "𝐏𝐫𝐢𝐲𝐚𝐧𝐬𝐡 𝐑𝐚𝐣𝐩𝐮𝐭",
  hide: true,
	description: "Random images by api - uptime",
	commandCategory: "administrators",
	cooldowns: 2,
  dependencies: {
		"pidusage": ""
	}
};
function byte2mb(bytes) {
	const units = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
	let l = 0, n = parseInt(bytes, 10) || 0;
	while (n >= 1024 && ++l) n = n / 1024;
	return `${n.toFixed(n < 10 && l > 0 ? 1 : 0)} ${units[l]}`;
}
module.exports.run = async ({ api, event, args , Threads}) => {
  var username = process.env.REPL_OWNER
  if(username !== undefined) {
    var urlRepl = `https://${process.env.REPL_SLUG}.${username}.repl.co`
}
  var os = require("os");
	var cpus = os.cpus();
	var chips;
	for (var i of cpus) chips = i.model, speed = i.speed;
	if (cpus == undefined);
var time = process.uptime(),
        hours = Math.floor(time / (60 * 60)),
        minutes = Math.floor((time % (60 * 60)) / 60),
        seconds = Math.floor(time % 60);
  var z_1 = (hours < 10) ? '0' + hours : hours;
    var x_1 = (minutes < 10) ? '0' + minutes : minutes;
    var y_1 = (seconds < 10) ? '0' + seconds : seconds;
    const axios = require('axios')
    const threadSetting = (await Threads.getData(String(event.threadID))).data || 
    {};
    const prefix = (threadSetting.hasOwnProperty("PREFIX")) ? threadSetting.PREFIX 
    : global.config.PREFIX;
    const { commands } = global.client;
	const pidusage = await global.nodemodule["pidusage"](process.pid);
	const timeStart = Date.now();
  const fs = require('fs-extra');
   if (!fs.existsSync(__dirname +
        `/tad/UTM-Avo.ttf`)) {
        let getfont = (await axios.get(`https://github.com/quyenkaneki/data/blob/main/UTM-Avo.ttf?raw=true`, { responseType: "arraybuffer" })).data;
        fs.writeFileSync(__dirname + `/tad/UTM-Avo.ttf`, Buffer.from(getfont, "utf-8"));
      }
         if (!fs.existsSync(__dirname +
      `/tad/phenomicon.ttf`)) {
      let getfont2 = (await axios.get(`https://github.com/quyenkaneki/data/blob/main/phenomicon.ttf?raw=true`, { responseType: "arraybuffer" })).data;
      fs.writeFileSync(__dirname + `/tad/phenomicon.ttf`, Buffer.from(getfont2, "utf-8"));
    };
  if (!fs.existsSync(__dirname +
      `/tad/CaviarDreams.ttf`)) {
      let getfont3 = (await axios.get(`https://github.com/quyenkaneki/data/blob/main/CaviarDreams.ttf?raw=true`, { responseType: "arraybuffer" })).data;
      fs.writeFileSync(__dirname + `/tad/CaviarDreams.ttf`, Buffer.from(getfont3, "utf-8"));
    };
   const { loadImage, createCanvas, registerFont } = require("canvas");
  
  let k = args[0];
   if(args[0] == "list"){
    const alime = (await axios.get('https://raw.githubusercontent.com/quyenkaneki/data/main/dataanime.json')).data
    var count = alime.listAnime.length;
      var data = alime.listAnime
      var page = 1;
      page = parseInt(args[1]) || 1;
      page < -1 ? page = 1 : "";
      var limit = 20;
      var numPage = Math.ceil(count/limit);
      var msg = ``;
      for(var i = limit*(page - 1); i < limit*(page-1) + limit; i++){
         if(i >= count) break;
        msg += `[ ${i+1} ] - ${data[i].ID} | ${data[i].name}\n`;
      }
      msg += `Trang (${page}/${numPage})\nDùng ${global.config.PREFIX}${this.config.name} list <số trang>`;
      return api.sendMessage(msg, event.threadID,event.messageID);
   }
  if(!k){
  var id = Math.floor(Math.random() * 848) +1
  } else {
    var id = k
  }
    const lengthchar = (await axios.get('https://raw.githubusercontent.com/quyenkaneki/data/main/dataimganime.json')).data
    console.log(lengthchar.length)
    const Canvas = require('canvas');
    let pathImg = __dirname + `/tad/${id}.png`;
    let pathAva = __dirname + `/tad/${event.senderID}.png`;
    let background = (await axios.get(encodeURI(`https://imgur.com/x5JpRYu.png`), { responseType: "arraybuffer" })).data;
    fs.writeFileSync(pathImg, Buffer.from(background, "utf-8"));
    let ava = (await axios.get(encodeURI(`${lengthchar[id].imgAnime}`), { responseType: "arraybuffer" })).data;
    fs.writeFileSync(pathAva, Buffer.from(ava, "utf-8"));
    const request = require('request');
    const path = require('path');

  //const a = Math.floor(Math.random() * 820) + 1
  
  
let l1 = await loadImage(pathAva);
    let a = await loadImage(pathImg);
    let canvas = createCanvas(a.width, a.height);
    var ctx = canvas.getContext("2d");
    ctx.fillStyle = lengthchar[id].colorBg;
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(l1, -200, -200, 1200, 1200);
    ctx.drawImage(a, 0, 0, canvas.width, canvas.height);
     registerFont(__dirname + `/tad/phenomicon.ttf`, {
      family: "phenomicon"
    });
    ctx.textAlign = "start";
    ctx.strokeStyle = lengthchar[id].colorBg;
    ctx.filter = "brightness(90%) contrast(110%)";
    ctx.font = "130px phenomicon";
    ctx.fillStyle = lengthchar[id].colorBg;
    ctx.fillText(global.config.BOTNAME, 835, 340);
    ctx.beginPath();
  ////////////////////////////////////////
   registerFont(__dirname + `/tad/UTM-Avo.ttf`, {
      family: "UTM"
    });
    ctx.textAlign = "start";
    ctx.font = "70px UTM";
    ctx.fillStyle = "#000000";
    ctx.fillText(`${z_1} : ${x_1} : ${y_1} `, 980, 440);
    ctx.restore();
    ctx.save();
registerFont(__dirname + `/tad/CaviarDreams.ttf`, {
      family: "time"
    });
    ctx.textAlign = "start";
    ctx.font = "55px time";
    ctx.fillText("pri_yanshu12", 930, 540)
    ctx.fillText("priyanshu192", 930, 610)
    ctx.fillText("priyanshu.rajput.official", 930, 690)
    ctx.restore();
    ctx.save();
    ctx.beginPath();
    const imageBuffer = canvas.toBuffer();
   fs.writeFileSync(pathImg, imageBuffer);
  return api.sendMessage({
    body: `======= Server Information =======\n\nChip: ${chips}.\nProcessing Speed: ${speed}MHz.\n\nTotal Memory: ${byte2mb(os.totalmem())}.\nUsed: ${byte2mb(os.freemem())} (${(os.freemem() * 100 / os.totalmem()).toFixed()}%).\n\nBot is running up ${hours} hours ${minutes} minute ${seconds} seconds.\n\n❯ Total users: ${global.data.allUserID.length}\n❯ Total Group: ${global.data.allThreadID.length}\n❯ CPU in use: ${pidusage.cpu.toFixed(1)}%\n❯ Ram in use: ${byte2mb(pidusage.memory)}\n❯ Ping: ${Date.now() - timeStart}ms\n❯ Character ID: ${id}\n❯ Owner:𝐏𝐫𝐢𝐲𝐚𝐧𝐬𝐡 𝐑𝐚𝐣𝐩𝐮𝐭\n❯ Admin Faceboook ID:\nhttps://www.facebook.com/priyanshu.rajput.official`,
    attachment: fs.createReadStream(pathImg)
  },
    event.threadID,
    () => fs.unlinkSync(pathImg),
    fs.unlinkSync(pathAva),
    event.messageID
  );
      }