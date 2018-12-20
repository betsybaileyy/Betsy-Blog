const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/betsy-blog', { useNewUrlParser: true });
const Comment = require('./comment');

const Post = mongoose.model('Post', {
    title: String,
    description: String,
    postTitle: String
});

module.exports = Post;
