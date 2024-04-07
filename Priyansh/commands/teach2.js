module.exports.config = {
    name: "teach2",
    version: "1",
    permission: 0,
    credits: "Hamim",
    description: "Teach X2 Simsimi",
    usages: "Teach",
    category: "Simsimi",
    cooldowns: 0
};

const axios = require("axios");

module.exports.run = async ({ api, event, args }) => {
    try {

        const text = args.join(" ");
        const text1 = text.substr(0, text.indexOf(" => "));
        const text2 = text.split(" => ").pop();

        if (!text1 || !text2) {
            return api.sendMessage(`Usage: ${global.config.PREFIX}teach who is x2? => x2 is hamim`, event.threadID, event.messageID);
        }

        const response = await axios.get(`https://x2-api.onrender.com/sim?type=teach&ask=${encodeURIComponent(text1)}&ans=${encodeURIComponent(text2)}`);
        api.sendMessage(`Thank you for teaching..your text added to X2 server by Raj Bot..`, event.threadID, event.messageID);
    } catch (error) {
        console.error("An error occurred:", error);
        api.sendMessage("Oops! Something went wrong in x2 server.", event.threadID, event.messageID);
    }
};
