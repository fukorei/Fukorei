const mongoose = require('mongoose');

const afkschema = mongoose.Schema({
    userId:{
        type: String,
        required: true
    }, 
    guildId:{
        type: String,
        required: true,
    },
    afk:{
        type: Boolean,
        default: false,
    },
    afkreason:{
        type: String,
        default: null,
    }, 
    nickbefore:{
        type: String,
        required: true,
    }
})

module.exports = mongoose.model("afk", afkschema)