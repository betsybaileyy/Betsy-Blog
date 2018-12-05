// movie = subject, review = post

const express = require('express')
const app = express()
var exphbs = require('express-handlebars');

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/betsy-blog');

const Post = mongoose.model('Review', {
    title: String, // title of the post itsself
    subjectTitle: String //like subject of tv, dogs, etc
})

let posts = [
    { title: "Great Post", subjectTitle: "Dogs" },
    { title: "Awesome Subject", subjectTitle: "Boats"}
]

app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

app.get('/', (req, res) => {
    Post.find()
        .then(posts => {
        res.render('posts-index', { posts: posts })
    })
    .catch(err => {
        console.log(err);
    })
});

app.listen(3000, () => {
    console.log('App listening on port 3000 :)')
});
