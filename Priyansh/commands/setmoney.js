module.exports.config = {
	name: "setmoney",
	version: "0.0.1",
	hasPermssion: 2,
	credits: "𝐏𝐫𝐢𝐲𝐚𝐧𝐬𝐡 𝐑𝐚𝐣𝐩𝐮𝐭",
	description: "change the amount of yourself or the person tagged",
	commandCategory: "System",
	usages: "setmoney [Tag]",
	cooldowns: 5,
	info: [
		{
			key: 'Tag',
			prompt: 'Leave blank or tag someone, you can tag more than one person',
			type: 'Document',
			example: '@Priyansh'
		}
	]
};

module.exports.run = async function({ api, event, args, Currencies, utils, Users}) {
var mention = Object.keys(event.mentions)[0];
    var prefix = ";"
    var {body} = event;
    			var content = body.slice(prefix.length + 9, body.length);
			var sender = content.slice(0, content.lastIndexOf(" "));
			var moneySet = content.substring(content.lastIndexOf(" ") + 1);
    			if (args[0]=='me'){
    			 return api.sendMessage(`Changed your balance to ${moneySet} dollar`, event.threadID, () => Currencies.increaseMoney(event.senderID, parseInt(moneySet)), event.messageID)	
			}
			else if(args[0]=="del"){
if (args[1] == 'me'){
			var s = event.senderID;
			const moneyme =(await Currencies.getData(event.senderID)).money;
			api.sendMessage(`✅All your money has been deleted\n💸The amount to be deleted is ${moneyme}.`, event.threadID, async () => await Currencies.decreaseMoney(event.senderID, parseInt(moneyme)));
		}	
		else if (Object.keys(event.mentions).length == 1) {
var mention = Object.keys(event.mentions)[0];
		const moneydel = (await Currencies.getData(mention)).money;
		api.sendMessage(`✅Removed the entire amount of ${event.mentions[mention].replace("@", "")}\n💸The amount to be deleted is ${moneydel}.`, event.threadID, async () => await Currencies.decreaseMoney(mention, parseInt(moneydel)));
		}
		
		else return	api.sendMessage("wrong syntax", event.threadID, event.messageID);
		}
			else if (Object.keys(event.mentions).length == 1) {
			return api.sendMessage({
				body: (`Changed the balance of ${event.mentions[mention].replace("@", "")} to ${moneySet} dollar`),
				mentions: [{
					tag: event.mentions[mention].replace("@", ""),
					id: mention
				}]
			}, event.threadID, async () => Currencies.increaseMoney(mention, parseInt(moneySet)), event.messageID)
		}
		else if(args[0]=="UID"){
		var id = args[1];
		var cut = args[2];
		let nameeee = (await Users.getData(id)).name
		   return api.sendMessage(`Changed the balance of ${nameeee} Fort ${cut} dollar`, event.threadID, () => Currencies.increaseMoney(id, parseInt(cut)), event.messageID)	

		}
else {
	api.sendMessage("wrong syntax", event.threadID, event.messageID)
	}
  }