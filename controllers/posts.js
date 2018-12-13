const post = require('../models/post')

module.exports = function(app) {

    app.get('/', (req, res) => {
        post.find()
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
        post.findById(req.params.id).then((post) => {
            res.render('posts-show', { post: post })
        }).catch((err) => {
            console.log(err.message);
        })
    });

    app.post('/posts', (req, res) => {
        post.create(req.body).then((post) => {
            console.log(post);
            res.redirect(`/posts/${post._id}`);
        }).catch((err) =>{
            console.log(err.message);
        })
    })

    app.get('/posts/:id/edit', (req, res) => {
        post.findById(req.params.id, function(err, post) {
            res.render('posts-edit', {post: post});
        })
    })

    app.put('/posts/:id', (req, res) => {
      post.findByIdAndUpdate(req.params.id, req.body)
        .then(post => {
          res.redirect(`/posts/${post._id}`)
        })
        .catch(err => {
          console.log(err.message)
        })
    })

    app.delete('/posts/:id', function (req, res) {
      console.log("DELETE post")
      post.findByIdAndRemove(req.params.id).then((post) => {
        res.redirect('/');
      }).catch((err) => {
        console.log(err.message);
      })
    })
}
