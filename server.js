var express = require('express');
var app = express();
// app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static('public'))
var port = 8000;
app.listen(port);
console.log('server on ' + port);