// movie = subject, review = post


const express = require('express')
const app = express()
var exphbs = require('express-handlebars');

let posts = [
    { title: "Great Post", subjectTitle: "Dogs" },
    { title: "Awesome Subject", subjectTitle: "Boats"}
]

app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

app.get('/', (req, res) => {
    res.render('posts-index', { posts: posts });
});

app.listen(3000, () => {
    console.log('App listening on port 3000 :)')
});
