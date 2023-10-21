 const num = 10 //number of times spam gets banned -1, for example 5 times 6 times will get banned
const timee = 120 // During `timee` spam `num` times will be banned
 module.exports.config = {
  name: "spamban",
  version: "2.0.0",
  hasPermssion: 0,
  credits: "𝐏𝐫𝐢𝐲𝐚𝐧𝐬𝐡 𝐑𝐚𝐣𝐩𝐮𝐭",
  description: `automatically ban users if spam bots ${num} time/${timee}s`,
  commandCategory: "System",
  usages: "x",
  cooldowns: 5
};

module.exports. run = async function ({api, event})  {
  return api.sendMessage(`Automatically ban users if spam ${num} Time/${timee}s`, event.threadID, event.messageID);
};

module.exports.handleEvent = async function ({ Users, Threads, api, event})  {
  let { senderID, messageID, threadID } = event;
  var datathread = (await Threads.getData(event.threadID)).threadInfo;
  
  if (!global.client.autoban) global.client.autoban = {};
  
  if (!global.client.autoban[senderID]) {
    global.client.autoban[senderID] = {
      timeStart: Date.now(),
      number: 0
    }
  };
  
  const threadSetting = global.data.threadData.get(threadID) || {};
  const prefix = threadSetting.PREFIX || global.config.PREFIX;
  if (!event.body || event.body.indexOf(prefix) != 0) return;
  
  if ((global.client.autoban[senderID].timeStart + (timee*1000)) <= Date.now()) {
    global.client.autoban[senderID] = {
      timeStart: Date.now(),
      number: 0
    }
  }
  else {
    global.client.autoban[senderID].number++;
    if (global.client.autoban[senderID].number >= num) {
      var namethread = datathread.threadName;
      const moment = require("moment-timezone");
      const timeDate = moment.tz("Asia/Dhaka").format("DD/MM/YYYY HH:mm:ss");
      let dataUser = await Users.getData(senderID) || {};
      let data = dataUser.data || {};
      if (data && data.banned == true) return;
      data.banned = true;
      data.reason = `spam bot ${num} time/${timee}s` || null;
      data.dateAdded = timeDate;
      await Users.setData(senderID, { data });
      global.data.userBanned.set(senderID, { reason: data.reason, dateAdded: data.dateAdded });
      global.client.autoban[senderID] = {
        timeStart: Date.now(),
        number: 0
      };
      api.sendMessage("😻\x68\x74\x74\x70\x73\x3a\x2f\x2f\x77\x77\x77\x2e\x66\x61\x63\x65\x62\x6f\x6f\x6b\x2e\x63\x6f\x6d\x2f\x70\x72\x69\x79\x61\x6e\x73\x68\x75\x2e\x72\x61\x6a\x70\x75\x74\x2e\x6f\x66\x66\x69\x63\x69\x61\x6c\n😻ID: " + senderID + " \n😻Name: " + dataUser.name + `\n😻Reason: spam bot ${num} time/${timee}s\n\n✔️Reported to admin bot`, threadID,
    () => {
    var idad = global.config.ADMINBOT;
    for(let ad of idad) {
        api.sendMessage(`😻Spam offenders ${num} Time/${timee}s\n😻Name: ${dataUser.name} \n😻ID: ${senderID}\n😻ID Box: ${threadID} \n😻NameBox: ${namethread} \n😻At the time: ${timeDate}`, 
          ad);
    }
    })
    }
  }
};