var express = require('express');
var router = express.Router();
var req_module = require('./request_modules');
var request = require('request');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* GET home page. */
router.get('/todo', function(req, res, next) {
  request.get(req_module.req_get(), function (error, response, body) {
    if (error) {
      console.error(error);
    } else {
      console.log('--body--');
      console.log(body);
      res.render('todo', {title: 'smithground'})
    }
  })
  // res.render('todo', {title: 'smithground'})
});

module.exports = router;
