const express = require('express');
const config  = require('./config')

const app = express();

app.get('/',(req,res) =>{
    res.send("ok")
})

app.listen(config.web.port,()=>{
    console.log(`Listen on port ${config.web.port}`)
})