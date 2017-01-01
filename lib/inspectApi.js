'use strict';

let superagent = require('superagent');

let APITest = require('./apiTest');

module.exports = function(Inspect) {
  class APIInspect {
    constructor() {

    }

    request(method, url) {
      this.req = superagent[method](url);
      return new Promise(function(resolve, reject) {

      });
    }

    test(cb) {
      this.req.end((err, res) => {
        cb(new APITest())
      });
    }
  }

  Inspect.get = function(url) {
    var apiInspect = new APIInspect();
    return apiInspect.request('get', url);
  }

}
