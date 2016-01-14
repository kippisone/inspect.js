'use strict';

var inspectUtils = {};

/**
 * Checks whether `a` is an instance of `b`
 *
 * @private
 * @method geInstanceOf
 *
 * @param {object} a Instance
 * @param {object} b Prototype
 *
 * @returns {boolean} Returns true is a is an instance of b
 */
inspectUtils.isInstanceOf = function isInstanceOf(a, b) {
    return a instanceof b;
};

inspectUtils.isObject = function isObject(obj) {
    return (typeof obj === 'object' && obj !== null && !Array.isArray(obj));
};

inspectUtils.isArray = function isObject(obj) {
    return (typeof obj === 'object' && obj !== null && Array.isArray(obj));
};

inspectUtils.isNull = function isObject(obj) {
    return obj === null;
};

inspectUtils.isUndefined = function isObject(obj) {
    return obj === undefined;
};

/**
 * Gets the type of `a`
 *
 * @method getTypeOf
 * @param  {any}  a  Input value
 */
inspectUtils.getTypeOf = function(a) {
    var type = typeof(a);

    if (type === 'object') {
        if (Array.isArray(a)) {
            return 'array';
        }

        if (a === null) {
            return 'null';
        }

        if (a instanceof RegExp) {
            return 'regexp';
        }

        return 'object';
    }

    return type;
};

module.exports = inspectUtils;
