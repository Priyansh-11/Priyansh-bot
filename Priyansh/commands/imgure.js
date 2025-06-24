const axios = require("axios");
const FormData = require("form-data");
const fs = require("fs");
const { downloadFile } = require("../../utils/index.js");

module.exports.config = {
  name: "imgur",
  version: "2.0.0",
  hasPermssion: 0,
  credits: "Priyansh Rajput",
  description: "Upload images/videos to Imgur using your custom API",
  commandCategory: "Utilities",
  usages: "[reply]",
  cooldowns: 5
};

module.exports.run = async ({ api, event }) => {
  const { threadID, type, messageReply, messageID } = event;

  if (type !== "message_reply" || !messageReply.attachments.length) {
    return api.sendMessage("⚠ Reply to an image/video to upload!", threadID, messageID);
  }

  const attachmentSend = [];

  // Download all attachments to /tmp
  async function getAttachments(attachments) {
    let i = 0;
    for (const data of attachments) {
      const ext = data.type === "photo" ? "jpg" :
                  data.type === "video" ? "mp4" :
                  data.type === "animated_image" ? "gif" :
                  data.type === "audio" ? "m4a" : "dat";
      const path = `/tmp/file_${i}.${ext}`;
      await downloadFile(data.url, path);
      attachmentSend.push(path);
      i++;
    }
  }

  // Upload multiple files to your hosted API
  async function uploadFiles(paths) {
    const form = new FormData();
    for (const file of paths) {
      form.append("files", fs.createReadStream(file));
    }

    try {
      const res = await axios.post("https://priyanshuapi.xyz/imgur-upload", form, {
        headers: form.getHeaders(),
        maxContentLength: Infinity,
        maxBodyLength: Infinity
      });

      return res.data.urls || [];
    } catch (err) {
      console.error("❌ Upload failed:", err.response?.data || err.message);
      return [];
    }
  }

  // Download files
  await getAttachments(messageReply.attachments);

  // Upload to your API
  const links = await uploadFiles(attachmentSend);

  // Delete temp files
  for (const file of attachmentSend) fs.unlinkSync(file);

  // Send result
  if (links.length > 0) {
    const msg = links.map(link => `✅ ${link}`).join("\n");
    return api.sendMessage(`🚀 Uploaded ${links.length} file(s) to Imgur:\n${msg}`, threadID, messageID);
  } else {
    return api.sendMessage("❌ Upload failed.", threadID, messageID);
  }
};
