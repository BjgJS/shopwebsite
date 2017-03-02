var mongoose = require('mongoose');
var bcrypt = require('bcrypt-nodejs')
var UserSchema = new mongoose.Schema({
    username: {
        type: String, lowercase: true, unique: true
    },
    email: {
        type: String, lowercase: true, unique: true
    },
    password: String,
}, { timestamps: true});

UserSchema.methods.validPassword = (password) = {

};
