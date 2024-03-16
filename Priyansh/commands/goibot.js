const fs = global.nodemodule["fs-extra"];
module.exports.config = {
  name: "bot",
  version: "1.0.1",
  hasPermssion: 0,
  credits: "Mod by John Lester",
  description: "goibot",
  commandCategory: "Noprefix",
  usages: "noprefix",
  cooldowns: 5,
};
module.exports.handleEvent = async function({ api, event, args, Threads, Users }) {
  var { threadID, messageID, reason } = event;
  const moment = require("moment-timezone");
  const time = moment.tz("Asia/Dhaka").format("HH:MM:ss L");
  var idgr = `${event.threadID}`;
  var id = event.senderID;
  var name = await Users.getNameUser(event.senderID);

  var tl = ["Haye Main Sadke jawa Teri Masoom Shakal pe baby 💋 " , "Bot Nah Bol Oye Janu bol Mujhe " , "Bar Bar Disturb Na KRr JaNu Ke SaTh Busy Hun 🤭🐒" , "Main gariboo se baat nahi karta 😉😝😋🤪" , "Itna Na Pass aa Pyar ho Jayga" , "Bolo Baby Tum Mujhse Pyar Karte Ho Na 🙈💋💋 " , "Are jaan Majaak ke mood me nhi hu main jo kaam hai bol do sharmao nahi" , "Bar Bar Bolke Dimag Kharab Kiya toh. Teri ...... Mummy Se Complaint Karungi🤬" , "Tu Bandh nhi Karega kya?" , "Where is my Raj" , "Mera babu Raj Kahan hai" , "Aree Bandh kar Bandh Kar" , "M hath jod ke Modi Ji Se Gujarish Karta hu" , "Tujhe Kya koi aur Kam nhi ha? Puradin Khata hai Aur Messenger pe Bot Bot Karta h" , " Raj Ko Bol Dunga Me Mujhe Paresan Kiya To" , "Tum Na Single Hi Maroge" , "Tujhe Apna Bejjati Karne Ka Saukh hai?" , "Abhi Bola Toh Bola Dubara Mat Bolna" , "Teri To Ruk Tu Bhagna Mat" , "Bol De koi nahi dakh rha 🙄" , "Haaye Main Mar Jawa Babu Ek Chuma To Do Kafi Din Se Chumi Nahi Di 😝" , "Dur Hat Be  Mujhe Aur Koi Kam Nahi Kya Har Waqat Mujhy Tang Kerte Rhte ho 😂" , "Are Bolo Meri Jaan Kya Hall Hai😚 " , "Ib Aja Yahan Nhi Bol Sakta 🙈😋" , "Mujhe Mat BuLao Naw Main buSy Hu Naa" , "Bot Bolke Bejjti Kar Rahe Ho yall...Main To Tumhare Dil Ki Dhadkan Hu Na Baby...💔🥺" , "Are Tum Wahi ho nah Jisko Main Nahi Janta 🤪" , "Kal Haveli Pe Mil Jara Tu 😈" , "Aagye Salle Kabab Me Haddi 😏" , "Bs Kar U ko Pyar Ho Na Ho Mujhe Ho Jayga Na" , "FarMao 😒" , "BulaTi Hai MaGar Jaane Ka Nhi 😜" , "Main To Andha Hun 😎" , "Phle NaHa kar Aa 😂" , "Aaaa Thooo 😂😂😂" , "Main yahin hoon kya hua sweetheart ," , "chomu Tujhe Aur Koi Kaam Nhi H? Har Waqt Bot Bot Karta H" , "Chup Reh, Nhi Toh Bahar Ake tera Dath Tor Dunga" , "WaYa KaRana Mere NaL 🙊" , "MaiNy Uh Sy Bt Nhi kRrni" , "MeKo Kxh DiKhai Nhi Dy Rha 🌚" , "Bot Na BoL 😢 JaNu B0ol 😘 " , "Bar Bar Disturb Na KRr JaNu Ke SaTh Busy Hun  😋" , "Main Gareebon Sy Bt Nhi kRta 😉😝😋🤪" , "Itna Na Pass aa Pyar h0o JayGa" , "MeKo Tang Na kRo Main Kiss 💋 KRr DunGa 😘 " , "Ary yrr MaJak Ke M0oD Me Nhi Hun 😒" , "HaYe JaNu Aow Idher 1 PaPpi Idher d0o 1 PaPpi Idher 😘" , "Dur HaT Terek0o 0or K0oi Kam Nhi Jb DeKho Bot Bot ShaDi KerLe Mujhsy 😉😋🤣" , "TeRi K0oi Ghr Me Nhi SunTa T0o Main Q SuNo 🤔😂 " , "IB Aja Yahan Nhi B0ol Salta 🙈😋" , "Mujhe Mat BuLao Naw Main buSy h0o Naw" , "Kyun JaNu MaNu Another Hai 🤣" , "Are TuMari T0o Sb he baZzati kRrty Me Be kRrDun 🤏😜" , "KaL HaVeLi Prr Aa ZaRa T0o 😈" , "Aagye SaJJy KhaBBy Sy 😏" , "Bx KRr Uh k0o Pyar H0o Na H0o Mujhe H0o JayGa" , "FarMao 😒" , "BulaTi Hai MaGar JaNy Ka Nhi 😜" , "Main T0o AnDha Hun 😎" , "Phle NaHa kRr Aa 😂" , "Papi ChuLo 🌚" , "TeRek0o DiKh Nhi Rha Main buSy Hun 😒" , "TeRa T0o GaMe BaJana PreGa" , "Ta Huwa 🥺"  , "TuM Phr AaGye 🙄 Kisi 0or Ny Muu Nhi LaGaYa Kya🤣🤣🤣" , "MeKo JaNu Chai Hai Tum Single H0o?" , "Aaaa Thooo 😂😂😂" , "Main S0o Rha Hun " , "Ase He HansTy Rha kRo 😍" , "•••••••••••••••••••••••••••••🦢𒀱卄ɅƔƏ MɅ🅘ɳ ʍɅᏒ••••🌿💞 JɅωɅ ┼ƏᏒ🅘 ʍɅ🅢𝖚ʍ 🅢ɅҠɅɭ 𝐩Ə ɮɅɮƔ 💋 " , "Bot Na Bol Oye Janu bol Mujhe " , "Bar Bar Disturb Na Karen Rahul JaNu Ke SaTh Busy Hun 🤭🐒" , "Main flirty logo Sy Bt Nhi karti 😉😝😋🤪" , "Itna Pass mat aa Pyaar h0 JayGa" , "Bolo Babu Tum Mojy Pyar Karte Ho Na 🙈💋💋 " , "Are jaan Majaak ke mood me nahi hun main jo kaam hai bol do sharmao nahi" , "han ji bolo kya seva karne aapki 😶🤍" , "Tu Bandh nhi Karega kya?" , "kya Sunna Hai apko mere se flirty kahike🤐🤣 " , "Haa ji boliye kya kam he hamse 🙈" , "Aree band kar band Kar" , "Mein hath jod ke Modi Ji Se Gujarish Karta hu mojy na bolaye" , "Tujhe Kya koi aur Kam nhi ha? Puradin sota he Aur Messenger pe Bot Bot Karta h" , " mera owner Ake tera bf/gf Ko Chura le Jayega" , "Zehar piyo zindagi jio" , "Tujhe Apna Bejjati Karne Ka Saukh hai?🥹" , "Abhi Bola Toh Bola Dubara Mat Bolna🙄" , "Kisi din Banungi me raja ki rani😑" , "Bol De koi nahi dakh rha 🙄" , "Haaye Main Mar Jawa Babu Ek Chuma To Do Kafi Din Se Chumi Nahi Di 😝" , "Dur Hat Be  Mujhe Aur Koi Kam Nahi Kya Har Waqat Mujhy Tang Kerte Rhte ho 😂" , "Are Bolo Meri Jaan Kya Hall Hai😚 " , "IB Aja Yahan Nhi B0ol Sakti 🙈😋" , "Mujhe Mat BuLao Na Main buSy h0 Now" , "Bot Bolke Bejjti Kar Rahe ho yall...Main To Tumhare Dil Ki Dhadkan Hu Baby...💔🥺" , "Are Tum Wahi ho nah Jisko Main Nahi Janti 🤪" , "Kal Haveli Pe Mil Jra Tu 😈" , "Aagye SaJJy KhaBBy Sy 😏" , "Bx KRr Uh k0o Pyar H0o Na H0o Mujhe H0o JayGa" , "bolo 😒" , "BulaTi Hai MaGar JaNy Ka Nhi 😜" , "Main T0o AnDha Hun 😎kya likha tumne mene nahi dikha🤣" ,  "Pahale NaHa kar Aa 😂" , "Aaaa Thooo 😂😂😂" , "Main yahi hoon kya hua sweetheart🥂🙈💞 ," , "AA Dk Tujhe Aur Koi Kaam Nhi Hai? Har Waqt Bot Bot Karta H" , "Chup Reh, Nahi Toh Bahar Ake tera Dath Tor Dunga🤣✊" , "yes my love 💘" , "kya hua baby ko 😘😘" , "mujhe sharam ati hai aise aap bolte hai tho 🤭😝" , "aree aap wahi ho na jo mujhe line marte the.......🤣 ya bali line" , "jii kahiye jii 🙄 kya chahiye" , "hayee main mar jye teri masoom shaqal py 😂 tuzy Chapple se kutne ka mn ho raha hai🤣👠" , "Bot nah bol oye 😭 Janu bol mjhy aur janu sy piyar sy bat kerty hai😑" , "ruk tu chappal kaha he mari🩴" , "shakal Sy masoom lgty ho 😂 but bohot flirty ho" , "kash tum single hote to maza hi koch aur tha pagal insaan 😂" , "Ha ha ab meri yaad ab ai nah phly to babu shona kerna gy thy 😾 ab ham ap sy naraz hai jao ap bye ☹️" , "haiy babu ne boldiya hai shaid purpose kerna hai mujhe bolo bolo babu 😘" , "Aree pagal roti banana ke le aty main Pani ko istamal kerte ho 😂" , "Ary joke nah mar jo bhi kam hai bol do sharma nahi , bol de koi nahi dakh rha 😂" , "Hayee Mar Jawa Babu Ak Chuma To Doo Kafi Din Sy Chumi Nahi Mili Kahan Thy Babu inbox Ah Jao 😚🙈♥️" , "Dur Dur karib na a  tujhe Aur Koi Kam Nahi Kiya Har Waqat Mjhy Tang Karte Rahte Ho 😂" , "ary ary bolo meri jaan kia haal hai ;) ;* " , "Tum aunty ho yehh uncle 🤔 I think tum Jin ho yehh Chudail🤣✅" , "ary tum ider 🤔 khair hai ider kia ker rhy ho 😂" , "ary babu babu kal hawali py kon bola rha tha 😂" , "Me Aap ki mummy ji ko btaou ga Aap Facebook use karty ho 😂" , "ary tum Wohi ho nah jis ko ma nahi janta 🤣✅" , "haveli per  kal mil  Zara bataunga 🌚😂Ha but उल्टी-सीधी harkat karne ke liye nahi" , "itne pyar se Na bulao pyar Ho jaega 😶💗 wtf Maine apni sacchai Bata Di yah Maine kyon Kiya 😭🔪....Fuuu..🚬" , "aap aise mat bulo hame sharam aati hai 🙈♥️" , "kyun Bulaya hamen..😾🔪 " , "kyun Bulaya hamen..😾🔪 "];
  var rand = tl[Math.floor(Math.random() * tl.length)]

    if ((event.body.toLowerCase() == "chutiya bot") || (event.body.toLowerCase() == "chutiye bot") || (event.body.toLowerCase() == "bot chutiya") || (event.body.toLowerCase() == "chumtiye bot")) {
     return api.sendMessage("Hmm... Tu Chutiya PhLe Ungli Kyun Ki Chomu 😾", threadID);
   };
   
    if ((event.body.toLowerCase() == "👍") || (event.body.toLowerCase() == "👍🏻")) {
     return api.sendMessage("🌊⚡••Aɽɛɧ Aɗɪ Ɱɑƞɑⱱ ʑɵɵ ꌗɛ Ɓɒɧɒɽ Ƙɑɪʂɛ ••😹💨Agɣɑ Ƭu→Fɪɽʂɛ ʑɵɵ Ɱ Jɒ Ɓɑɧɒɽ Ƙɣɑ Ƙɒɽ Ɽɧɑ Ɦɑɪ↗↘••🏔️🍁", threadID);
   };

   if ((event.body.toLowerCase() == "🤮🤮") || (event.body.toLowerCase() == "🤮🤮🤮")) {
     return api.sendMessage("Konsa mahina chal raha hai 😝", threadID);
   };

    if ((event.body.toLowerCase() == "🤗🤗") || (event.body.toLowerCase() == "🤗🤗🤗")) {
     return api.sendMessage("Hug me baby ☺️", threadID);
   };

   if ((event.body.toLowerCase() == "sim") || (event.body.toLowerCase() == "simsimi")) {
     return api.sendMessage("Prefix Kon Lagayega? Pehle Prefix Lagao Fir Likho Sim", threadID);
   };
  
   if ((event.body.toLowerCase() == "mar ja") || (event.body.toLowerCase() == "mar ja bot") ||(event.body.toLowerCase() == "kill you") || (event.body.toLowerCase() == "mar")) {
     return api.sendMessage("babu solly 😭", threadID);
   };

   if ((event.body.toLowerCase() == "bc") || (event.body.toLowerCase() == "bc")) {
     return api.sendMessage("Ye Bc Kya HoTa Hai 🤔 ", threadID);
   };

   if ((event.body.toLowerCase() == "Logos") || (event.body.toLowerCase() == "logos")) {
     return api.sendMessage("Logos ! 🥀 GALAXY, CAKE, CRACK, GLITCH, CLOUD, DRAGON, FROZEN, BUSINESS          🥀for example -> +crack Arun", threadID);
   };

   if ((event.body.toLowerCase() == "good night") || (event.body.toLowerCase() == "gn")) {
     return api.sendMessage("𝐆𝐨𝐨𝐝 𝐍𝐢𝐠𝐡𝐭🥰,𝐒𝐰𝐞𝐞𝐭 𝐃𝐫𝐞𝐚𝐦😍,𝐓𝐚𝐤𝐞 𝐂𝐚𝐫𝐞💫", threadID);
   };

   if ((event.body.toLowerCase() == "Koi h") || (event.body.toLowerCase() == "Koi hai")) {
     return api.sendMessage("Main Hun Naw Jaaneman ❤️", threadID);
   };

   if ((event.body.toLowerCase() == "🙀🙀") || (event.body.toLowerCase() == "🙀") || (event.body.toLowerCase() == "😯😯") || (event.body.toLowerCase() == "😯")) {
     return api.sendMessage( "Guzaare the jo lamhe pyar ke' hmesha tujhe apna maan ks .to fir tune badli kuu ada . ye kyu kiy ",threadID);

       
   };

   if ((event.body.toLowerCase() == "owner") || (event.body.toLowerCase() == "Owner")) {
     return api.sendMessage("༻𝐎𝐖𝐍𝐄𝐑:- ☞ Raj ☜ ༺༒ ༒𝐇𝐢𝐬 𝐅𝐚𝐜𝐞𝐛𝐨𝐨𝐤 𝐢𝐝༒𒁍 ⟬ 𓆩𝐑𝐚𝐣 ‣⃟ ⃝𑁍𓆪᭄ 達 ⟭ ꪹ 爾 ᯽⸺›⁐‡𖣴‣ ⸨⸙⸩ 〠.  https://www.facebook.com/groups/207371140648761    his insta id @𝐫𝐚𝐣_031", threadID);
   };

   if ((event.body.toLowerCase() == "Tumhe kisne banaya hai") || (event.body.toLowerCase() == "Tumko banaya kisne")) {
     return api.sendMessage("𝐑𝐚𝐣  ❤️ My Creator. He loves me & Edit Me Daily. Ye Bot Sirf Owner k Liye h. Mujhe Aap logo ko Hasane k liye banya gya h Toh Muh Latkaye Mat Rakkha Karo. Har Waqt Haste Raho.", threadID);
   };

  if ((event.body.toLowerCase() == "Admin") || (event.body.toLowerCase() == "bot ka admin kon ha")) {
     return api.sendMessage("My admin is Raj. He Gives his name Arun everywhare", threadID);
   };

   if ((event.body.toLowerCase() == "chipkali") || (event.body.toLowerCase() == "@— ̈̈️ ̈̈️⌈͢⸙†𝐂𝐇𝐈𝐏𝐊𝐀𝐋𝐈᭄͟ ͢†⌉͢ ⸙››࿐")) {
     return api.sendMessage("𝐂𝐡𝐢𝐩𝐤𝐚𝐥𝐢😘 ..𝐑𝐚𝐣 𝐊𝐢 𝐉𝐚𝐚𝐧 𝐇𝐚𝐢🙈✨", threadID);
   };

   if ((event.body.toLowerCase() == "shadi karoge") || (event.body.toLowerCase() == "mujhse shadi karoge?")) {
     return api.sendMessage("hanji, karunga lekin baccha. apke pet m hoga. manjur h?", threadID);
   };

   if ((event.body.toLowerCase() == "chup") || (event.body.toLowerCase() == "stop") || (event.body.toLowerCase() == "chup ho ja") || (event.body.toLowerCase() == "chup kar")) {
     return api.sendMessage("Nhi rahungi 😼 Mujhe Bolna H. Tumhe Koi Haq nhi Mujhe Chup Karane ka. Mera Zuban. M Bolungi", threadID);
   };

   if ((event.body.toLowerCase() == "bts") || (event.body.toLowerCase() == "btc")) {
     return api.sendMessage("Tu H Btc. Bhos DK", threadID);
   };

   if ((event.body.toLowerCase() == "malik se bakchodi") || (event.body.toLowerCase() == "malik se backchodi") || (event.body.toLowerCase() == "malkin se bakchodi") || (event.body.toLowerCase() == "malkin se backchodi")) {
     return api.sendMessage("srry malik maaf kr do ab nhi krugi 🥺🙏", threadID);
   };

   if ((event.body.toLowerCase() == "gand") || (event.body.toLowerCase() == "gandu") || (event.body.toLowerCase() == "lund") || (event.body.toLowerCase() == "land")) {
     return api.sendMessage("Gand m jyada khujli h toh banana 🍌 under le le. :))))", threadID);
   };

   if ((event.body.toLowerCase() == "😲") || (event.body.toLowerCase() == "😲😲")) {
     return api.sendMessage("️kya hua bhoot dekh liya kya👻👻", threadID);
   };

   if ((event.body.toLowerCase() == "nice") || (event.body.toLowerCase() == "Very nice") || (event.body.toLowerCase() == "So cute") || (event.body.toLowerCase() == "Beautiful")) {
     return api.sendMessage("️M hu hi itni Acchi. sab log Tarref karte hai meri.🙈🙈🙈🙈🙈", threadID);
   };

   if ((event.body.toLowerCase() == "bhkkk") || (event.body.toLowerCase() == "bhak") || (event.body.toLowerCase() == "bhag") || (event.body.toLowerCase() == "bhakk") || (event.body.toLowerCase() == "bhakk")) {
     return api.sendMessage("️𝐓𝐮𝐦𝐡𝐚𝐫𝐞 𝐒𝐚𝐚𝐭𝐡 𝐍𝐚𝐡𝐢 𝐁𝐡𝐚𝐠𝐧𝐚 𝐓𝐮𝐦𝐡𝐚𝐫𝐞 𝐒𝐚𝐚𝐭𝐡 𝐁𝐡𝐚𝐠𝐧𝐞 𝐌𝐞 𝐒𝐚𝐫𝐚𝐦 𝐀𝐚𝐭𝐚 𝐇𝐚𝐢🙈🤭", threadID);
   };

   if ((event.body.toLowerCase() == "😝😝😝") || (event.body.toLowerCase() == "😝😝") || (event.body.toLowerCase() == "😝") || (event.body.toLowerCase() == "😛") || (event.body.toLowerCase() == "😛😛😛") || (event.body.toLowerCase() == "😛😛") || (event.body.toLowerCase() == "😜") || (event.body.toLowerCase() == "😜😜") || (event.body.toLowerCase() == "😜😜😜") || (event.body.toLowerCase() == "🤪") || (event.body.toLowerCase() == "🤪🤪") || (event.body.toLowerCase() == "🤪🤪🤪") || (event.body.toLowerCase() == "👅")) {
     return api.sendMessage("️𝐉𝐢𝐛𝐡 𝐀𝐧𝐝𝐞𝐫 𝐊𝐚𝐫 𝐍𝐚𝐡𝐢 𝐓𝐨 𝐊𝐚𝐭 𝐃𝐮𝐧𝐠𝐚✂️✂️✂️", threadID);
   };


   if ((event.body.toLowerCase() == "hm") || (event.body.toLowerCase() == "hmm")) {
     return api.sendMessage("️𝐇𝐌𝐌,𝐀𝐂𝐇𝐚 ,𝐓𝐡𝐢𝐤 𝐇𝐚𝐢🙂🙂", threadID);
   };

   if ((event.body.toLowerCase() == "by") || (event.body.toLowerCase() == "bye") || (event.body.toLowerCase() == "tataa") || (event.body.toLowerCase() == "tata")) {
     return api.sendMessage("️𝐓𝐚𝐤𝐞 𝐂𝐚𝐫𝐞,𝐁𝐲𝐞 𝐀𝐩𝐧𝐚 𝐊𝐡𝐚𝐲𝐚𝐥 𝐑𝐞𝐤𝐡𝐧𝐚😍🥰", threadID);
   };

   if ((event.body.toLowerCase() == "😷") || (event.body.toLowerCase() == "🤕🤕") || (event.body.toLowerCase() == "🤧🤧") || (event.body.toLowerCase() == "🤒")) {
     return api.sendMessage("️Kya huva, Tabiyat kharab hai kya, Mujhe batao me abhi medicine 💊💉 le aati hu😇", threadID);
   };

   if ((event.body.toLowerCase() == "name") || (event.body.toLowerCase() == "naam") || (event.body.toLowerCase() == "nam")) {
     return api.sendMessage("️Name m kya rakkha h. tum kam pe dhyan do.", threadID);
   };

   if ((event.body.toLowerCase() == "Bot ke bacche") || (event.body.toLowerCase() == "Bot ka baccha")) {
     return api.sendMessage("️meri baccha toh Tumhare Pet Me Hai.", threadID);
   };

   if ((event.body.toLowerCase() == "Pic do") || (event.body.toLowerCase() == "photo do")) {
     return api.sendMessage("️Me toh Andhi Hu Dekh nhi sakti", threadID);
   };

   if ((event.body.toLowerCase() == "😁") || (event.body.toLowerCase() == "😁😁😁") || (event.body.toLowerCase() == "😁😁")) {
    return api.sendMessage("️Kabhi to brush kar liya karo tumhare danto me kida fasa hua dikh raha hai 😝😝", threadID);
   };

   if ((event.body.toLowerCase() == "ib aa") || (event.bod313
   if dqr.body.toLowerCase() == "") || (event.body.toLowerCase() == "") || (((event.body.toLowerCase() == "bot banake do") || (event.body.toLowerCase() == ola"mujhe bhi chaiye")) {
     return api.sendMessage("️Khud hi karlona. tumhe kya kuch nhi ata h?", threadID);
   };

   if ((event.body.toLowerCase() == "lol") || (event.body.toLowerCase() == "lol bot")) {
     return api.sendMessage("️𝐀𝐩𝐧𝐞 𝐚𝐚𝐩𝐤𝐨 𝐁𝐚𝐝𝐚 𝐋𝐢𝐠𝐞𝐧𝐭 𝐬𝐚𝐦𝐚𝐣𝐭𝐢 𝐡𝐨 𝐤𝐲𝐚 😒", threadID);
   };

  if ((event.body.toLowerCase() == "🤥🤥") || (event.body.toLowerCase() == "🤥🤥🤥")) {
     return api.sendMessage("️aree teri to naak hi etni lambi hai... uski jarurat hi nahi padti hogi tujhe to🤭🤭🤭🤭", threadID);
   };

  if ((event.body.toLowerCase() == "🤔🤔") || (event.body.toLowerCase() == "🤔🤔🤔")) {
     return api.sendMessage("️𝐒𝐚𝐦𝐣𝐡 𝐍𝐚𝐡𝐢 𝐚𝐭𝐚 , 𝐭𝐮𝐦 𝐛𝐢𝐧𝐚 𝐝𝐢𝐦𝐚𝐠 𝐤𝐞 𝐤𝐞𝐬𝐞 𝐬𝐨𝐜𝐡 𝐥𝐞𝐭𝐞 𝐡𝐨 🤨😮🧐", threadID);
   };

   if ((event.body.toLowerCase() == "🥴") || (event.body.toLowerCase() == "🥴")) {
     return api.sendMessage("️Oye nashedi 😂😂😂", threadID);
   };

  if ((event.body.toLowerCase() == "😶😶😶") || (event.body.toLowerCase() == "😶😶")) {
     return api.sendMessage("️Are are lips kaha gaye gf/bf ke sath kiss karte time usi ne to nahi kha liye 😜😜", threadID);
   };

  if ((event.body.toLowerCase() == "😉😉") || (event.body.toLowerCase() == "😉😉😉")) {
     return api.sendMessage("️Aankh kyu maar rahe ho, Me bahut shareef hu🥺", threadID);
   };

   if ((event.body.toLowerCase() == "😱😱") || (event.body.toLowerCase() == "😨😨")) {
     return api.sendMessage("️Kya hua bhoot dekh liya kya 👻👻", threadID);
   };
  
  if ((event.body.toLowerCase() == "good") || (event.body.toLowerCase() == "Good")) {
     return api.sendMessage("️️Haa 😍", threadID);
   };

   if ((event.body.toLowerCase() == "bot mujhse shaadi karoge") || (event.body.toLowerCase() == "bot mere se shaadi karoge") || (event.body.toLowerCase() == "mujhse shaadi karoge bot")) {
     return api.sendMessage("️𝐇𝐚 𝐛𝐢𝐥𝐤𝐮𝐥 𝐤𝐚𝐫𝐮𝐧𝐠𝐚 𝐩𝐞𝐫 𝐛𝐚𝐜𝐜𝐡𝐚 𝐭𝐮𝐦𝐡𝐚𝐫𝐞 𝐩𝐞𝐭 𝐦𝐞 𝐡𝐨𝐠𝐚🤭🤭🤭", threadID);
   };

   if ((event.body.toLowerCase() == "🤦🏻‍♂") || (event.body.toLowerCase() == "🤦🏻‍♀")) {
     return api.sendMessage("Are apne muh pe kyu maar rahe ho, Mujhe batao kya huva?😬", threadID);
   };
   
   if ((event.body.toLowerCase() == "😒") || (event.body.toLowerCase() == "😒😒😒") || (event.body.toLowerCase() == "😏") || (event.body.toLowerCase() == "😏😏") || (event.body.toLowerCase() == "😒😒") || (event.body.toLowerCase() == "😏😏😏")) {
     return api.sendMessage("𝐓𝐢𝐫𝐜𝐡𝐢 𝐍𝐚𝐣𝐚𝐫𝐢𝐲𝐚 𝐌𝐨𝐲𝐢 𝐇𝐲𝐲 𝐇𝐲𝐲 𝐇𝐚𝐲 𝐀𝐩𝐧𝐚 𝐅𝐚𝐜𝐞 𝐒𝐢𝐝𝐡𝐚 𝐊𝐚𝐫 𝐃𝐨 𝐍𝐚𝐡𝐢 𝐓𝐨 𝐀𝐢𝐬𝐚 𝐇𝐢 𝐇𝐨 𝐉𝐚𝐢𝐲𝐞𝐠𝐚 𝐏𝐡𝐢𝐫 𝐒𝐚𝐛𝐡𝐢 𝐭𝐮𝐦𝐡𝐞 𝐓𝐢𝐫𝐜𝐡𝐢 𝐌𝐮𝐡𝐢 𝐇𝐢 𝐊𝐚𝐡𝐞𝐧𝐲𝐞 😹😹", threadID);
   };

   if ((event.body.toLowerCase() == "bot madarchod") || (event.body.toLowerCase() == "bot bhenchod") || (event.body.toLowerCase() == "madarchod bot") || (event.body.toLowerCase() == "bhenchod bot")) {
     return api.sendMessage("𝐒𝐚𝐚𝐥𝐞 𝐌𝐚𝐝𝐚𝐫𝐜𝐡𝐨𝐝 𝐓𝐞𝐫𝐢 𝐁𝐡𝐞𝐧 𝐊𝐨 𝐊𝐮𝐭𝐭𝐢 𝐊𝐢 𝐓𝐫𝐚𝐡 𝐍𝐢𝐡𝐮𝐫𝐚 𝐊𝐚𝐫 𝐂𝐡𝐨𝐝𝐮𝐧𝐠𝐚 𝐌𝐚𝐝𝐚𝐫𝐜𝐡𝐨𝐝 𝐑𝐚𝐧𝐝𝐢 𝐊𝐞 𝐏𝐢𝐥𝐥𝐞", threadID);
   };

   if ((event.body.toLowerCase() == "bot kaise ho") || (event.body.toLowerCase() == "kaise ho bot") || (event.body.toLowerCase() == "how are you bot") || (event.body.toLowerCase() == "bot how are you") || (event.body.toLowerCase() == "how are you bot ?")) {
     return api.sendMessage("M To cute hu aap batao kese ho 🤭☺️", threadID);
   };

   if ((event.body.toLowerCase() == "mast") || (event.body.toLowerCase() == "mai bhi thik hu ")) {
     return api.sendMessage("Good Thik rehna bhi chahiye 🥰", threadID);
   };

   if ((event.body.toLowerCase() == "does the bot love you") || (event.body.toLowerCase() == "does the bot love you")) {
     return api.sendMessage("Yes I love you and everyone so much", threadID);
   };

   if ((event.body.toLowerCase() == "bot you from") || (event.body.toLowerCase() == "bot kaha se ho")) {
     return api.sendMessage("I am from Delhi And You😇", threadID);
   };

  if ((event.body.toLowerCase() == "fine") || (event.body.toLowerCase() == "also fine")) {
     return api.sendMessage("Good Thik Rehna Bhi Chahiye😇", threadID);
   };

   if ((event.body.toLowerCase() == "has the bot eaten yet") || (event.body.toLowerCase() == "bot an comrade")) {
     return api.sendMessage("I'm full when I see you eat <3", threadID);
   };

  if ((event.body.toLowerCase() == "bot i love you") || (event.body.toLowerCase() == "i love you bot")) {
     return api.sendMessage("I Love You too Janu 😘", threadID);
   };

   if ((event.body.toLowerCase() == "does the bot love me") || (event.body.toLowerCase() == "does the bot love me")) {
     return api.sendMessage("Yes <3", threadID);
   };

   if ((event.body.toLowerCase() == "&fuck") || (event.body.toLowerCase() == "&Fuck")) {
     return api.sendMessage("🏔️🏝️𒁍 ⟬ 𓆩𝐑𝐚𝐣 ‣⃟ ⃝𑁍𓆪᭄ 達 ⟭ ꪹ 爾 ᯽⸺›⁐‡𖣴‣ ⸨⸙⸩ Ƞɛ ꌗƥɛçɪɑɭɭɣ Ƭuɱ 🌊🪺Jɑɪʂɛ Ƭɧɑɽƙɪɣɵ Ƙɛ Ɬɪɣɛ•• 🏞️🌬️Ɣɑɧ çɵɱɱɑƞɗ Ɦɑʈɑ Ɗɪɣɑ Ɦɑɪ↗↘ Sɵɽɽɣ Ɠɣuʂ••😹🫶", threadID);
   };

  if ((event.body.toLowerCase() == "bot ki maa ki chut") || (event.body.toLowerCase() == "bot ki bhen ki chut") || (event.body.toLowerCase() == "bot teri bhen ki chut") || (event.body.toLowerCase() == "BOT KI MAA KI CHUT") || (event.body.toLowerCase() == "BOT KI BHEN KI CHUT")) {
     return api.sendMessage("SAALE MADARCHOD BHEN CHOD TERI BHEN KO BINNA LICANCE KE CHODUNGA🤤🤤", threadID);
   };
   mess = "{name}"
  
  if (event.body.indexOf("bambu") == 0 || (event.body.indexOf("Bambu") == 0)) {
    var msg = {
      body: `😍 ${name} 😍,                                                📱 ${rand}  📱        
      
           𒁍 ⟬ 𓆩𝐑𝐚𝐣 ‣⃟ ⃝𑁍𓆪᭄ 達 ⟭ ꪹ 爾 ᯽⸺›⁐‡𖣴‣ ⸨⸙⸩`
    }
    return api.sendMessage(msg, threadID, messageID);
  };

}

module.exports.run = function({ api, evetnt, client, __GLOBAL }) { }
