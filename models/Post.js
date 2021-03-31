const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const postSchema = new Schema({
    title: String,
    content: String,
    dateCreated: { type: Date, default: Date.now },
    author: String
    // how would comments be implemented?
});

var Post = mongoose.model('Post', postSchema);

module.exports = Post;