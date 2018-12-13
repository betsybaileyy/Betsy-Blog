const chai = require('chai');
const chaiHttp = require('chai-http');
//const app = require('../app');
const should = chai.should();
//const post = require('../models/post');

module.exports = function(app) {
chai.use(chaiHttp);

describe('posts', ()  => {

  // TEST INDEX
  it('should index ALL posts on / GET', (done) => {
    chai.request(server)
        .get('/')
        .end((err, res) => {
          res.should.have.status(200);
          res.should.be.html;
          done();
        });
  });
  // test-posts.js
    // TEST NEW
    it('should display new form on /posts/new GET', (done) => {
      chai.request(server)
        .get(`/posts/new`)
          .end((err, res) => {
            res.should.have.status(200);
            res.should.be.html
            done();
          });
    })
    // TEST SHOW
it('should show a SINGLE post on /posts/<id> GET', (done) => {
  var post = new post(samplepost);
  post.save((err, data) => {
    chai.request(server)
      .get(`/posts/${data._id}`)
      .end((err, res) => {
        res.should.have.status(200);
        res.should.be.html
        done();
      });
  });
});
  // TEST NEW
  // TEST CREATE
  // TEST SHOW
  // TEST EDIT
  // TEST UPDATE
  // TEST DELETE
});

}
