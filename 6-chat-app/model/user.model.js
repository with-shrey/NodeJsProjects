const mongoose = require('mongoose')
const Schema = require('mongoose').Schema

const UserSchema = mongoose.Schema({
    username: String
});

module.exports =  mongoose.model("user",UserSchema)