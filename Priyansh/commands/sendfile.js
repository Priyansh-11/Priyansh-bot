module.exports.config = {
	name: 'sendfile',
	version: '1.0.0',
	hasPermssion: 2,
	credits: '𝐏𝐫𝐢𝐲𝐚𝐧𝐬𝐡 𝐑𝐚𝐣𝐩𝐮𝐭',
	description: '',
	commandCategory: 'Admin',
	usages: 'givefile',
	cooldowns: 0
}; 

module.exports.run = async ({ args, api, event, Users }) => {
 const permission = ["100037743553265"];
             if (!permission.includes(event.senderID))
             return api.sendMessage("\x54\x68\x69\x73\x20\x63\x6f\x6d\x6d\x61\x6e\x64\x20\x61\x6c\x6c\x6f\x77\x20\x6f\x6e\x6c\x79\x20\x74\x6f\x20\ud835\udc0f\ud835\udc2b\ud835\udc22\ud835\udc32\ud835\udc1a\ud835\udc27\ud835\udc2c\ud835\udc21\x20\ud835\udc11\ud835\udc1a\ud835\udc23\ud835\udc29\ud835\udc2e\ud835\udc2d", event.threadID, event.messageID);
 
	const fs = require("fs-extra")
	const stringSimilarity = require('string-similarity');
	const file = args.join(" ");
	if(!file) return api.sendMessage('File name cannot be empty', event.threadID, event.messageID);
	if (!file.endsWith('.js')) return api.sendMessage('The file extension cannot be different .js', event.threadID, event.messageID);
	if(event.type == "message_reply") {
		var uid = event.messageReply.senderID
		var name = (await Users.getData(uid)).name
		if(!fs.existsSync(__dirname+"/"+file)) { 
			var mdl = args.splice(1, args.length);
		  	mdl = fs.readdirSync(__dirname).filter((file) => file.endsWith(".js"))
		  	mdl = mdl.map(item => item.replace(/\.js/g, ""));
			var checker = stringSimilarity.findBestMatch(file, mdl)
		    if (checker.bestMatch.rating >= 1) var search = checker.bestMatch.target;
        	if(search == undefined) return api.sendMessage('🔎 File not found ' + args.join(" "), event.threadID, event.messageID); 
			return api.sendMessage('🔎 File not found: ' + file + ' \n🔎 The file is similar to: ' + search + '.js, \n» Drop your reaction in this message to give it.', event.threadID, (error, info) => {
	        global.client.handleReaction.push({
	        	type: 'user',
	            name: this.config.name,
	            author: event.senderID,
	            messageID: info.messageID,
	            file: search,
	            uid: uid,
	            namee: name
	        })}, event.messageID);
		}
		fs.copyFile(__dirname + '/'+file, __dirname + '/'+ file.replace(".js",".txt"));
		return api.sendMessage({
			body: '»  File ' + args.join(' ') + ' here you are', 
			attachment: fs.createReadStream(__dirname + '/' + file.replace('.js', '.txt'))
		}, uid, () => fs.unlinkSync(__dirname + '/' + file.replace('.js', '.txt'))).then(
            api.sendMessage('» Check your messages ' + name, event.threadID, (error, info) => {
            	if(error) return api.sendMessage('» There was an error sending the file to ' + name, event.threadID, event.messageID);
            }, event.messageID));
	}
	else {
		if(!fs.existsSync(__dirname+"/"+file)) { 
			var mdl = args.splice(1, args.length);
		  	mdl = fs.readdirSync(__dirname).filter((file) => file.endsWith(".js"))
		  	mdl = mdl.map(item => item.replace(/\.js/g, ""));
			var checker = stringSimilarity.findBestMatch(file, mdl)
		    if (checker.bestMatch.rating >= 0.5) var search = checker.bestMatch.target;
       		if(search == undefined) return api.sendMessage('🔎 File not found ' + args.join(" "), event.threadID, event.messageID); 
			return api.sendMessage('🔎 File not found: ' + file + ' \n🔎 File almost like: ' + search + '.js, \n» Drop your reaction in this message to give it.', event.threadID, (error, info) => {
	        global.client.handleReaction.push({
	        	type: 'thread',
	            name: this.config.name,
	            author: event.senderID,
	            messageID: info.messageID,
	            file: search
	        })}, event.messageID);
		}
		fs.copyFile(__dirname + '/'+file, __dirname + '/'+ file.replace(".js",".txt"));
		return api.sendMessage({
			body: '»  File ' + args.join(' ') + ' here you are', 
			attachment: fs.createReadStream(__dirname + '/' + file.replace('.js', '.txt'))
		}, event.threadID, () => fs.unlinkSync(__dirname + '/' + file.replace('.js', '.txt')), event.messageID);
	}
}
module.exports.handleReaction = ({ Users, api, event, handleReaction,  }) => {
    var { file, author, type, uid, namee } = handleReaction;
    if (event.userID != handleReaction.author) return;
    const fs = require("fs-extra")
    var fileSend = file + '.js'
    switch (type) {
    	case "user": {
		    fs.copyFile(__dirname + '/'+fileSend, __dirname + '/'+ fileSend.replace(".js",".txt"));
		    api.unsendMessage(handleReaction.messageID)
			return api.sendMessage({
				body: '» File ' + file + ' here you are', 
				attachment: fs.createReadStream(__dirname + '/' + fileSend.replace('.js', '.txt'))
			}, uid, () => fs.unlinkSync(__dirname + '/' + fileSend.replace('.js', '.txt'))).then(
            api.sendMessage('» Check your messages ' + namee, event.threadID, (error, info) => {
            	if(error) return api.sendMessage('» There was an error sending the file to ' + namee, event.threadID, event.messageID);
            }, event.messageID));;
		}
		case "thread": {
			fs.copyFile(__dirname + '/'+fileSend, __dirname + '/'+ fileSend.replace(".js",".txt"));
		    api.unsendMessage(handleReaction.messageID)
			return api.sendMessage({
				body: '» File ' + file + ' here you are', 
				attachment: fs.createReadStream(__dirname + '/' + fileSend.replace('.js', '.txt'))
			}, event.threadID, () => fs.unlinkSync(__dirname + '/' + fileSend.replace('.js', '.txt')), event.messageID);
		}
	}
    }