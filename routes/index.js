var express = require('express');
var router = express.Router();
var req_module = require('./request_modules');
var request = require('request');
var url = require('url');
const qs = require('querystring');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
  var _url = req.url;
  console.log(_url);
});

/* GET home page. */
router.get('/todo', function(req, res, next) {
  const requestToken = req.query.code;
  request.get(req_module.req_get(), async function (error, response, body) {
    if (error) {
      console.log(error);
    }
    var req_data;
    await console.log(qs.parse(body));
    await console.log(request)
    // {
    //   req_data = qs.parse(body);
    //   console.log(req_data);
    // }

    res.end(body);
    var _url = req.url;
    // console.log(_url);
  })
  // console.log(requestToken);
  // var s_html = '<html>';
  //   s_html += '<head></head>';
  //   s_html += '<body>';
  //   s_html += '<a href="https://auth.worksmobile.com/ba/kr1HVyrVZghvj/service/authorize?client_id=rPWfGZv9iELcTSY_PtAi&redirect_uri=https://sg-attend-hnnwp.run.goorm.io&state=123asda2e&domain=smithground.com">로그인</a>';
  //   s_html += "</body>";
  //   s_html += "</html>";
  //   res.send(s_html);
  //   console.log(req.query);
  // res.render('todo', {title: 'smithground'})
});

module.exports = router;
