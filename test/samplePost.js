const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../server');
const should = chai.should();
const post = require('../models/post');

const samplepost =     {
    "title": "Super Sweet post",
    "post-title": "La La Land",
    "description": "A great post of a lovely movie."
}
