module.exports.config = {
	name: "cao3la",
	version: "1.0.4",
	hasPermssion: 0,
	credits: "𝐏𝐫𝐢𝐲𝐚𝐧𝐬𝐡 𝐑𝐚𝐣𝐩𝐮𝐭",
	description: "Game betting is reserved for groups that bet",
	commandCategory: "game-mp",
	usages: "[start/join/info/leave]",
	cooldowns: 1
};

module.exports.handleEvent = async ({ event, api, Users }) => {
	const { senderID, threadID, body, messageID } = event;

	if (typeof body == "undefined") return;
	if (!global.moduleData.baicao) global.moduleData.baicao = new Map();
	if (!global.moduleData.baicao.has(threadID)) return;
	var values = global.moduleData.baicao.get(threadID);
	if (values.start != 1) return;

	if (body.indexOf("chia bài") == 0) {
		if (values.chiabai == 1) return;
		for(const key in values.player) {
			const card1 = Math.floor(Math.random() * (9 - 1 + 1)) + 1;
			const card2 = Math.floor(Math.random() * (9 - 1 + 1)) + 1;
			const card3 = Math.floor(Math.random() * (9 - 1 + 1)) + 1;
			var tong = (card1 + card2 + card3);
			if (tong >= 20) tong -= 20;
			if (tong >= 10) tong -= 10;
			values.player[key].card1 = card1;
			values.player[key].card2 = card2;
			values.player[key].card3 = card3;
			values.player[key].tong = tong;
			api.sendMessage(`your song: ${card1} | ${card2} | ${card3} \n\nYour total post: ${tong}`, values.player[key].id, (error, info) => {
				if (error) api.sendMessage(`Can't share messages with other users: ${values.player[key].id}`, threadID)
			});
				
		}
		values.chiabai = 1;
		global.moduleData.baicao.set(threadID, values);
		return api.sendMessage("The song has been sung successfully! All the people who have not changed their 2nd post, please check and wait for the message", threadID);
	}

	if (body.indexOf("đổi bài") == 0) {
		if (values.chiabai != 1) return;
		var player = values.player.find(item => item.id == senderID);
		if (player.doibai == 0) return api.sendMessage("You have used the entire exchange rate", threadID, messageID);
		if (player.ready == true) return api.sendMessage("You're ready, you can't change the post!", threadID, messageID);
		const card = ["card1","card2","card3"];
		player[card[(Math.floor(Math.random() * card.length))]] = Math.floor(Math.random() * (9 - 1 + 1)) + 1;
		player.tong = (player.card1 + player.card2 + player.card3);
		if (player.tong >= 20) player.tong -= 20;
		if (player.tong >= 10) player.tong -= 10;
		player.doibai -= 1;
		global.moduleData.baicao.set(values);
		return api.sendMessage(`When will your sister be changed?: ${player.card1} | ${player.card2} | ${player.card3} \n\nYour total post: ${player.tong}`, player.id, (error, info) => {
			if (error) api.sendMessage(`Can't change post for user: ${player.id}`, threadID)
		});
	}

	if (body.indexOf("ready") == 0) {
		if (values.chiabai != 1) return;
		var player = values.player.find(item => item.id == senderID);
		if (player.ready == true) return;
		const name = await Users.getNameUser(player.id);
		values.ready += 1;
		player.ready = true;
		if (values.player.length == values.ready) {
			const player = values.player;
			player.sort(function (a, b) { return b.tong - a.tong });

			var ranking = [], num = 1;

			for (const info of player) {
				const name = await Users.getNameUser(info.id);
				ranking.push(`${num++} • ${name} với ${info.card1} | ${info.card2} | ${info.card3} => ${info.tong} nút\n`);
			}

			global.moduleData.baicao.delete(threadID);
			return api.sendMessage(`Result:\n\n ${ranking.join("\n")}`, threadID);
		}
		else return api.sendMessage(`player: ${name} Ready-to-feed, more: ${values.player.length - values.ready} people have not played`, event.threadID);
	}
	
	if (body.indexOf("nonready") == 0) {
		const data = values.player.filter(item => item.ready == false);
		var msg = [];

		for (const info of data) {
			const name = global.data.userName.get(info.id) || await Users.getNameUser(info.id);
			msg.push(name);
		}
		if (msg.length != 0) return api.sendMessage("Those who have not played yet are ready: " + msg.join(", "), threadID);
		else return;
	}
}

module.exports.run = async ({ api, event, args }) => {
	var { senderID, threadID, messageID } = event;

	threadID = String(threadID);
	senderID = String(senderID);
	
	if (!global.moduleData.baicao) global.moduleData.baicao = new Map();
	var values = global.moduleData.baicao.get(threadID) || {};

	switch (args[0]) {
		case "create":
		case "-c": {
			if (global.moduleData.baicao.has(threadID)) return api.sendMessage("What posts are currently open in this group?", threadID, messageID);
			global.moduleData.baicao.set(event.threadID, { "author": senderID, "start": 0, "chiabai": 0, "ready": 0, player: [ { "id": senderID, "card1": 0, "card2": 0, "card3": 0, "doibai": 2, "ready": false } ] });
			return api.sendMessage("Your blog post has been successfully created! To enter your post, enter your email address.", threadID, messageID);
		}
		
		case "join":
		case "-j": {
			if (!values) return api.sendMessage("Currently there is no baicao created, you can create one by using baicao create", threadID, messageID);
			if (values.start == 1) return api.sendMessage("At present the table has been started", threadID, messageID);
			if (values.player.find(item => item.id == senderID)) return api.sendMessage("You have entered this post!", threadID, messageID);
			values.player.push({ "id": senderID, "card1": 0, "card2": 0, "card3": 0, "tong": 0, "doibai": 2, "ready": false });
			global.moduleData.baicao.set(threadID, values);
			return api.sendMessage("You have entered successfully!", threadID, messageID);
		}

		case "leave":
		case "-l": {
			if (typeof values.player == "undefined") return api.sendMessage("Currently there is no baicao created, you can create one by using baicao create", threadID, messageID);
			if (!values.player.some(item => item.id == senderID)) return api.sendMessage("You have not yet participated in the discussion in this group!", threadID, messageID);
			if (values.start == 1) return api.sendMessage("At present the table has been started", threadID, messageID);
			if (values.author == senderID) {
				global.moduleData.baicao.delete(threadID);
				api.sendMessage("The author has already left the table, which means that the work will be resolved!", threadID, messageID);
			}
			else {
				values.player.splice(values.player.findIndex(item => item.id === senderID), 1);
				api.sendMessage("You have left this table!", threadID, messageID);
				global.moduleData.baicao.set(threadID, values);
			}
			return;
		}

		case "start":
		case "-s": {
			if (!values) return api.sendMessage("Currently there is no baicao created, you can create one by using baicao create", threadID, messageID);
			if (values.author !== senderID) return api.sendMessage("You don't have to be the owner to start", threadID, messageID);
			if (values.player.length <= 1) return api.sendMessage("Currently you don't have any players joined, you can invite people to join by asking other players to join.", threadID, messageID);
			if (values.start == 1) return api.sendMessage("The table is currently started by the owner of the table", threadID, messageID);
			values.start = 1;
			return api.sendMessage("Your resume has been started", threadID, messageID);
		}

		case "info":
		case "-i": {
			if (typeof values.player == "undefined") return api.sendMessage("Currently there is no baicao created, you can create one by using baicao create", threadID, messageID);
			return api.sendMessage(
				"=== Ban Bai Cao ===" +
				"\n- AuthorBaan: " + values.author +
				"\n- Total number of players: " + values.player.length + "People"
			, threadID, messageID);
		}

		default: {
			return global.utils.throwError(this.config.name, threadID, messageID);
		}
	}
}
