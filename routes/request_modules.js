var request = require('request');

// Xpia Server
const url_xpia = 'http://xiplug.keico.co.kr/';
// Test Server
const url_test = 'http://210.102.181.156:40006/';
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

module.exports.req_get = function (rest_url) {
  req_set = {
    url: url_xpia + rest_url,
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
