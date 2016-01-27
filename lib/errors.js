'use strict';

var jsdiff = require('diff');
var clc = require('cli-color');
var utils = require('./inspectUtils');



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
    var noDiff = true;
    
    var str = '';

    // if (typeof actual === 'object') {
    //     actual = utils.makeComparable(actual);
    // }

    // if (typeof expected === 'object') {
    //     expected = utils.makeComparable(expected);
    // }

    // if (typeof actual === 'string') {
    //     actual = actual.replace(/\n/g, '↵');
    // }

    // if (typeof expected === 'string') {
    //     expected = expected.replace(/\n/g, '↵');
    // }

    // if (typeof actual === 'object' && typeof expected === 'object') {
    //     str = colorLeft('current object') + ' ' + colorRight('expected object') + '\n\n';
    //     diff = jsdiff.diffChars(JSON.stringify(actual, null, '  '), JSON.stringify(expected, null, '  '));

    //     diff.forEach(function(line) {
    //         var color = line.added ? colorRight :
    //             line.removed ? colorLeft : clc.whiteBright;

    //         str += line.value.split('\n').map(function(l) {
    //             return color(l);
    //         }).join('\n');
    //     });

    //     noDiff = true;
    // }

    // if (typeof actual === 'string' && typeof expected === 'string') {
    //     str = colorLeft('current string') + ' ' + colorRight('expected string') + '\n\n';
    //     diff = jsdiff.diffLines(actual, expected);
    // }

    // if (typeof actual === 'number' && typeof expected === 'number') {
    //     str = colorLeft('current number: ' + actual) + ' ' + colorRight('expected number: ' + expected) + '\n\n';
    // }

    // if (!noDiff) {
    //     diff.forEach(function(line) {
    //         var color = line.added ? colorRight :
    //             line.removed ? colorLeft : clc.whiteBright;

    //         str += line.value.split('\n').map(function(l) {
    //             return color(l) + '\n';
    //         }).join('\n');
    //     });
    // }

    var err = new Error(msg + '\n\n' + str);

    if (arguments.length === 4) {
      err.expected = expected;
      err.actual = actual;
    }

    return err;
};

/**
 * Creates an containment error.
 * @method ContainmentError
 * @param  {object}        obj The throwing InspectionObject
 * @param  {string}        msg Error message
 *
 * @returns {object} Returns an error object
 */
var ContainmentError = function ComparisonError(obj, msg, actual, expected) {

    var colorLeft = clc.whiteBright.bgBlue;
    var colorRight = clc.whiteBright.bgRed;
    
    var str = '';
    var inStr = obj.inspectValue;

    if (typeof actual === 'object') {
        if (actual.pos > 0) {
            str += inStr.slice(Math.max(0, actual.pos - 100), actual.pos);
        }

        str += colorRight(inStr.substr(actual.pos, actual.len));
        str += colorLeft(expected);

        if (actual.pos + actual.len < inStr.length) {
            str += inStr.substr(actual.len, 100);
        }

        str = str.replace(/\n/g, '↵\n');
    }

    var err = new Error(msg + '\n\n' +
        colorRight('current string') + ' ' +
        colorLeft('expected string') + '\n\n' + 
        str + '\n\n'
    );

    return err;
};

module.exports.ComparisonError = ComparisonError;
module.exports.InputError = InputError;
module.exports.ContainmentError = ContainmentError;
