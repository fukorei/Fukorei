const mongoose = require('mongoose');

const remindschema = mongoose.Schema({
    userId:{
        type: String,
        required: true
    }, 
    guildId:{
        type: String,
        required: true,
    },
    remindreason:{
        type: String,
        default: null,
    }, 
    remindtime:{
        type: String,
        required: true,
    },
    currenttime:{
        type: String,
        required: true,
    }
})

module.exports = mongoose.model("remind", remindschema)