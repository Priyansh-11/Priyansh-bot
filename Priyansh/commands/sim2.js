module.exports.config = {
    name: "sim1",
    version: "4.3.7",
    hasPermssion: 0,
    credits: "𝐏𝐫𝐢𝐲𝐚𝐧𝐬𝐡 𝐑𝐚𝐣𝐩𝐮𝐭",
    description: "\x43\x68\x61\x74\x20\x77\x69\x74\x68\x20\x73\x69\x6d\x73\x69\x6d\x69\x20\x41\x49\x2e\x20\x46\x69\x78\x65\x64\x20\x62\x79\x20\ud835\udc0f\ud835\udc2b\ud835\udc22\ud835\udc32\ud835\udc1a\ud835\udc27\ud835\udc2c\ud835\udc21\x20\ud835\udc11\ud835\udc1a\ud835\udc23\ud835\udc29\ud835\udc2e\ud835\udc2d",
    commandCategory: "Chat same sim",
    usages: "[args]",
    cooldowns: 5,
    dependencies: {
        axios: ""
    }
}


async function simsimi(a, b, c) {
    const d = global.nodemodule.axios, g = (a) => encodeURIComponent(a);
    try {
        var { data: j } = await d({ url: `https://api.simsimi.net/v2/?text=${g(a)}&lc=en`, method: "GET" });
        return { error: !1, data: j }
    } catch (p) {
        return { error: !0, data: {} }
    }
}
module.exports.onLoad = async function () {
    "undefined" == typeof global && (global = {}), "undefined" == typeof global.simsimi && (global.simsimi = new Map);
};
module.exports.handleEvent = async function ({ api: b, event: a }) {
    const { threadID: c, messageID: d, senderID: e, body: f } = a, g = (e) => b.sendMessage(e, c, d);
    if (global.simsimi.has(c)) {
        if (e == b.getCurrentUserID() || "" == f || d == global.simsimi.get(c)) return;
        var { data: h, error: i } = await simsimi(f, b, a);
        return !0 == i ? void 0 : !1 == h.success ? g(h.error) : g(h.success)
    }
}
module.exports.run = async function ({ api: b, event: a, args: c }) {
    const { threadID: d, messageID: e } = a, f = (c) => b.sendMessage(c, d, e);
    if (0 == c.length) return f("Jee BoLo Meri Jaan (ღ˘⌣˘ღ)");
    switch (c[0]) {
        case "on":
            return global.simsimi.has(d) ? f("You have not turned off the sim.") : (global.simsimi.set(d, e), f("Successfully enabled sim."));
        case "off":
            return global.simsimi.has(d) ? (global.simsimi.delete(d), f("Successfully disabled sim.")) : f("You have not enabled the sim.");
        default:
            var { data: g, error: h } = await simsimi(c.join(" "), b, a);
            return !0 == h ? void 0 : !1 == g.success ? f(g.error) : f(g.success);
    }
};
