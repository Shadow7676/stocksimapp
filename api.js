const express = require('express');
const app = express();
const Config = require('./config.json');

app.post('/getSymbolInfo', (req, res) => {
    //GetSymbolInfo
});

if(Config.Server.API.Enabled == true) {
    app.listen(Config.Server.API.Port, () => console.log("Website enabled!"));
} else {
    console.error("API Disabled!");
    process.exit();
}
