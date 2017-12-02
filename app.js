const express = require('express');
const pictures = require('./cont/pictures.js');
var app = express();


app.use('/static', express.static('static'));
app.use('/pictures', pictures);

console.log("Running express app on port 3000")
app.listen(3000);
