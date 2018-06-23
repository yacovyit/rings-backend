'use strict';

var express = require('express');
var config = require('./config');
var db = require('./db');
var bodyParser = require('body-parser');
var cors = require('cors');

var app = express();
//add middleware
app.use(cors());
app.use(bodyParser.json());

app.get('/', function (req, res) {
    res.send("ok");
});
//get user by id
app.post('/signin', function (req, res) {
    var _req$body = req.body,
        username = _req$body.username,
        password = _req$body.password;

    console.log('body : ' + username + ' ' + password);
    var user = db.signin({ username: username, password: password });
    console.log('user : ' + user);
    user ? res.send(user) : res.status(400).send('user not found');
});

app.listen(config.web.port, function () {
    console.log('Listen on port ' + config.web.port);
});