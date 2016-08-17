'use strict';

module.exports = function(Inspect, sinon) {

    Object.keys(sinon.assert).forEach(function(fn) {
        var prefix = 'was';
        if (fn === 'callCount') {
            prefix = 'has';
        }

        var funcName = prefix + fn.substr(0, 1).toUpperCase() + fn.substr(1);
        Inspect.prototype[funcName] = function() {
            var args = Array.prototype.slice.call(arguments);
            args.unshift(this.inspectValue);
            sinon.assert[fn].apply(sinon.assert[fn], args);
        }
    });
};
