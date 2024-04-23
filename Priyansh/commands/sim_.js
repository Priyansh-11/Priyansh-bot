module.exports.config = {
    name: "sim",
    version: "4.3.7",
    hasPermssion: 0,
    credits: "𝐏𝐫𝐢𝐲𝐚𝐧𝐬𝐡 𝐑𝐚𝐣𝐩𝐮𝐭",
    description: "\x43\x68\x61\x74\x20\x77\x69\x74\x68\x20\x73\x69\x6d\x73\x69\x6d\x69\x20\x41\x49\x2e\x20\x46\x69\x78\x65\x64\x20\x62\x79\x20\ud835\udc0f\ud835\udc2b\ud835\udc22\ud835\udc32\ud835\udc1a\ud835\udc27\ud835\udc2c\ud835\udc21\x20\ud835\udc11\ud835\udc1a\ud835\udc23\ud835\udc29\ud835\udc2e\ud835\udc2d",
    commandCategory: "Chat same sim",
    usages: "[args]",
    cooldowns: 5,
    dependencies: {
        axios: ""
    },
    envConfig: {
        APIKEY: "Priyansh_1234567890"
    }
}
async function simsimi(a, b, c) {
    const axios = require("axios"),
        { APIKEY } = global.configModule.sim,
        g = (a) => encodeURIComponent(a);
    try {
        var { data: j } = await axios({ url: `https://sim-a9ek.onrender.com/sim?type=ask&ask=${g(a)}&apikey=PriyanshVip`, method: "GET" });
        return { error: !1, data: j }
    } catch (p) {
        return { error: !0, data: {} }
    }
}
module.exports.onLoad = async function() {
    "undefined" == typeof global.manhG && (global.manhG = {}), "undefined" == typeof global.manhG.simsimi && (global.manhG.simsimi = new Map);
};
module.exports.handleEvent = async function({ api, event }) {
    const { threadID, messageID, senderID, body } = event, g = (senderID) => api.sendMessage(senderID, threadID, messageID);
    if (global.manhG.simsimi.has(threadID)) {
        if (senderID == api.getCurrentUserID() || "" == body || messageID == global.manhG.simsimi.get(threadID)) return;
        var { data, error } = await simsimi(body, api, event);
        return !0 == error ? void 0 : !1 == data.answer ? g(data.error) : g(data.answer)
    }
}
module.exports.run = async function({ api, event, args }) {
    const { threadID, messageID } = event, body = (args) => api.sendMessage(args, threadID, messageID);
    if (0 == args.length) return body("[ 𝐒𝐈𝐌 ] - You haven't entered a message yet.");
    switch (args[0]) {
        case "on":
            return global.manhG.simsimi.has(threadID) ? body("[ 𝐒𝐈𝐌 ] - What happened after 2 times?") : (global.manhG.simsimi.set(threadID, messageID), body("[ 𝐒𝐈𝐌 ] - Make it successful."));
        case "off":
            return global.manhG.simsimi.has(threadID) ? (global.manhG.simsimi.delete(threadID), body("[ 𝐒𝐈𝐌 ] - easy success.")) : body("[ 𝐒𝐈𝐌 ] - Tao is starting to turn off.");
        default:
            var { data, error } = await simsimi(args.join(" "), api, event);
            return !0 == data ? void 0 : !1 == data.answer ? body(data.error) : body(data.answer);
    }
};
