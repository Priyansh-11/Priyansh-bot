module.exports.config = {
	name: "system",
	version: "1.0.1",
	hasPermssion: 0,
	credits: "𝐏𝐫𝐢𝐲𝐚𝐧𝐬𝐡 𝐑𝐚𝐣𝐩𝐮𝐭",
	description: "View information about the hardware the bot is using",
	commandCategory: "System",
	cooldowns: 5,
	dependencies: {
		"systeminformation": "",
		"pidusage": ""
	}
};

function byte2mb(bytes) {
	const units = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
	let l = 0, n = parseInt(bytes, 10) || 0;
	while (n >= 1024 && ++l) n = n / 1024;
	return `${n.toFixed(n < 10 && l > 0 ? 1 : 0)}${units[l]}`;
}

module.exports.run = async function ({ api, event }) {
	const { cpu, time, cpuTemperature, currentLoad, memLayout, diskLayout, mem, osInfo } = global.nodemodule["systeminformation"];
	const timeStart = Date.now();

	try {
		const pidusage = await global.nodemodule["pidusage"](process.pid)
		var { manufacturer, brand, speedMax, physicalCores, cores } = await cpu();
		var { main: mainTemp } = await cpuTemperature();
		var { currentLoad: load } = await currentLoad();
		var { uptime } = await time();
		var diskInfo = await diskLayout();
		var memInfo = await memLayout();
		var { total: totalMem, available: availableMem } = await mem();
		var { platform: OSPlatform, build: OSBuild } = await osInfo();;
		var disk = [], i = 1;

		var hours = Math.floor(uptime / (60 * 60));
		var minutes = Math.floor((uptime % (60 * 60)) / 60);
		var seconds = Math.floor(uptime % 60);
		if (hours < 10) hours = "0" + hours;
		if (minutes < 10) minutes = "0" + minutes;
		if (seconds < 10) seconds = "0" + seconds;

		for (const singleDisk of diskInfo) {
			disk.push(
				`==== 「 𝐃𝐈𝐒𝐊 ${i++} 」 ====\n` +
				"𝐍𝐚𝐦𝐞: " + singleDisk.name + "\n" +
				"𝐓𝐲𝐩𝐞: " + singleDisk.interfaceType + "\n" + 
				"𝐒𝐢𝐳𝐞: " + byte2mb(singleDisk.size) + "\n" +
				"𝐓𝐞𝐦𝐩𝐞𝐫𝐚𝐭𝐮𝐫𝐞: " + singleDisk.temperature + "°C"
			)
		}

		return api.sendMessage(
			"====== 𝐒𝐲𝐬𝐭𝐞𝐦 𝐈𝐧𝐟𝐨 ======\n" +
			"==== 「 𝐂𝐏𝐔 」 ====\n" +
			"𝐂𝐏𝐔 𝐌𝐨𝐝𝐞𝐥: " + manufacturer + " " + brand + " " + speedMax + "GHz\n" +
			"𝐂𝐨𝐫𝐞𝐬: " + cores + "\n" +
			"𝐓𝐡𝐫𝐞𝐚𝐝𝐬: " + physicalCores + "\n" +
			"𝐓𝐞𝐦𝐩𝐞𝐫𝐚𝐭𝐮𝐫𝐞: " + mainTemp + "°C\n" +
			"𝐋𝐨𝐚𝐝: " + load.toFixed(1) + "%\n" +
			"𝐍𝐨𝐝𝐞 𝐮𝐬𝐚𝐠𝐞: " + pidusage.cpu.toFixed(1) + "%\n" +
			"==== 「 𝐌𝐄𝐌𝐎𝐑𝐘 」 ====\n" +
			"𝐒𝐢𝐳𝐞: " + byte2mb(memInfo[0].size) +
			"\n𝐓𝐲𝐩𝐞: " + memInfo[0].type +
			"\n𝐓𝐨𝐭𝐚𝐥: " + byte2mb(totalMem) +
			"\n𝐀𝐯𝐚𝐢𝐥𝐚𝐛𝐥𝐞: " + byte2mb(availableMem) +
			"\n𝐍𝐨𝐝𝐞 𝐮𝐬𝐚𝐠𝐞: " + byte2mb(pidusage.memory) + "\n" +
			disk.join("\n") + "\n" +
			"==== 「 𝐎𝐒 」 ====\n" +
			"𝐏𝐥𝐚𝐭𝐟𝐨𝐫𝐦: " + OSPlatform +
			"\n𝐁𝐮𝐢𝐥𝐝: " + OSBuild +
			"\n𝐔𝐩𝐭𝐢𝐦𝐞: " + hours + ":" + minutes + ":" + seconds +
			"\n𝐏𝐢𝐧𝐠: " + (Date.now() - timeStart) + "ms",
			event.threadID, event.messageID
		)
	}
	catch (e) {
		console.log(e)
	}
}