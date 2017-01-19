// Auto reloading express based HTTP (web) server,
// Copied straight from https://www.npmjs.com/package/reload

// Run: npm install
// Then: npm install supervisor -g
// Then: supervisor server.js
//
// Go to http://127.0.0.1:3000/

// Now change a file and watch it reload!!

var express = require('express');
var http = require('http');
var path = require('path');
var reload = require('reload');
var bodyParser = require('body-parser');
var logger = require('morgan');

var app = express();

var publicDir = path.join(__dirname, 'public');

app.set('port', process.env.PORT || 3000);
app.use(logger('dev'));
app.use(bodyParser.json()); //parses json, multi-part (file), url-encoded

app.get('/', function (req, res) {
    res.sendFile(path.join(publicDir, 'index.html'))
});

app.use('/', express.static(publicDir));

var server = http.createServer(app);

// Reload code here 
reload(server, app);

server.listen(app.get('port'), function () {
    console.log("Web server listening on port " + app.get('port'));
});
