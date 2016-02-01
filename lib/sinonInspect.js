'use strict';

module.exports = function(Inspect, sinon) {
    Object.keys(sinon.assert).forEach(function(fn) {
        var funcName = 'was' + fn.substr(0, 1).toUpperCase() + fn.substr(1);
        // console.log(funcName);
        Inspect.prototype[funcName] = function() {
            return sinon.assert[fn](this.inspectValue);
        }
    });
};
