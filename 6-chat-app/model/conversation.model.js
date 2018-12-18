const mongoose = require('mongoose')
const Schema = require('mongoose').Schema

const ConversationSchema = mongoose.Schema({
    from: String,
    to: String,
    message:String
});

module.exports =  mongoose.model("conversation",ConversationSchema)