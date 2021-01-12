var path = require('path')
var fs = require('fs')
var express = require('express')
var https = require('https')

var certOptions = {
    key: fs.readFileSync(path.resolve('build/cert/server.key')),
    cert: fs.readFileSync(path.resolve('build/cert/server.crt'))
}

var app = express()

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + '/index.html'));
})

var server = https.createServer(certOptions, app).listen(443)



