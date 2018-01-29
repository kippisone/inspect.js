'use strict';

var InputError = function InputError(obj, msg, actual) {
    if (arguments.length >= 3) {
        msg += '\n\nInput value is: ' + obj.toString(actual);
    }

    var err = new Error(msg);

    return err;
};

module.exports.InputError = InputError;
