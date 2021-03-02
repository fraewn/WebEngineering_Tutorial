// source: https://expressjs.com/de/starter/hello-world.html
const express = require('express')
const app = express()
const port = 3000

// html is in 'public/index.html'
// java script code from merging task is in in 'public/app.js', referenced by the html code
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.set("Content-Type", 'text/html');
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})






