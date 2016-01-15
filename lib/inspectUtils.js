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

inspectUtils.isPromise = function(a) {
    if (typeof a === 'object') {
        if (typeof a.then === 'function' && typeof a.catch === 'function') {
            return true;
        }
    }

    return false;
};

inspectUtils.isEmpty = function(a) {
    var type = utils.getTypeOf(a);
    
    if (type === 'string' && a === '') {
        return true;
    }
    
    if (type === 'array' && a.length === 0) {
        return true;
    }
    
    if (type === 'object' && Object.keys(a).length === 0) {
        return true;
    }

    return false;
};

inspectUtils.hasKeys = function(a, keys) {
    return keys.every(function(k) {
       return k in a; 
    });
};

inspectUtils.hasAnyKeys = function(a, keys) {
    return keys.any(function(k) {
       return k in a; 
    });
};

inspectUtils.hasValues = function(a, values) {
    return values.every(function(v) {
       return a.indexOf(v) !== -1;
    });
};

inspectUtils.hasAnyValues = function(a, values) {
    return values.any(function(v) {
       return a.indexOf(v) !== -1; 
    });
};

module.exports = inspectUtils;
