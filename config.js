const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923276519352";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_06_53_07_10_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOCxcbiAgICAgICAgMTk3LFxuICAgICAgICAzOSxcbiAgICAgICAgMTYwLFxuICAgICAgICA3MixcbiAgICAgICAgMjM0LFxuICAgICAgICA5OSxcbiAgICAgICAgMTYxLFxuICAgICAgICA1LFxuICAgICAgICAyMzIsXG4gICAgICAgIDExMCxcbiAgICAgICAgMjEzLFxuICAgICAgICAyMzMsXG4gICAgICAgIDE4LFxuICAgICAgICAxODgsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTg4LFxuICAgICAgICAxNzQsXG4gICAgICAgIDExMyxcbiAgICAgICAgMzksXG4gICAgICAgIDI3LFxuICAgICAgICAyMjgsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMjI4LFxuICAgICAgICAxMTksXG4gICAgICAgIDE4LFxuICAgICAgICAyMzUsXG4gICAgICAgIDkzLFxuICAgICAgICAyNTAsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMjMsXG4gICAgICAgIDExN1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMixcbiAgICAgICAgMTkzLFxuICAgICAgICAxMzcsXG4gICAgICAgIDE3MyxcbiAgICAgICAgOTQsXG4gICAgICAgIDE3MCxcbiAgICAgICAgODMsXG4gICAgICAgIDIzNyxcbiAgICAgICAgNTIsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTgxLFxuICAgICAgICAyOSxcbiAgICAgICAgMTA1LFxuICAgICAgICAxOTAsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMjE2LFxuICAgICAgICAxOTEsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMzYsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTU4LFxuICAgICAgICAyNTEsXG4gICAgICAgIDI4LFxuICAgICAgICAxODEsXG4gICAgICAgIDIzMixcbiAgICAgICAgNjMsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTM3LFxuICAgICAgICAyMTUsXG4gICAgICAgIDY0LFxuICAgICAgICAyNTMsXG4gICAgICAgIDcxXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAzMixcbiAgICAgICAgMTMxLFxuICAgICAgICAxLFxuICAgICAgICAyMDcsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTU1LFxuICAgICAgICA4MSxcbiAgICAgICAgMTQ5LFxuICAgICAgICA5MixcbiAgICAgICAgMTQ0LFxuICAgICAgICA4NSxcbiAgICAgICAgMTEsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMjIyLFxuICAgICAgICA4NCxcbiAgICAgICAgMTczLFxuICAgICAgICAyMjMsXG4gICAgICAgIDc5LFxuICAgICAgICA2MixcbiAgICAgICAgNSxcbiAgICAgICAgMjQxLFxuICAgICAgICAxLFxuICAgICAgICAxMDUsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTI4LFxuICAgICAgICAyMjQsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTg5LFxuICAgICAgICAzMSxcbiAgICAgICAgMjEsXG4gICAgICAgIDE4OCxcbiAgICAgICAgOTBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNTksXG4gICAgICAgIDI0MixcbiAgICAgICAgOSxcbiAgICAgICAgMTQ5LFxuICAgICAgICAyMDYsXG4gICAgICAgIDk3LFxuICAgICAgICA2LFxuICAgICAgICAyMzksXG4gICAgICAgIDI2LFxuICAgICAgICAxMTksXG4gICAgICAgIDEyMixcbiAgICAgICAgMTY4LFxuICAgICAgICA1MyxcbiAgICAgICAgNyxcbiAgICAgICAgMTY0LFxuICAgICAgICA3NSxcbiAgICAgICAgMjMxLFxuICAgICAgICAxMzQsXG4gICAgICAgIDMxLFxuICAgICAgICAxMzQsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTExLFxuICAgICAgICAyNTMsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMjMxLFxuICAgICAgICAxNTgsXG4gICAgICAgIDUwLFxuICAgICAgICA3OCxcbiAgICAgICAgMTg4LFxuICAgICAgICAyNDMsXG4gICAgICAgIDU4LFxuICAgICAgICA0MVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjA4LFxuICAgICAgICA4NixcbiAgICAgICAgMTI3LFxuICAgICAgICA0NixcbiAgICAgICAgMjM1LFxuICAgICAgICA5NSxcbiAgICAgICAgMTY1LFxuICAgICAgICAxMDUsXG4gICAgICAgIDU4LFxuICAgICAgICAyMjIsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTE4LFxuICAgICAgICAxNTQsXG4gICAgICAgIDMsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTU2LFxuICAgICAgICAxOTUsXG4gICAgICAgIDEyNSxcbiAgICAgICAgNTUsXG4gICAgICAgIDM1LFxuICAgICAgICA1NixcbiAgICAgICAgOTgsXG4gICAgICAgIDgwLFxuICAgICAgICAxOTQsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMjI1LFxuICAgICAgICAxMDAsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTc2LFxuICAgICAgICA4MSxcbiAgICAgICAgMjIyLFxuICAgICAgICA4OVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxLFxuICAgICAgICAxOTYsXG4gICAgICAgIDExMSxcbiAgICAgICAgNjQsXG4gICAgICAgIDE2OSxcbiAgICAgICAgNDMsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMzUsXG4gICAgICAgIDU3LFxuICAgICAgICAxNDAsXG4gICAgICAgIDQxLFxuICAgICAgICAxNDYsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTAzLFxuICAgICAgICAxNjksXG4gICAgICAgIDE3MSxcbiAgICAgICAgOTYsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTgyLFxuICAgICAgICAzMCxcbiAgICAgICAgNzksXG4gICAgICAgIDE2MCxcbiAgICAgICAgMjI3LFxuICAgICAgICAyNTQsXG4gICAgICAgIDE2NixcbiAgICAgICAgMjM2LFxuICAgICAgICAxMzgsXG4gICAgICAgIDEyMixcbiAgICAgICAgMzIsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTc1LFxuICAgICAgICA4NVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDIxMyxcbiAgICAgICAgICAyMTQsXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDExMixcbiAgICAgICAgICAxNyxcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgMjExLFxuICAgICAgICAgIDI2LFxuICAgICAgICAgIDIzMyxcbiAgICAgICAgICA0MSxcbiAgICAgICAgICA3OCxcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgMTM3LFxuICAgICAgICAgIDExMixcbiAgICAgICAgICAzNSxcbiAgICAgICAgICA4NixcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgMTIxLFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDIzMSxcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgNDcsXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyOCxcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICAxMDBcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgMyxcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICAxNTcsXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDEwMSxcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgMzksXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDM3LFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICA2LFxuICAgICAgICAgIDE0MixcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICAxMjcsXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICAxNjYsXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgMTE3XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTEyLFxuICAgICAgICAxOTQsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMjQyLFxuICAgICAgICAxNCxcbiAgICAgICAgMTU3LFxuICAgICAgICAxNzMsXG4gICAgICAgIDIsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTIwLFxuICAgICAgICAyNTMsXG4gICAgICAgIDIxNixcbiAgICAgICAgNDcsXG4gICAgICAgIDgxLFxuICAgICAgICAxNTAsXG4gICAgICAgIDMwLFxuICAgICAgICAyNDYsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTY2LFxuICAgICAgICAyMyxcbiAgICAgICAgMTI1LFxuICAgICAgICA3MCxcbiAgICAgICAgMTA5LFxuICAgICAgICAxODQsXG4gICAgICAgIDc0LFxuICAgICAgICAyNCxcbiAgICAgICAgODgsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMjI0LFxuICAgICAgICAxODYsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMzMsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTA4LFxuICAgICAgICAzOSxcbiAgICAgICAgMTUwLFxuICAgICAgICAyMjYsXG4gICAgICAgIDU2LFxuICAgICAgICA4NSxcbiAgICAgICAgNTQsXG4gICAgICAgIDQxLFxuICAgICAgICA4NSxcbiAgICAgICAgMzAsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMjAxLFxuICAgICAgICAxNzIsXG4gICAgICAgIDQyLFxuICAgICAgICA2MyxcbiAgICAgICAgMTcyLFxuICAgICAgICAzNyxcbiAgICAgICAgMjQ5LFxuICAgICAgICA5MixcbiAgICAgICAgMTQxLFxuICAgICAgICAxMjgsXG4gICAgICAgIDE2LFxuICAgICAgICA1OCxcbiAgICAgICAgMTg0LFxuICAgICAgICAxOTUsXG4gICAgICAgIDc0LFxuICAgICAgICAxNzcsXG4gICAgICAgIDEwNixcbiAgICAgICAgOTIsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDkxLFxuICBcImFkdlNlY3JldEtleVwiOiBcImo4OW9zLzF0aWVibTNvTFUxMHV5MTdWMnRZNFN3cklVaEtZU3ZMOS9OSkE9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIkFsdzQ5MFpfU3FXaF93OUowRElkY1FcIixcbiAgXCJwaG9uZUlkXCI6IFwiZWFhNTViMjItMzIxYi00MjAyLWJjYTktNTg5OGMzMjg4NjlkXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDk4LFxuICAgICAgNSxcbiAgICAgIDEyMyxcbiAgICAgIDQ1LFxuICAgICAgMjE4LFxuICAgICAgMTgyLFxuICAgICAgMTYzLFxuICAgICAgMjUyLFxuICAgICAgNzEsXG4gICAgICA5NyxcbiAgICAgIDUzLFxuICAgICAgNDMsXG4gICAgICA2NSxcbiAgICAgIDkzLFxuICAgICAgNzIsXG4gICAgICAxMTMsXG4gICAgICAyMTYsXG4gICAgICAyMDgsXG4gICAgICAyNTMsXG4gICAgICAxMjlcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjMxLFxuICAgICAgMTIzLFxuICAgICAgMTg4LFxuICAgICAgMjAsXG4gICAgICAzMSxcbiAgICAgIDI0MyxcbiAgICAgIDE5NixcbiAgICAgIDI0NSxcbiAgICAgIDcyLFxuICAgICAgMTYxLFxuICAgICAgMyxcbiAgICAgIDEzMixcbiAgICAgIDI0MCxcbiAgICAgIDIyOCxcbiAgICAgIDkxLFxuICAgICAgMTA1LFxuICAgICAgMTQyLFxuICAgICAgMjM4LFxuICAgICAgMTI5LFxuICAgICAgNTNcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiUUxKRDUxMjhcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjkyMzI3NjUxOTM1Mjo5QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwiSGFja2VyIFRGXCIsXG4gICAgXCJsaWRcIjogXCI2MTg0ODAxNTY0Njc5MTo5QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0xtaXQ0RURFTHJmdUxRR0dBTWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiRkQ5UUE4S1ZYamxDTGN2a1o2OHV3THJyQ0w4a1FNV25WeCtWU1EwU0Ywbz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJkeXFZRmZZNVZYd2VmNTR1cG1qT0pteWZxODllTXlsdXljbG1tWDFoNU9yQnJYZGNQQkQwSjExNll6aCtmMU1Cb1hpYWwvQk5aeVhTcjRCYXNuREpBUT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJXQmJPM2VSS0dGRDQxSFptS0xaQng1d2xEWlNhNWhFaHc0aGhqT1M2NDZUZFNQZXdCN0hBaDNjdDArczRFMDZlV2RUVjFaRmhnY1lxN3RkeVpERkxBUT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCI5MjMyNzY1MTkzNTI6OUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDIwLFxuICAgICAgICAgIDYzLFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDMsXG4gICAgICAgICAgMTk0LFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICA5NCxcbiAgICAgICAgICA1NyxcbiAgICAgICAgICA2NixcbiAgICAgICAgICA0NSxcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICAxNzUsXG4gICAgICAgICAgNDYsXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDE4NixcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgOCxcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDE2NyxcbiAgICAgICAgICA4NyxcbiAgICAgICAgICAzMSxcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgNzRcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMDU5NDM2NSxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUpYZFwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBSlhkLmpzb24iOiAie1wia2V5RGF0YVwiOlwiU2xwRmdMR1ZoNGVOQTJsZThCa2NLaFlCRU91Nk1EcUFPaiswRmVMM0RLND1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjo4MDgzMDkwNDksXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTcyMDUzNjA2ODg4MFwifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
