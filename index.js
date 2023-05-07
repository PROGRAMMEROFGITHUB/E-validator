const emailvalidator = require('email-validator')

const express = require('express')

const app = express()

app.get('/', (req,res) => {
    res.sendfile(__dirname + '/index.html')
})

app.listen(4000,() => {
    console.log("App is listening on Port 4000")
})