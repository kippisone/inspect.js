'use strict';

var utils = require('./inspectUtils');

var InspectMatch = function(types) {
    this.test = function(val) {
        return utils.isAny(val, types);
    };
};

var inspectMatchers = {
    objType: new InspectMatch('obj-type')
};

module.exports = inspectMatchers;
