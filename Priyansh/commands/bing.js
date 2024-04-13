const axios = require('axios');
const fs = require('fs-extra');
const path = require('path');

module.exports.config = {
    name: "bing",
    version: "1.0",
    credits: "Aadi Gupta",
    hasPermssion: 2,
    description: "Generate images by Dalle-3 AI",
    commandCategory: "download",
    usages: "[text] \nJamon [A 17/18/19 years old boy/girl watching football match on tv and written Aadi and 69 on the back of his Dress , 4k]",
    cooldowns: 5
  };

module.exports.run = async function ({ api, event, args }) {
  const prompt = event.messageReply?.body.split("dalle")[1] ||  args.join(" ");
  if (!prompt) {
   return api.sendMessage("❌| Wrong Formet .✅ | Use 17/18 years old boy/girl watching football match on tv and written Aadi and 69 on the back of his Dress , 4k",event.threadID,event.messageID);
  }
    try {
      const w = await api.sendMessage("Waiting few seconds baby < 😽", event.threadID);

const response = await axios.get(`https://all-image-genator-d1p.onrender.com/dipto/dalle?prompt=${prompt}&key=dipto008&cookies=1xx-1CsXR0BdxrB7oJKs4RwlCf7HsGngDTl2tU1ZjobDXcJVWMrz2r-kYtuK-1GM8EFcfOlhUW_IEK17AXmgufr-sjSfW-NjjXH5M-jbbui2C40lle79G-3vesWpqsz8CeJi7buM2ojlRXCF5gndf1zTyShXeZJTJ2O7PxBcNNOTqL6eEznotthvFhsKt_ImrBFtBcalEbhdrkp_wEZUc2tWTqmJAOR9uPrROWVqElA92l9M`)
      const data = response.data.imgUrls;
      if (!data || data.length === 0) {
        api.sendMessage("Empty response or no images generated.",event.threadID,event.messageID);
      }
      const diptoo = [];
      for (let i = 0; i < data.length; i++) {
        const imgUrl = data[i];
        const imgResponse = await axios.get(imgUrl, { responseType: 'arraybuffer' });
        const imgPath = path.join(__dirname, 'data', `${i + 1}.jpg`);
        await fs.outputFile(imgPath, imgResponse.data);
        diptoo.push(fs.createReadStream(imgPath));
      }
      await api.unsendMessage(w.messageID);
      await api.sendMessage({
  body: `✅ |Your pic Generated <😘`,
        attachment: diptoo
      },event.threadID, event.messageID);
    } catch (error) {
      console.error(error);
      await api.sendMessage(`Generation failed!\nError: ${error.message}`,event.threadID, event.messageID);
    }
  };
