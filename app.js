const express = require('express');
const pictures = require('./cont/pictures.js');
var app = express();

app.use('/', express.static('public/static/'));
app.use('/pictures', pictures);

console.log("Running express app on port 3000")
app.listen(3000);
