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
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_12_55_07_20_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDgsXG4gICAgICAgIDIzMyxcbiAgICAgICAgNzQsXG4gICAgICAgIDUyLFxuICAgICAgICAxNzcsXG4gICAgICAgIDg1LFxuICAgICAgICAxNjEsXG4gICAgICAgIDM3LFxuICAgICAgICA2LFxuICAgICAgICA1NyxcbiAgICAgICAgMTUxLFxuICAgICAgICAxMyxcbiAgICAgICAgMTIyLFxuICAgICAgICAxNTMsXG4gICAgICAgIDE1OSxcbiAgICAgICAgNixcbiAgICAgICAgMTk1LFxuICAgICAgICA5MyxcbiAgICAgICAgMjE1LFxuICAgICAgICA1MixcbiAgICAgICAgNzIsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTU4LFxuICAgICAgICA3LFxuICAgICAgICAzNixcbiAgICAgICAgMTksXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTc3LFxuICAgICAgICAxMjUsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTc4LFxuICAgICAgICA4M1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA0MCxcbiAgICAgICAgNjksXG4gICAgICAgIDE2NixcbiAgICAgICAgMjEzLFxuICAgICAgICAxNjksXG4gICAgICAgIDY3LFxuICAgICAgICA2OSxcbiAgICAgICAgNCxcbiAgICAgICAgMTg4LFxuICAgICAgICAxMzUsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTUwLFxuICAgICAgICAyNTMsXG4gICAgICAgIDQxLFxuICAgICAgICAxNjYsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTc2LFxuICAgICAgICAxMTMsXG4gICAgICAgIDU5LFxuICAgICAgICAxNjgsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMjMzLFxuICAgICAgICA0OSxcbiAgICAgICAgMTAyLFxuICAgICAgICAyNyxcbiAgICAgICAgOTEsXG4gICAgICAgIDQyLFxuICAgICAgICAxNjMsXG4gICAgICAgIDEzNSxcbiAgICAgICAgNSxcbiAgICAgICAgMTc0LFxuICAgICAgICAyM1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTY4LFxuICAgICAgICAxMzUsXG4gICAgICAgIDYyLFxuICAgICAgICAxMixcbiAgICAgICAgMTEwLFxuICAgICAgICAyMDYsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTYwLFxuICAgICAgICAzOCxcbiAgICAgICAgMjIsXG4gICAgICAgIDEyLFxuICAgICAgICA0NyxcbiAgICAgICAgNjAsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTUxLFxuICAgICAgICAxODIsXG4gICAgICAgIDUsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTk1LFxuICAgICAgICAxOTgsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTM1LFxuICAgICAgICAyMzcsXG4gICAgICAgIDIyNixcbiAgICAgICAgODIsXG4gICAgICAgIDEzLFxuICAgICAgICA2LFxuICAgICAgICAxOTgsXG4gICAgICAgIDEsXG4gICAgICAgIDM0LFxuICAgICAgICA2MCxcbiAgICAgICAgMTA2XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDQxLFxuICAgICAgICAyMjgsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTM2LFxuICAgICAgICAxMTAsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTY4LFxuICAgICAgICA4OCxcbiAgICAgICAgMjAxLFxuICAgICAgICAxNTYsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTk4LFxuICAgICAgICAxNDIsXG4gICAgICAgIDMwLFxuICAgICAgICAyMzMsXG4gICAgICAgIDcyLFxuICAgICAgICAyNTIsXG4gICAgICAgIDE0NSxcbiAgICAgICAgNTQsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMjQxLFxuICAgICAgICAxODksXG4gICAgICAgIDIwNyxcbiAgICAgICAgMzUsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTM4LFxuICAgICAgICAyNDksXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTg2LFxuICAgICAgICAyMjgsXG4gICAgICAgIDcxLFxuICAgICAgICA1NFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjI0LFxuICAgICAgICAxNDUsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMjQyLFxuICAgICAgICA3NixcbiAgICAgICAgMjU0LFxuICAgICAgICAxNjEsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMjI5LFxuICAgICAgICAxMDEsXG4gICAgICAgIDEsXG4gICAgICAgIDUsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTk5LFxuICAgICAgICAyNCxcbiAgICAgICAgMTQxLFxuICAgICAgICAxMDcsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTA3LFxuICAgICAgICAxNDAsXG4gICAgICAgIDk0LFxuICAgICAgICAyMDksXG4gICAgICAgIDE4NixcbiAgICAgICAgMTk5LFxuICAgICAgICAzLFxuICAgICAgICAxMzksXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTUwLFxuICAgICAgICA4MSxcbiAgICAgICAgMzcsXG4gICAgICAgIDE3NixcbiAgICAgICAgNjlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDgsXG4gICAgICAgIDIsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTgyLFxuICAgICAgICAxNjEsXG4gICAgICAgIDksXG4gICAgICAgIDIzMSxcbiAgICAgICAgNjcsXG4gICAgICAgIDM5LFxuICAgICAgICAyNTUsXG4gICAgICAgIDM3LFxuICAgICAgICAxNDgsXG4gICAgICAgIDIzOCxcbiAgICAgICAgNDEsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTE1LFxuICAgICAgICA3MCxcbiAgICAgICAgMTUzLFxuICAgICAgICAyMjgsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMzUsXG4gICAgICAgIDEzNixcbiAgICAgICAgMzgsXG4gICAgICAgIDExMyxcbiAgICAgICAgMjQ2LFxuICAgICAgICAyMjQsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTc4LFxuICAgICAgICAxMTYsXG4gICAgICAgIDQ3LFxuICAgICAgICA1OSxcbiAgICAgICAgOTJcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDUzLFxuICAgICAgICAgIDE1OCxcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgMTA5LFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICA3NixcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgMjksXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDIzMyxcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgODQsXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDE1MCxcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgMTMyLFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDExNFxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxMTQsXG4gICAgICAgICAgOTQsXG4gICAgICAgICAgODksXG4gICAgICAgICAgODAsXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICAzOSxcbiAgICAgICAgICA3MCxcbiAgICAgICAgICAxOTAsXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDM2LFxuICAgICAgICAgIDIxMixcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDE5NyxcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICAxMTQsXG4gICAgICAgICAgMjExLFxuICAgICAgICAgIDEyMSxcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDE3MyxcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgMTI0LFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDMwXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjUsXG4gICAgICAgIDUsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTg0LFxuICAgICAgICAyMDUsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMjQ3LFxuICAgICAgICAyMzQsXG4gICAgICAgIDExNCxcbiAgICAgICAgMzcsXG4gICAgICAgIDIyOSxcbiAgICAgICAgODcsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTAxLFxuICAgICAgICAxNjQsXG4gICAgICAgIDIzNCxcbiAgICAgICAgNDAsXG4gICAgICAgIDQxLFxuICAgICAgICA2MCxcbiAgICAgICAgMTk0LFxuICAgICAgICAyNixcbiAgICAgICAgMTk0LFxuICAgICAgICAyMjAsXG4gICAgICAgIDMzLFxuICAgICAgICAxNTksXG4gICAgICAgIDcyLFxuICAgICAgICA0NCxcbiAgICAgICAgMjMzLFxuICAgICAgICAyMTksXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTAzLFxuICAgICAgICAxNzgsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMjcsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMjgsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTkwLFxuICAgICAgICA1LFxuICAgICAgICAxOTcsXG4gICAgICAgIDM4LFxuICAgICAgICAxNTMsXG4gICAgICAgIDE4MyxcbiAgICAgICAgNyxcbiAgICAgICAgMjAyLFxuICAgICAgICAxMDUsXG4gICAgICAgIDIwOSxcbiAgICAgICAgNjgsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTgyLFxuICAgICAgICAyNDQsXG4gICAgICAgIDc0LFxuICAgICAgICAxMjQsXG4gICAgICAgIDQwLFxuICAgICAgICAxMjQsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTA2LFxuICAgICAgICAxMjgsXG4gICAgICAgIDMzLFxuICAgICAgICAxODUsXG4gICAgICAgIDU5LFxuICAgICAgICAxMSxcbiAgICAgICAgMTI0LFxuICAgICAgICAxMzBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDIwMyxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCI2eUFucTF5RDJiOUVaYk8zQXNEeXNxRi9tbHVxdlBSSjFuaWIzR1B4anZBPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjQwNzcxMzQ5MzY0QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCI5M0RGQ0Y5QTQxRUM1RjIzRTdFRjNCRDVEMzhCMzA5Q1wiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MjE0ODAxMTJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCI0MDc3MTM0OTM2NEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiNjAzRjc5QUI0OUZGRUEyRDBCNzEyQzRERUNGNzcwQ0JcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzIxNDgwMTEzXG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMSxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIktJRFozQ2ZSUjhtc1lqeXU4VklnWEFcIixcbiAgXCJwaG9uZUlkXCI6IFwiZjJhZjAzZDAtOGVjYi00Y2U0LWJiMGQtMzVjM2ZlNjQwYmNkXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIzNCxcbiAgICAgIDEwMSxcbiAgICAgIDUxLFxuICAgICAgMTM4LFxuICAgICAgMTU1LFxuICAgICAgMjAxLFxuICAgICAgMTMyLFxuICAgICAgMTM2LFxuICAgICAgODksXG4gICAgICAyMjgsXG4gICAgICAyMCxcbiAgICAgIDIxNCxcbiAgICAgIDE4LFxuICAgICAgMTE2LFxuICAgICAgNixcbiAgICAgIDI1MCxcbiAgICAgIDE1OCxcbiAgICAgIDMyLFxuICAgICAgMTYxLFxuICAgICAgMTQ1XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIwOSxcbiAgICAgIDExOSxcbiAgICAgIDE2NixcbiAgICAgIDI0OSxcbiAgICAgIDk1LFxuICAgICAgMjMwLFxuICAgICAgNDYsXG4gICAgICAxMDUsXG4gICAgICAxODcsXG4gICAgICAxOTEsXG4gICAgICAxNTksXG4gICAgICAyNixcbiAgICAgIDE2NSxcbiAgICAgIDQsXG4gICAgICAxMzQsXG4gICAgICAyMzYsXG4gICAgICA4MixcbiAgICAgIDE0NSxcbiAgICAgIDIxLFxuICAgICAgMTY5XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIk1FTUFWN1FRXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI0MDc3MTM0OTM2NDoxQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIyNzc3ODU5ODU2OTE3MTM6MUBsaWRcIixcbiAgICBcIm5hbWVcIjogXCJJYW5pcyBEcmFnb2lcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNMaTVzb2dERUt2bjdyUUdHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcImJxd0hja0Z1Uk1HTFUxNUp3WUVPNDRiZmNNUjk0RWRYcWxaK0lnTXhIVjQ9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiODVKRkg3SmtzdU44d2JsdkpqczA1YmpBL1g3bEVxSEhOSnIwMThyemdYdW80Q3l4NW5aK2NpU0FkL0lnTHd2MUdZcDBub1VjTHFqT3N3c2hwMlNPQ1E9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiWmdMaldwYkFBRSt4Njd0WUtnM1gwNXBqZGxHMURWRDhBYkQvcnBxTGVDeDQ3bUQ0Tkt1dXVkZXBtK3QvNU5sRlpYMVdqT3hYYlhRaGt3dmlUcm9yamc9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiNDA3NzEzNDkzNjQ6MUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgNyxcbiAgICAgICAgICAxMTQsXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgODMsXG4gICAgICAgICAgOTQsXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgMTkzLFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICAxNCxcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDIyMyxcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgODcsXG4gICAgICAgICAgMTcwLFxuICAgICAgICAgIDg2LFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICAzNCxcbiAgICAgICAgICAzLFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDI5LFxuICAgICAgICAgIDk0XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjE0ODAxMTEsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFHR2RcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUdHZC5qc29uIjogIntcImtleURhdGFcIjpcIi8vNVlIMnVObkZDaVVzOTF5UytqTFJ1akNBM3o0YzBuVWhySjdqMGxEaXM9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6ODIyOTEwMTM2LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MjE0ODAxMTE5MThcIn0iCn0="  // PUT your SESSION_ID 


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
