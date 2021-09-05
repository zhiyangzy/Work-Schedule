
const mongoose = require('mongoose');
const { homedir } = require('os');

var schema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        require:true,
        unique:true
    },
    workdate:{
        type:String,
        require:true,
        unique:false
    },
    workinghours:{
        type:String,
        require:true,
        unique:false
    },
    hours:{
        type:String,
        require:true,
        unique:false
    },
    location:{
        type:String,
        require:true,
        unique:false
    }
})

const Userdb = mongoose.model('userdb', schema)

module.exports = Userdb