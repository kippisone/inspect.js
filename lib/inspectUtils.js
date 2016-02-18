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
inspectUtils.getTypeOf = function(a, realType) {
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

    if (type === 'function') {
        if (Object.getPrototypeOf(a) === Object.getPrototypeOf(function* () { yield;})) {
            return 'generator';
        }

        var match = /class|function/.exec(a.toString());
        if (match[0] === 'class') {
            return 'class';
        }

        return 'function';
    }

    if (type === 'number') {
        if (isNaN(a)) {
            return 'NaN';
        }
    }

    return type;
};

inspectUtils.isPromise = function(a) {
    if (typeof a === 'function' || (typeof a === 'object' && a !== null)) {
        if (typeof a.then === 'function' && typeof a.catch === 'function') {
            return true;
        }
    }

    return false;
};

inspectUtils.isEmpty = function(a) {
    var type = this.getTypeOf(a);
    
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
    var objKeys = Object.keys(a);
    return keys.every(function(k) {
       return objKeys.indexOf(k) !== -1;
    });
};

inspectUtils.hasAnyKeys = function(a, keys) {
    var objKeys = Object.keys(a);
    return keys.some(function(k) {
       return objKeys.indexOf(k) !== -1;
    });
};

inspectUtils.hasValues = function(a, values) {
    return values.every(function(left) {
        left = this.makeComparable(left);
        return a.some(function(right) {
            right = this.makeComparable(right);
            return left === right;
        }, this);
    }, this);
};

inspectUtils.hasAnyValues = function(a, values) {
    return values.some(function(left) {
        left = this.makeComparable(left);
        return a.some(function(right) {
            right = this.makeComparable(right);
            return left === right;
        }, this);
    }, this);
};

inspectUtils.hasSubset = function(a, b) {
    var index;
    for (var i = 0, len = a.length; i < len; i++) {
        if (this.compareValues(a[i], b[0])) {
            index = i;
            break;
        } 
    }

    if (index === undefined) {
        return false;
    }

    for (i = 0, len = b.length; i < len; i++) {
        if (this.makeComparable(a[index + i]) !== this.makeComparable(b[i])) {
            return false;
        } 
    }
    
    return true;
};

inspectUtils.isAny = function(a, types) {
    var type = this.getTypeOf(a);

    if (types === 'any') {
        return true;
    }

    if (typeof types === 'string') {
        types = types.split(',').map(function(t) {
            return t.replace(/^\s+|\s+$/g, '');
        });
    }

    types.forEach(function(t) {
        if (t === 'obj-types') {
            types.push('object', 'array', 'regexp', 'function', 'generator', 'class');
        }
        else if (t === 'func-types') {
            types.push('function', 'generator');
        }
        else if (t === 'data-types') {
            types.push('object', 'array');
        }
    });

    if (types.indexOf(type) !== -1) {
        return true;
    }

    if (type === 'object' && this.isPromise(a)) {
        return true;
    }

    if (type === 'boolean') {
        if (a && types.indexOf('true') !== -1) {
            return true;
        }

        if (!a && types.indexOf('false') !== -1) {
            return true;
        }
    }

    return false;
};

inspectUtils.hasProps = function(a, b) {
    for (var key in b) {
        var subRes;

        if (a === undefined && b !== undefined) {
            return false;
        }

        var typeLeft = this.getTypeOf(a);
        var typeRight = this.getTypeOf(b);

        if (typeLeft !== typeRight) {
            return false;
        }

        if (b.hasOwnProperty(key)) {
            var prop = b[key];
            if (!(key in a)) {
                return false;
            }

            if (this.isObject(prop)) {
                subRes = this.hasProps(a[key], prop);
                if (subRes === false) {
                    return false;
                }

                continue;
            }

            if (this.isArray(prop)) {
                var len = prop.length;
                for (var i = 0; i < len; i++) {
                    var itemA = a[i];
                    var itemB = b[i];
                    
                    if (itemA === undefined && itemB !== undefined) {
                        return false;
                    }

                    typeLeft = this.getTypeOf(itemA);
                    typeRight = this.getTypeOf(itemB);

                    if (typeLeft !== typeRight) {
                        return false;
                    }

                    if (this.isObject(itemB)) {
                        subRes = this.hasProps(itemA, itemB);
                        if (subRes === false) {
                            return false;
                        }

                        continue;
                    }

                    if (itemA !== itemB) {
                        return false;
                    }

                    return this.compareValues(itemA, itemB);
                }
                if (subRes === false) {
                    return false;
                }

                continue;   
            }

            if (a[key] !== prop) {
                return false;
            }
        }
    }

    return true;
};

inspectUtils.hasDeepKey = function(a, key) {
    key = key.split('.');
    for (var i = 0, len = key.length; i < len; i++) {
        a = a[key[i]];
        if (!a) {
            return false;
        }
    }

    return true;
};

inspectUtils.hasDeepProp = function(a, key, val) {
    var obj = this.undotify(a, key);
    if (obj) {
        return this.compareValues(obj, val);
    }
    else {
        return false;
    }
};

inspectUtils.compareValues = function(a, b) {
    var typeA = this.getTypeOf(a);
    var typeB = this.getTypeOf(b);

    if (typeA !== typeB) {
        return false;
    }

    if (typeA === 'regexp') {
        return a.toString() === b.toString();
    }

    if (typeof a === 'object') {
        return this.compareObjects(a, b);
    }

    return a === b;
};

inspectUtils.compareArrays = function(a, b) {
    var len = Math.max(a.length, b.length);
    for (var i = 0; i < len; i++) {
        var itemA = a[i];
        var itemB = b[i];

        return this.compareValues(itemA, itemB);
    }

    return true;
};

inspectUtils.compareObjects = function(a, b) {
    if (a === b) {
        return true;
    }

    var typeA = this.getTypeOf(a);
    var typeB = this.getTypeOf(b);

    if (typeA !== typeB) {
        return false;
    }

    if (typeof a === 'function' ||
        a instanceof RegExp ||
        a instanceof Date) {
        return a.toString() === b.toString();
    }

    var keys = Object.keys(a).concat(Object.keys(b)).filter(function(val, index, arr) {
        return arr.indexOf(val) === index;
    });

    for (var i = 0, len = keys.length; i < len; i++) {
        var prop = keys[i]; 
        if (!(prop in b)) {
            return false;
        }

        if (!this.compareValues(a[prop], b[prop])) {
            return false;
        }            
    }

    return true;
};

inspectUtils.undotify = function(obj, path) {
    if (path) {
        path = path.split('.');
        for (var i = 0, len = path.length; i < len; i++) {
            obj = obj[path[i]];
            if (!obj) {
                return;
            }
        }
    }

    return obj;
};

inspectUtils.makeComparable = function(val) {
    var type = this.getTypeOf(val);

    if (type === 'regexp') {
        return val.toString();
    }

    if (typeof val === 'object') {
        return JSON.stringify(val);
    }

    return val;
};

inspectUtils.clone = function(obj) {
    return JSON.parse(JSON.stringify(obj));
};

module.exports = inspectUtils;
