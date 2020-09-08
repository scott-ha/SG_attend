var express = require('express');
var router = express.Router();
var req_module = require('./request_modules');
var request = require('request');
var parse = require('url-parse');
// const qs = require('query-string');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
  // 서비스 API Authorization Code 발급
  var _url = req.url;
  console.log('---here---');
  var parsedData = parse(_url, true)
  console.log(parsedData.query);
  console.log(parsedData.query.code);
});

/* GET home page. */
router.get('/todo', function(req, res, next) {
  const requestToken = req.query.code;
  request.get(req_module.req_get(), function (error, response, body) {
    if (error) {
      console.log(error);
    }
    res.end(body);
  })
});

module.exports = router;
