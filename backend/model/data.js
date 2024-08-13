const mongoose = require('mongoose');

const data = mongoose.Schema({
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    username:{
        type:String,
        required:true
    },
})

module.exports = mongoose.model('userdata',data);