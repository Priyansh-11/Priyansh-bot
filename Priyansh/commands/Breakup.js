const fs = require("fs");
module.exports.config = {
  name: "breakup",
    version: "1.0.1",
  hasPermssion: 0,
  credits: "Priyansh", 
  description: "hihihihi",
  commandCategory: "no prefix",
  usages: "breakup",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
  var { threadID, messageID } = event;
  if (event.body.indexOf("Breakup")==0 || event.body.indexOf("breakup")==0 || event.body.indexOf("BREAKUP")==0 || event.body.indexOf("💔")==0) {
    var msg = {
        body: "𝐑𝐚𝐣💔💔𝐍𝐢𝐝𝐡𝐢🙂",
        attachment: fs.createReadStream(__dirname + `/cache/nidhi.jpg`)
      }
      api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("💔", event.messageID, (err) => {}, true)
    }
  }
  module.exports.run = function({ api, event, client, __GLOBAL }) {

  }