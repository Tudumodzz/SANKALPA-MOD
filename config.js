const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID,
ALIVE_IMG: process.env.ALIVE_IMG || "https://images.app.goo.gl/1kWa6Eo1aRi3b26DA",
ALIVE_MSG: process.env.ALIVE_MSG || "Hellow, I am SANKALPA MD.i am Alive now !",
};
