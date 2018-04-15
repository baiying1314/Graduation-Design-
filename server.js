var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');

const router = require('./route');

var app = express();

app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(cookieParser());


app.use(express.static(__dirname + '/public'));

app.use('/',router);

app.use('*', function (req, res) {
    res.sendFile(path.resolve('./public/index.html'));
});


app.listen(3000, function () {
    console.log('server started at http://localhost:3000'); // eslint-disable-line no-console
});

// module.exports = app;