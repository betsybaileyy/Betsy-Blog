const Comment = require('../models/comment')

var Post = require('../models/post');
module.exports = (app, Comment) => {

    app.post('/posts/comments', (req, res) => {
        console.log(req.body);
        // let commentNew= new Comment(req.body)
        // console.log(commentNew)
      Comment.create(req.body).then(comment => {
        res.redirect(`/posts/${comment.postId}`);
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
             res.redirect(`/posts/${comment.postId}`);
         }).catch((err) => {
             console.log(err.message);
         })
     });

}
