const express = require('express')
const methodOverride = require('method-override')
const app = express()
var exphbs = require('express-handlebars');
const posts = require('./controllers/posts');
const mongoose = require('mongoose');
const comments = require('./controllers/comments')(app);
const Post = require('./models/post');
const Comment = require('./models/comment');
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/betsy-blog', {useNewUrlParser: true});

const bodyParser = require('body-parser');

app.use(methodOverride('_method'))

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));


app.engine('handlebars', exphbs({
    defaultLayout: 'main'
}));
app.set('view engine', 'handlebars');

require('./controllers/posts')(app);
require('./controllers/comments')(app);

app.listen(process.env.PORT || 3000, () => {
    console.log('App listening on port 3000!')
})

// const port = process.env.PORT || 3000;
// app.listen(port);
module.exports = app;



























// // left off in tutorial at part about body parser
// const express = require('express');
// const app = express();
// const bodyParser = require('body-parser');
// var exphbs = require('express-handlebars');
//
// app.use(bodyParser.urlencoded({ extended: true }));
//
// const mongoose = require('mongoose');
// mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/betsy-blog', { useNewUrlParser: true });
//
// const port = process.env.PORT || 3000;
// app.listen(port);
//
// const Post = mongoose.model('Post', {
//     title: String, // title of the post itsself
//     subjectTitle: String //like subject of tv, dogs, etc
// });
//
// let posts = [
//     { title: "Great Post", subjectTitle: "Dogs" },
//     { title: "Awesome Subject", subjectTitle: "Boats"}
// ]
//
// app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
// app.set('view engine', 'handlebars');
//
// app.get('/', (req, res) => {
//     Post.find()
//         .then(posts => {
//         res.render('posts-index', { posts: posts })
//     })
//     .catch(err => {
//         console.log(err);
//     })
// });
//
// app.get('/posts/new', (req, res) => {
//     res.render('posts-new', {});
// });
//
// app.get('/posts/:id', (req, res) => {
//     Post.findById(req.params.id).then((post) => {
//         res.render('posts-show', { post: post })
//     }).catch((err) => {
//         console.log(err.message);
//     })
// });
//
// app.post('/posts', (req, res) => {
//     Post.create(req.body).then((post) => {
//         console.log(post);
//         res.redirect(`/posts/${post._id}`);
//     }).catch((err) => {
//         console.log(err.message);
//     })
//     // console.log(req.body);
//     // res.render('posts-new', {});
// });
//
// app.listen(3000, () => {
//     console.log('App listening on port 3000 :)')
// });
