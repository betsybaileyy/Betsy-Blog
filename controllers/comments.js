//
// const Comment = require('../models/comment.js')
//
// function comments(app) {
//     // new comment
//     app.post('/posts/comments', (req, res) => {
//         // let's build our own jQuery JSON parser because why the fuck not
//         let submittedData = req.body;
//         let parsedData = {};
//         for (var i = 0; i < submittedData.length; i++) {
//             parsedData[submittedData[i]['name']] = submittedData[i]['value'];
//         }
//         Comment.create(parsedData).then(comment => {
//             res.status(200).send({
//                 comment: comment
//             })
//         }).catch((err) => {
//             res.status(400).send({
//                 err: err
//             })
//         })
//     })
//
//     app.delete('posts/comments', (req, res) => {
//         Comment.findByIdAndRemove(req.params.id).then(comment => {
//             res.status(200).send(comment);
//         }).catch((err) => {
//             console.log(err.message);
//             res.status(400).send(err)
//         })
//     })
// }
//
// module.exports = comments;


const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/betsy-blog', { useNewUrlParser: true });
const Schema = mongoose.Schema;
const Comment = require('../models/comment');
// var Post = require('../models/post');

module.exports = function(app) {

    app.post('/posts/comments', (req, res) => {
        Comment.create(req.body).then(comment => {

            res.status(200).send({
                comment: comment
            });
        }).catch((err) => {
            res.status(400).send({
                err: err
            })
        })
    });

    //     app.post('/posts/:postId/comments', (req, res) => {
    // console.log(res)
    // console.log(req)
    //     res.send(req.body)
    //
    // })
    app.delete('/posts/comments/:id', function(req, res) {
        Comment.findByIdAndRemove(req.params.id).then((comment) => {
            res.status(200).send(comment);
        }).catch((err) => {
            console.log(err.message);
            res.status(400).send(err)
        })
    });

}
