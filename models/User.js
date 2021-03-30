const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    username: String,
    fname: String,
    lname: String
});

var User = mongoose.model('User', userSchema);

module.exports = User;