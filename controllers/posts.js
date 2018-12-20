const Post = require('../models/post');
const Comment = require('../models/comment');

module.exports = function(app) {

    app.get('/', (req, res) => {
        Post.find()
            .then(posts => {
                res.render('posts-index', {
                    posts: posts
                });
            })
            .catch(err => {
                console.log(err);
            })
    })

    app.get('/posts/new', (req, res) => {
        res.render('posts-new', {});
    })

    app.get('/posts/:id', (req, res) => {
        Post.findById(req.params.id)
        .populate('comments')
        .then((post) => {
            // Comment.find( {postId : req.params.id} ).then((comment) => {
            //     console.log("comment:", comment);
            // })
            res.render('posts-show', { post: post })
        }).catch((err) => {
            console.log(err.message);
        })
    });

    app.post('/posts', (req, res) => {
        console.log("req.body:", req.body);
        Post.create(req.body).then((post) => {
            console.log(post);
            res.redirect(`/posts/${post._id}`);
        }).catch((err) =>{
            console.log(err.message);
        })
    })

    app.get('/posts/:id/edit', (req, res) => {
        Post.findById(req.params.id, function(err, post) {
            res.render('posts-edit', {post: post});
        })
    })

    app.put('/posts/:id', (req, res) => {
      Post.findByIdAndUpdate(req.params.id, req.body)
        .then(post => {
          res.redirect(`/posts/${post._id}`)
        })
        .catch(err => {
          console.log(err.message)
        })
    })

    app.delete('/posts/:id', function (req, res) {
      console.log("DELETE post")
      Post.findByIdAndRemove(req.params.id).then((post) => {
        res.redirect('/');
      }).catch((err) => {
        console.log(err.message);
      })
    })
}
