

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/betsy-blog', { useNewUrlParser: true });
const Schema = mongoose.Schema;
const Comment = require('../models/comment');
const Post = require('../models/post');

module.exports = function (app) {

    // app.post('/posts/comments', (req, res) => {
    //     console.log(req.body)
    //     Comment.create(req.body).then(comment => {
    //
    //         res.status(200).send({
    //             comment: comment
    //         });
    //     }).catch((err) => {
    //         res.status(400).send({
    //             err: err
    //         })
    //     })
    // });

    app.post('/posts/:postId/comments', (req, res) => {
        console.log("req:", req.body);
        Comment.create(req.body).then(comment => {
            comment.save();
            Post.findById(req.params.postId).then((post) => {
                post.comments.unshift(comment);
                post.save();
                res.redirect(`/posts/${post._id}`);
            })
            // res.render(`/posts/${comment.postId}`);
            console.log("inside comment send");
        }).catch((err) => {
            console.log(err.message);
        });
    });

    //     app.post('/posts/:postId/comments', (req, res) => {
    // console.log(res)
    // console.log(req)
    //     res.send(req.body)
    //
    // })
    app.delete('/posts/comments/:id', function (req, res) {
        Comment.findByIdAndRemove(req.params.id).then((comment) => {
            res.status(200).send(comment);
        }).catch((err) => {
            console.log(err.message);
            res.status(400).send(err)
        })
    });

}
