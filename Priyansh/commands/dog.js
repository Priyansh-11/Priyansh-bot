module.exports.config = {
	name: "dog",
	version: "1.0.1",
	hasPermssion: 0,
	credits: "Mank", // Mod từ toilet kikiki
	description: "Coffee chìu",
	commandCategory: "Tạo ảnh",
	usages: "coffee",
	cooldowns: 5,
	dependencies: {
	  "fs-extra": "",
	  "axios": "",
	  "canvas" :"",
	  "jimp": "",
	  "node-superfetch": ""
	}
};

module.exports.circle = async (image) => {
	  const jimp = global.nodemodule['jimp'];
  	image = await jimp.read(image);
  	image.circle();
  	return await image.getBufferAsync("image/png");
};

module.exports.run = async ({ event, api, args, Users }) => {
try {
  const Canvas = global.nodemodule['canvas'];
  const request = global.nodemodule["node-superfetch"];
  const jimp = global.nodemodule["jimp"];
  const fs = global.nodemodule["fs-extra"];
  var dog = __dirname+'/cache/dog.png'; 
  var id = Object.keys(event.mentions)[0] || event.senderID;
  const canvas = Canvas.createCanvas(499, 722);
	const ctx = canvas.getContext('2d');
	const background = await Canvas.loadImage('https://i.imgur.com/uESp1oK.jpg');
  
	var avatar = await request.get(`https://graph.facebook.com/${id}/picture?width=512&height=512&access_token=6628568379%7Cc1e620fa708a1d5696fb991c1bde5662`);
	avatar = await this.circle(avatar.body);
	ctx.drawImage(background, 0, 0, canvas.width, canvas.height);
	ctx.drawImage(await Canvas.loadImage(avatar), 198, 127, 162, 162);
	const imageBuffer = canvas.toBuffer();
	fs.writeFileSync(dog,imageBuffer);
	 api.sendMessage({attachment: fs.createReadStream(dog, {'highWaterMark': 128 * 1024}), body: "..."}, event.threadID, () => fs.unlinkSync(dog), event.messageID);
}
catch(e) {api.sendMessage(e.stack, event.threadID )}
}
