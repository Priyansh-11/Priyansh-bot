module.exports.config = {
	name: "package",
	version: "1.0.1", 
	hasPermssion: 0,
	credits: "𝐏𝐫𝐢𝐲𝐚𝐧𝐬𝐡 𝐑𝐚𝐣𝐩𝐮𝐭", //don't change the credits please
	description: ".",
	commandCategory: "system",
	cooldowns: 1,
	dependencies: 
	{
    "request":"",
    "fs-extra":"",
    "axios":""
  }
};
module.exports.run = async function({ api,event,args,client,Users,Threads,__GLOBAL,Currencies }) {
const axios = global.nodemodule["axios"];
const request = global.nodemodule["request"];
const fs = global.nodemodule["fs-extra"];
var link = ["https://i.imgur.com/6UxTLqh.png"];
var callback = () => api.sendMessage({body:`
{
	"name": "Priyansh",
	"version": "30.0.0",
	"description": "A simple Facebook Messenger Bot made by 𝐏𝐫𝐢𝐲𝐚𝐧𝐬𝐡 𝐑𝐚𝐣𝐩𝐮𝐭.",
	"main": "Priyansh.js",
	"scripts": {
		"start": "node index.js",
		"login": "node login",
		"test": "node --trace-warnings --use_strict --async-stack-traces mirai"
	},
	"repository": {
		"type": "git",
		"url": "https://github.com/priyanshu192/fb-bot/issues"
	},
	"keywords": [
		"bot",
		"facebook",
		"projectpriyansh",
		"messenger",
		"javasvript",
		"priyanshu",
		"prince",
		"mental"
	],
	"author": "𝐏𝐫𝐢𝐲𝐚𝐧𝐬𝐡 𝐑𝐚𝐣𝐩𝐮𝐭",
	"license": "GPL-3.0",
	"bugs": {
		"url": "https://github.com/priyanshu192/fb-bot/issues"
	},
	"homepage": "https://github.com/priyanshu192/fb-bot/issues",
	"dependencies": {
		"@maihuybao/fca-unofficial": "^1.3.13-2",
		"@priyanshproject/assets": "",
		"@replit/database": "^2.0.1",
		"@supercharge/strings": "^1.28.0",
		"akaneko": "^5.2.2",
		"axios": "^0.26.1",
		"body-parser": "",
		"caesar-salad": "",
		"canvas": "^2.7.0",
		"chalk": "^4.1.2",
		"cheerio": "",
		"child_process": "^1.0.2",
		"colors": "^1.4.0",
		"cron": "^2.1.0",
		"cronosjs": "^1.7.1",
		"crypto": "",
		"desuni": "^11.0.5",
		"discord-chatbot": "^2.1.0",
		"eval": "^0.1.8",
		"extract-zip": "",
		"fb-chat-api": "^10.4.1",
		"fca-disme": "^2.3.0",
		"fca-horizon-remake": "^20.0.6",
		"fca-kaneki": "^1.2.9",
		"fca-noder": "git+https://github.com/Priyanshu192/fca-noder.git",
		"fca-sus": "^1.1.7",
		"fca-unofficial": "^1.3.10",
		"fca-unofficial-force": "^10.3.13",
		"fca-xuyen-get": "^1.3.13",
		"figlet": "",
		"fs-extra": "^10.0.1",
		"helyt": "^1.3.16",
		"jimp": "",
		"knights-canvas": "^1.3.7-a",
		"lyrics-finder": "^21.7.0",
		"mal-scraper": "^2.11.4",
		"minimist": "",
		"moment-timezone": "^0.5.34",
		"ms": "",
		"nhentai-api": "^3.4.3",
		"node-cron": "^3.0.2",
		"node-opus": "^0.3.3",
		"node-schedule-tz": "^1.2.1-4",
		"npmlog": "",
		"opusscript": "0.0.8",
		"path": "",
		"pidusage": "^3.0.0",
		"pm2": "^5.2.0",
		"readline": "",
		"request": "^2.88.2",
		"semver": "^7.3.5",
		"sequelize": "^6.17.0",
		"simple-youtube-api": "^5.2.1",
		"sqlite3": "^5.0.11",
		"string-similarity": "",
		"to": "^0.2.9",
		"totp-generator": "",
		"vtuber-wiki": "^1.1.5",
		"wikijs": "^6.3.3",
		"youtube-search-api": "^1.1.0",
		"youtubei.js": "^1.4.2",
		"ytdl-core": "^4.11.0",
		"zalgo": "0.0.1"
	}
}.`,attachment: fs.createReadStream(__dirname + "/cache/ken.png")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/ken.png")); 
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/ken.png")).on("close",() => callback());
   };