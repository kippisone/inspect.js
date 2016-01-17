'use strict';

var jsdiff = require('diff');
var clc = require('cli-color');
var utils = require('./inspectUtils');

/**
 * Creates an inspection error.
 * @method InspectionError
 * @param  {object}        obj The throwing InspectionObject
 * @param  {string}        msg Error message
 *
 * @returns {object} Returns an error object
 */
var InspectionError = function InspectionError(obj, msg, actual, expected) {
    var err = new Error(msg);

    if (arguments.length === 4) {
      err.expected = expected;
      err.actual = actual;
    }

    return err;
};

var InputError = function InputError(obj, msg, actual) {
    if (arguments.length >= 3) {
        msg += '\n\nInput value is: ' + obj.toString(actual);
    }

    var err = new Error(msg);

    return err;
};

/**
 * Creates an comparison error.
 * @method ComparisonError
 * @param  {object}        obj The throwing InspectionObject
 * @param  {string}        msg Error message
 *
 * @returns {object} Returns an error object
 */
var ComparisonError = function ComparisonError(obj, msg, actual, expected) {

    var diff = [];
    var colorLeft = clc.whiteBright.bgBlue;
    var colorRight = clc.whiteBright.bgRed;
    
    var str = '';

    if (typeof actual === 'object') {
        actual = utils.makeComparable(actual);
    }

    if (typeof expected === 'object') {
        expected = utils.makeComparable(expected);
    }

    if (typeof actual === 'string') {
        actual = actual.replace(/\n/g, '↵');
    }

    if (typeof expected === 'string') {
        expected = expected.replace(/\n/g, '↵');
    }

    if (typeof actual === 'string' && typeof expected === 'string') {
        str = colorLeft('current string') + ' ' + colorRight('expected string') + '\n\n';
        diff = jsdiff.diffLines(actual, expected);
    }

    diff.forEach(function(line) {
        var color = line.added ? colorRight :
            line.removed ? colorLeft : clc.whiteBright;

        str += line.value.split('\n').map(function(l) {
            return color(l) + '\n';
        }).join('\n');
    });

    var err = new Error(msg + '\n\n' + str);

    if (arguments.length === 4) {
      err.expected = expected;
      err.actual = actual;
    }

    return err;
};

module.exports.InspectionError = InspectionError;
module.exports.ComparisonError = ComparisonError;
module.exports.InputError = InputError;
