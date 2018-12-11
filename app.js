// movie = subject, review = post
// left off in tutorial at part about body parser
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
var exphbs = require('express-handlebars');

app.use(bodyParser.urlencoded({ extended: true }));

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/betsy-blog', { useNewUrlParser: true });

const Post = mongoose.model('Post', {
    title: String, // title of the post itsself
    subjectTitle: String //like subject of tv, dogs, etc
});

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

app.get('/posts/new', (req, res) => {
    res.render('posts-new', {});
});

app.post('/posts', (req, res) => {
    Post.create(req.body).then((review) => {
        console.log(review);
        res.redirect('/');
    }).catch((err) => {
        console.log(err.message);
    })
    // console.log(req.body);
    // res.render('posts-new', {});
});

app.listen(3000, () => {
    console.log('App listening on port 3000 :)')
});
