const mongoose = require('mongoose');

const post = mongoose.model('post', {
    title: String,
    description: String,
    postTitle: String
});

module.exports = post
