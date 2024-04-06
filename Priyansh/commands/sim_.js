const axios = require("axios");

module.exports.config = {
    name: "sim",
    version: "1",
    hasPermission: 0,
    credits: "Hamim",
    description: "Simsimi",
    usages: "Message",
    commandCategory: "TALK WITH SIM",
    cooldowns: 0
};

module.exports.run = async ({ api, event, args }) => {
    try {
        let message = args.join(" ");
        if (!message) {
            return api.sendMessage(`Hi jaaan,I'm Raj Sim from X2 server..`, event.threadID, event.messageID);
        }

        const response = await axios.get(`https://x2-api.onrender.com/sim?type=ask&ask=${message}`);
        const respond = response.data.answer;
        api.sendMessage(respond, event.threadID, event.messageID);
    } catch (error) {
        console.error("An error occurred:", error);
        api.sendMessage("Oops! Something went wrong.", event.threadID, event.messageID);
    }
};
