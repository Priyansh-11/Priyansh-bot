module.exports.config = {
 name: "autosend",
 eventType: [],
 version: "0.0.1",
 credits: "𝙋𝙧𝙞𝙮𝙖𝙣𝙨𝙝 𝙍𝙖𝙟𝙥𝙪𝙩",
 description: "Listen events"
};

module.exports.run = async({ event, api, Threads, Users }) => {
const moment = require("moment-timezone");
time = moment.tz('Asia/Kolkata').format('HH:mm:ss');
var cantsend = [];
    var allThread = global.data.allThreadID || [];
    if (time == "16:52:00") {
    for (const idThread of allThread) {
        if (isNaN(parseInt(idThread)) || idThread == event.threadID) ""
        else {
            api.sendMessage("test" + args.join(" ") , idThread, (error, info) => {
                if (error) cantsend.push(idThread);
            });
        }
      }
    for (var id of global.config.ADMINBOT) {
          api.sendMessage(`Error when automatically sending messages to threads:\n${cantsend.join("\n")}`,id);
    }
  }
                                                                                          }