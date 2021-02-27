const express = require('express')
const app = express()
const port = 3000
const cors = require('cors')
path = require('path')

express.static.mime.types['wasm'] = "application/wasm";

app.get('/', cors(), (req, res) => {
    res.sendFile(path.join(__dirname + "/index.html"));
})

app.listen(port, () => {
    console.log(`Cors-enabled example app listening at http://localhost:${port}`)
})



