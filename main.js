const express = require('express');
const formidable = require('formidable');
const serveIndex = require('serve-index');
const app = express();
const Config = require('./config.json');

const getPage = require('./getPage.js').main;

app.get('/', (req, res) => {
    const data = getPage("home", req);
    res.send(data);
});

app.listen(Config.Server.Port, () => console.log("Website enabled!"));