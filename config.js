const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="xoulser@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "https://ap-southeast-1.aws.data.mongodb-api.com/app/data-kzyop/endpoint/data/v1"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://chat.whatsapp.com/Ln6PUAjwZhiBvcEKLG6KQl";
global.website=process.env.GURL || "https://chat.whatsapp.com/Ln6PUAjwZhiBvcEKLG6KQl" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.imgur.com/CoAcgTb.jpeg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "𝐗ᴏᴜʟ 𝐌ᴅ" 


global.devs = "919633605648" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "919633605648";




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
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "919633605648";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "919633605648";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "919633605648";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_12_50_08_06_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQ4LFxuICAgICAgICAzMCxcbiAgICAgICAgNTksXG4gICAgICAgIDIxMyxcbiAgICAgICAgMjIsXG4gICAgICAgIDEyNCxcbiAgICAgICAgODAsXG4gICAgICAgIDk5LFxuICAgICAgICAxMyxcbiAgICAgICAgMjI1LFxuICAgICAgICAzNixcbiAgICAgICAgMTYwLFxuICAgICAgICAzLFxuICAgICAgICAyNDMsXG4gICAgICAgIDIzNSxcbiAgICAgICAgOTQsXG4gICAgICAgIDcxLFxuICAgICAgICAxODYsXG4gICAgICAgIDEwMixcbiAgICAgICAgMjAsXG4gICAgICAgIDI0MyxcbiAgICAgICAgNTksXG4gICAgICAgIDM1LFxuICAgICAgICAyOCxcbiAgICAgICAgMTE4LFxuICAgICAgICA1NSxcbiAgICAgICAgMTY4LFxuICAgICAgICAxMDgsXG4gICAgICAgIDEsXG4gICAgICAgIDEwNixcbiAgICAgICAgODksXG4gICAgICAgIDY1XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDcxLFxuICAgICAgICAxMDUsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTc4LFxuICAgICAgICAxOTcsXG4gICAgICAgIDQyLFxuICAgICAgICAyMzQsXG4gICAgICAgIDU5LFxuICAgICAgICAzMSxcbiAgICAgICAgNDMsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMjQzLFxuICAgICAgICAyMjcsXG4gICAgICAgIDQzLFxuICAgICAgICA3NCxcbiAgICAgICAgNjksXG4gICAgICAgIDE4NixcbiAgICAgICAgODEsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMjAyLFxuICAgICAgICAyNDMsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMjQ5LFxuICAgICAgICA0MSxcbiAgICAgICAgMTgxLFxuICAgICAgICA0NyxcbiAgICAgICAgMTEwLFxuICAgICAgICA4NyxcbiAgICAgICAgMjQ0LFxuICAgICAgICAyMTUsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTdcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0LFxuICAgICAgICAxOTgsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMjA3LFxuICAgICAgICA0NixcbiAgICAgICAgNzksXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTk5LFxuICAgICAgICAyMjEsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTA3LFxuICAgICAgICA5NSxcbiAgICAgICAgNTUsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTIyLFxuICAgICAgICAyMTUsXG4gICAgICAgIDIzNixcbiAgICAgICAgMjIxLFxuICAgICAgICAxNzgsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMjM5LFxuICAgICAgICAyMDAsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMjA0LFxuICAgICAgICAxNjIsXG4gICAgICAgIDM1LFxuICAgICAgICAxMDUsXG4gICAgICAgIDIwMixcbiAgICAgICAgMjcsXG4gICAgICAgIDMzLFxuICAgICAgICAyMjEsXG4gICAgICAgIDExNFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNTYsXG4gICAgICAgIDc0LFxuICAgICAgICAyMzYsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTQzLFxuICAgICAgICAxMjYsXG4gICAgICAgIDk5LFxuICAgICAgICAxOTEsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMjA5LFxuICAgICAgICAxMDMsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTI2LFxuICAgICAgICAxMTUsXG4gICAgICAgIDU4LFxuICAgICAgICAxNzcsXG4gICAgICAgIDM4LFxuICAgICAgICA0NSxcbiAgICAgICAgOTcsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTQ3LFxuICAgICAgICAyMCxcbiAgICAgICAgMTE2LFxuICAgICAgICA4NSxcbiAgICAgICAgMTI0LFxuICAgICAgICA3OSxcbiAgICAgICAgMTUwLFxuICAgICAgICAxODksXG4gICAgICAgIDI5LFxuICAgICAgICAyMjQsXG4gICAgICAgIDkzLFxuICAgICAgICA0NlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTc2LFxuICAgICAgICAxMDMsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMzIsXG4gICAgICAgIDc4LFxuICAgICAgICAxMzEsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTM1LFxuICAgICAgICAyMDMsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMjMwLFxuICAgICAgICAxMyxcbiAgICAgICAgMTA5LFxuICAgICAgICA3NixcbiAgICAgICAgMjE0LFxuICAgICAgICAxNzAsXG4gICAgICAgIDExNSxcbiAgICAgICAgMjM0LFxuICAgICAgICAyMjcsXG4gICAgICAgIDgsXG4gICAgICAgIDI1LFxuICAgICAgICAzOSxcbiAgICAgICAgMTczLFxuICAgICAgICAxNzksXG4gICAgICAgIDIwNSxcbiAgICAgICAgNjMsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTM1LFxuICAgICAgICAxODUsXG4gICAgICAgIDkwLFxuICAgICAgICAyMyxcbiAgICAgICAgMTIzXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIzOSxcbiAgICAgICAgMjA0LFxuICAgICAgICA0OSxcbiAgICAgICAgMjI5LFxuICAgICAgICAzMixcbiAgICAgICAgMTQ2LFxuICAgICAgICAxNCxcbiAgICAgICAgMjEwLFxuICAgICAgICAxNDQsXG4gICAgICAgIDQxLFxuICAgICAgICAxMjMsXG4gICAgICAgIDExOSxcbiAgICAgICAgOTksXG4gICAgICAgIDUwLFxuICAgICAgICAyMTcsXG4gICAgICAgIDI4LFxuICAgICAgICA2OCxcbiAgICAgICAgMzIsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTg2LFxuICAgICAgICA2LFxuICAgICAgICA5MixcbiAgICAgICAgNjEsXG4gICAgICAgIDExNCxcbiAgICAgICAgNCxcbiAgICAgICAgNDQsXG4gICAgICAgIDEyOCxcbiAgICAgICAgNjYsXG4gICAgICAgIDYsXG4gICAgICAgIDIyNSxcbiAgICAgICAgNjMsXG4gICAgICAgIDk4XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDI0LFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgMjYsXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICAxNDEsXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICA3MyxcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDEyOCxcbiAgICAgICAgICA2NyxcbiAgICAgICAgICAyNDIsXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICA2NyxcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDE2OSxcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgMTA5LFxuICAgICAgICAgIDY3XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDAsXG4gICAgICAgICAgNCxcbiAgICAgICAgICA5MSxcbiAgICAgICAgICA2OCxcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDE4NCxcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgMTcsXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgMTgzLFxuICAgICAgICAgIDIzOCxcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDIzMixcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDExMixcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgNzksXG4gICAgICAgICAgMjA2LFxuICAgICAgICAgIDY2LFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICA1N1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEzNCxcbiAgICAgICAgMjUxLFxuICAgICAgICAxNjcsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTI5LFxuICAgICAgICAyNDIsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTIxLFxuICAgICAgICAzLFxuICAgICAgICAyMDksXG4gICAgICAgIDgxLFxuICAgICAgICAyNDksXG4gICAgICAgIDY1LFxuICAgICAgICAyMDQsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMjU1LFxuICAgICAgICAxMyxcbiAgICAgICAgMjAwLFxuICAgICAgICAzOSxcbiAgICAgICAgMjQ0LFxuICAgICAgICAxNyxcbiAgICAgICAgMTAyLFxuICAgICAgICAxMTMsXG4gICAgICAgIDg3LFxuICAgICAgICAxMzAsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMjE0LFxuICAgICAgICA3NyxcbiAgICAgICAgMjQzLFxuICAgICAgICAxMjQsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMCxcbiAgICAgICAgNDcsXG4gICAgICAgIDg0LFxuICAgICAgICA1OCxcbiAgICAgICAgMjgsXG4gICAgICAgIDk3LFxuICAgICAgICAzMixcbiAgICAgICAgMTA0LFxuICAgICAgICAyMzEsXG4gICAgICAgIDg3LFxuICAgICAgICAxNzgsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTg2LFxuICAgICAgICA4OCxcbiAgICAgICAgNjAsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTk5LFxuICAgICAgICAyMjMsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMjM1LFxuICAgICAgICAzNCxcbiAgICAgICAgNDAsXG4gICAgICAgIDgwLFxuICAgICAgICAxMTcsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTI2LFxuICAgICAgICAzLFxuICAgICAgICA2LFxuICAgICAgICAyMTAsXG4gICAgICAgIDU1LFxuICAgICAgICA1NyxcbiAgICAgICAgMTE3LFxuICAgICAgICA2XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiA5OSxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCI3MUhFcFF0Y1g5SGNBTEN5QzRLY1hPQjBPRTZVRzhRMGFoTUNlRzd5M2Q0PVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJnaS1Lemo0blFiNnZUbXQ3VWdjMXRRXCIsXG4gIFwicGhvbmVJZFwiOiBcImFjZGE0OTJjLWE4YjItNGMwOS1hYWY4LTI0NjkzMzRkYTQwNFwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAzOSxcbiAgICAgIDE5MCxcbiAgICAgIDI0NixcbiAgICAgIDI0NCxcbiAgICAgIDIwNSxcbiAgICAgIDEwMixcbiAgICAgIDExMyxcbiAgICAgIDE4MCxcbiAgICAgIDE4OCxcbiAgICAgIDEyLFxuICAgICAgMjUxLFxuICAgICAgMTA3LFxuICAgICAgMTgsXG4gICAgICAxNyxcbiAgICAgIDIsXG4gICAgICA0NixcbiAgICAgIDk4LFxuICAgICAgNTgsXG4gICAgICAxNzQsXG4gICAgICAyNFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA4MCxcbiAgICAgIDEyOCxcbiAgICAgIDk0LFxuICAgICAgMjA4LFxuICAgICAgOTAsXG4gICAgICA4OCxcbiAgICAgIDc4LFxuICAgICAgOTIsXG4gICAgICAxMzAsXG4gICAgICAxOTAsXG4gICAgICAzMCxcbiAgICAgIDExMixcbiAgICAgIDgsXG4gICAgICAxNDYsXG4gICAgICA0MCxcbiAgICAgIDYsXG4gICAgICAyMTMsXG4gICAgICAyMCxcbiAgICAgIDU1LFxuICAgICAgMjU1XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIlpEVzlTWFFCXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI5MTk2MzM2MDU2NDg6OTNAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjk0MzYwNDMxNTQyNDAxOjkzQGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0x2MTllb0NFSkM0eUxVR0dBVWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiU3ZvVmxzSVZ3bEFsUVhiMWIvcHkwUElxWjJRRnhBRXZGRy8xYVlrMVJIVT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJJa0dIb1FGQW5OWTFjdURzK2NJZlpWSW1lek0zZ2ZIN0NXSTVEZDczNzNKY01TVFQ3WGVnWEV3V1hjckFEeWk0TW12aXdONXFrK1FGSnYrZnBseWVBZz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJKTllCcHN3UFRNQjZyLyt5Yjh6b0pMZDJxVDEzSDVyT2lSWVlVeDRKZFN1TGtCVnlqVHpzTmd5Z004TlZxM205ZmJQTEpDWFdyNXhMVTlHUW54K2FEZz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCI5MTk2MzM2MDU2NDg6OTNAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICA3NCxcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICAyMSxcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgODAsXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDI0NSxcbiAgICAgICAgICAxMTEsXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgMjQyLFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgMSxcbiAgICAgICAgICA0NyxcbiAgICAgICAgICAyMCxcbiAgICAgICAgICAxMTEsXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgNjgsXG4gICAgICAgICAgMTE3XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjI5NDg2MjgsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFNaGdcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQU1oZy5qc29uIjogIntcImtleURhdGFcIjpcImp1VWN2Q054Z0RxckFySUxHWTY4NlkrUThsNGtwbEJHeXNMSko5c3FlVG89XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6NzYxMTAwOTg3LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjBcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```𝐗ᴏᴜʟ 𝐌ᴅ```"),
 
  author : process.env.PACK_AUTHER|| "𝐗ᴏᴜʟ 𝐌ᴅ",
  packname: process.env.PACK_NAME || "𝑺 𝜟 𝜝 𝜟 𝜞 𝛪 /// 🌩️",
  botname : process.env.BOT_NAME  || "𝐗ᴏᴜʟ 𝐌ᴅᴅ",
  ownername:process.env.OWNER_NAME|| "𝐗ᴏᴜʟ 𝐒ᴇʀ",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "public",
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
