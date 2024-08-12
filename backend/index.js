const express = require('express');
const app = express();

app.listen(4000, (req,res) => {
    console.log('Server listening at port 4000')
})

app.get('/', (req,res) => {
    res.send("Hello")
})

app.post('/login', (req,res) => {
    res.send("")
})