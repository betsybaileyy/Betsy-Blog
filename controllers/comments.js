module.exports = (app) => {

  // NEW Comment
  app.post('/posts/comments', (req, res) => {
    res.send('posts comment')
  })

}
