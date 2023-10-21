module.exports.config = {
	name: "pingv2",
	version: "0.0.3",
	hasPermssion: 1,
	credits: "𝐏𝐫𝐢𝐲𝐚𝐧𝐬𝐡 𝐑𝐚𝐣𝐩𝐮𝐭",
	description: "Tag all members",
	commandCategory: "system",
	usages: "[Text]",
	cooldowns: 80
};

module.exports.run = async function({ api, event, args, Threads }) {
	try {
		var all = (await Threads.getInfo(event.threadID)).participantIDs;
    all.splice(all.indexOf(api.getCurrentUserID()), 1);
	  all.splice(all.indexOf(event.senderID), 1);
		var body = (args.length != 0) ? args.join(" ") : "Admin mentioned you ", mentions = [], index = 0;
		
    for (let i = 0; i < all.length; i++) {
		    if (i == body.length) body += body.charAt(body.length - 1);
		    mentions.push({
		  	  tag: body[i],
		  	  id: all[i],
		  	  fromIndex: i - 1
		    });
	    }

		return api.sendMessage({ body: `‎${body}`, mentions }, event.threadID, event.messageID);

	}
	catch (e) { return console.log(e); }
}