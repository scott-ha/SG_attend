// var request = require('request');

const url = 'https://auth.worksmobile.com/ba/kr1HVyrVZghvj/service/authorize?client_id=rPWfGZv9iELcTSY_PtAi&redirect_uri=https://sg-attend-hnnwp.run.goorm.io/todo&state=123asda2e&domain=smithground.com';
var req_set;

module.exports.req_post = function(rest_url, data) {
  req_set = {
    url: url_xpia + rest_url,
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json;charset=UTF-8"
    },
    form: data
  }
  return req_set
}

module.exports.req_get = function () {
  req_set = {
    uri: url,
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json;charset=UTF-8"
    }
  }
  return req_set
}

module.exports.req_post_test = function (rest_url, data) {
  req_set = {
    url: url_test + rest_url,
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json;charset=UTF-8"
    },
    form: data
  }
  return req_set
}
