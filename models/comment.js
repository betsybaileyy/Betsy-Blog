const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/betsy-blog', { useNewUrlParser: true });
const Schema = mongoose.Schema;

const Comment = mongoose.model('Comment', {
    title: String,
    content: String
});

module.exports = Comment;
