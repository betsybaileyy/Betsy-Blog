const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/betsy-blog', { useNewUrlParser: true });
const Comment = require('./comment');
const Schema = mongoose.Schema;
const Post = mongoose.model('Post', {
    title: String,
    description: String,
    postTitle: String,
    comments: [{ type: Schema.Types.ObjectId, ref: 'Comment' }]
});

module.exports = Post;
