'use strict';
const express = require('express');
const config  = require('./config')
const db = require('./db');
const bodyParser = require('body-parser');
const cors = require('cors');


const app = express();
//add middleware
app.use(cors());
app.use(bodyParser.json());


app.get('/',(req,res) =>{
    res.send("ok")
})
//get user by id
app.post('/signin',(req,res) =>{
    let {username,password} = req.body; 
    console.log(`body : ${username} ${password}`);
    let user = db.signin({username, password});
    console.log(`user : ${user}`);
    (user) ? res.send(user) : res.status(400).send('user not found'); 
})

app.listen(config.web.port,()=>{
    console.log(`Listen on port ${config.web.port}`)
})