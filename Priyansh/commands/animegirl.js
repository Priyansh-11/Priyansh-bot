module.exports.config = {
  name: "animegirl",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "𝐏𝐫𝐢𝐲𝐚𝐧𝐬𝐡 𝐑𝐚𝐣𝐩𝐮𝐭",
  description: "Random Loli Pics",
  commandCategory: "nsfw",
  usages: "lolilewd",
  cooldowns: 5,
  dependencies: {
    "request":"",
    "fs-extra":"",
    "axios":""
  }
    
};

module.exports.run = async({api,event,args,Users,Threads,Currencies}) => {
const axios = global.nodemodule["axios"];
const request = global.nodemodule["request"];
const fs = global.nodemodule["fs-extra"];
  var link = [

     "https://i.imgur.com/2iXk7mU.jpg",
     "https://i.imgur.com/OQQeOP3.jpg",
     "https://i.imgur.com/bMM8iJZ.jpg",
     "https://i.imgur.com/vJBXAhy.jpg",
     "https://i.imgur.com/C3b91UO.jpg",
     "https://i.imgur.com/iQbs8eX.jpg",
     "https://i.imgur.com/ZkpN7kz.jpg",
     "https://i.imgur.com/rfzt2WQ.jpg",
     "https://i.imgur.com/KSJQf1f.jpg",
     "https://i.imgur.com/BJ6yXNe.jpg",
     "https://i.imgur.com/IMubWyZ.jpg",
     "https://i.imgur.com/bXHiz1E.jpg",
     "https://i.imgur.com/6TF2Xft.jpg",
     "https://i.mgur.com/eab5Ex9.jpg",
     "https://i.imgur.com/ZLCFLkt.jpg",
     "https://i.imgur.com/dfBFRCY.jpg",
     "https://i.imgur.com/8hEm7Ib.jpg",
     "https://i.imgur.com/VjrmG8l.jpg",
     "https://i.imgur.com/g0rKS8v.jpg",
     "https://i.imgur.com/pwIiuie.jpg",
     "https://i.imgur.com/3JSCTMb.jpg",
     "https://i.imgur.com/cwaipdJ.jpg",
     "https://i.imgur.com/6YrFPL6.jpg",
     "https://i.imgur.com/hefR6oA.jpg",
     "https://i.imgur.com/IEellAV.jpg",
     "https://i.imgur.com/sIIKN0X.jpg",
     "https://i.imgur.com/U1dHNbT.jpg",
     "https://i.imgur.com/fWsdzoT.jpg",
     "https://i.imgur.com/9rwW06s.jpg",
     "https://i.imgur.com/kCtN9ET.jpg",
     "https://i.imgur.com/IfdtKRK.jpg",
     "https://i.mgur.com/lvbHmrc.jpg",
     "https://i.imgur.com/YQQ4OSq.jpg",
     "https://i.imgur.com/byXallB.jpg",
     "https://i.imgur.com/COb8HI9.jpg",
     "https://i.imgur.com/xFIa63u.jpg",
     "https://i.imgur.com/7JKSRQi.jpg",
     "https://i.imgur.com/EADdeTw.jpg",
     "https://i.imgur.com/zW5Yjr6.jpg",
     "https://i.imgur.com/i0lZw0Z.jpg",
     "https://i.imgur.com/COu7WrN.jpg",
     "https://i.imgur.com/z7RmDnI.jpg",
     "https://i.imgur.com/owd3yEE.jpg",
     "https://i.imgur.com/g5zU3Mg.jpg",
     "https://i.imgur.com/1M8Qo3e.jpg",
     "https://i.imgur.com/vVynRQK.jpg",
     "https://i.imgur.com/RHoJdo4.jpg",
     "https://i.imgur.com/NhnPV3T.jpg",
     "https://i.imgur.com/i9C8TaY.jpg",
     "https://i.imgur.com/JL99iUN.jpg",
     "https://i.imgur.com/4sZxV7H.jpg",
     "https://i.imgur.com/9ij2ZBZ.jpg",
     "https://i.imgur.com/qEJ1Bac.jpg",
     "https://i.imgur.com/TaxJ5C0.jpg",
     "https://i.mgur.com/kzUdnNU.jpg",
     "https://i.imgur.com/yAr7DHH.jpg",
     "https://i.imgur.com/dYZ3Fvm.jpg",
     "https://i.imgur.com/EteGnuY.jpg",
     "https://i.imgur.com/E5axqu9.jpg",
     "https://i.imgur.com/hZxona6.jpg",
     "https://i.imgur.com/5HsEx6v.jpg",
     "https://i.imgur.com/r4G6tQi.jpg",
     "https://i.imgur.com/3eMPpUl.jpg",
     "https://i.imgur.com/tasryGt.jpg",
     "https://i.imgur.com/rzlJZst.jpg",
     "https://i.imgur.com/4gx3rnh.jpg",
     "https://i.imgur.com/j4WDARE.jpg",
     "https://i.imgur.com/J9rhsQn.jpg",
     "https://i.imgur.com/tMwtFht.jpg",
     "https://i.imgur.com/AXmBgGk.jpg"
     
    ];
      var callback = () => api.sendMessage({body:`Random Loli Pic\nNumber of photos: ${link.length}`,attachment: fs.createReadStream(__dirname + "/cache/1.jpg")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/1.jpg"), event.messageID);  
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/1.jpg")).on("close",() => callback()); 
    

}
  
