const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const postSchema = new Schema({
    title: String,
    content: String,
    dateCreated: Date.now,
    postedBy: {type: mongoose.Schema.Types.ObjectId, ref: 'User'}
});

var Post = mongoose.model('Post', postSchema);

module.exports = Post;