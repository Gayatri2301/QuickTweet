const mongoose = require('mongoose');
const collection = require('./model/data.js');

const express = require('express');
const app = express()

mongoose.connect('mongodb+srv://oneshop982:oneshop982@cluster0.0pezb70.mongodb.net/quicktweet?retryWrites=true&w=majority&appName=Cluster0').then(() => {
    console.log("Connected to mongodb");
}).catch(() => {
    console.log("Error in connecting to mongodb");  
})

app.listen(4000,() => {
    console.log("Server listening at port 4000");
})

app.get('/',(req,res) => {
    res.send("Hello")
})

