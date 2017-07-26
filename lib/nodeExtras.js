const fs = require('fs');
const path = require('path');

var InspectionError = require('./inspectionError');

function getFileType(file) {
  let stat;

  try {
    stat = fs.lstatSync(file);

    if (stat.isFile()) {
      return 'file';
    }

    if (stat.isDirectory()) {
      return 'directory';
    }

    if (stat.isBlockDevice()) {
      return 'blockdevice';
    }

    if (stat.isCharacterDevice()) {
      return 'characterdevice';
    }

    if (stat.isSymbolicLink()) {
      return 'symboliclink';
    }

    if (stat.isFIFO()) {
      return 'fifo';
    }

    if (stat.isSocket()) {
      return 'socket';
    }

  } catch (err) {
    return false;
  }
}

module.exports = (Inspect) => {

  /**
   * Inspects whether a file exists
   *
   * @method doesFileExists
   * @version v1.6.0
   *
   * @param {string} file File path
   * @param  {string} [message] Custom error message
   *
   * @example {js}
   * inspect('/tmp/test.json').doesFileExists();
   *
   * @chainable
   * @returns {object} Returns `this` value
   */
  Inspect.prototype.doesFileExists = function(message) {
    const modulePath = path.resolve(path.dirname(module.parent.parent.filename), this.inspectValue)
    try {
      fs.accessSync(modulePath)
    } catch (err) {
      throw new InspectionError('File ' + this.inspectValue + ' does not exists! (Resolved path: ' + modulePath + ')');
    }

    return this;
  }

  /**
   * Inspects whether a file not exists
   *
   * @method doesNotFileExists
   * @version v1.6.0
   *
   * @param {string} file File path
   * @param  {string} [message] Custom error message
   *
   * @example {js}
   * inspect('/tmp/test.json').doesNotFileExists();
   *
   * @chainable
   * @returns {object} Returns `this` value
   */
  Inspect.prototype.doesNotFileExists = function(message) {
    let exists = false;
    const modulePath = path.resolve(path.dirname(module.parent.parent.filename), this.inspectValue)

    try {
      fs.accessSync(modulePath)
      exists = true;
    } catch (err) {
      // do nothing here
    }

    if (exists) {
      throw new InspectionError('File ' + this.inspectValue + ' exists, but it should not exists!');
    }

    return this;
  }

  /**
   * Inspects whether a file exists and it is a file
   *
   * @method isFile
   * @version v1.6.0
   *
   * @param {string} file File path
   * @param  {string} [message] Custom error message
   *
   * @example {js}
   * inspect('/tmp/test.json').isFile();
   *
   * @chainable
   * @returns {object} Returns `this` value
   */
  Inspect.prototype.isFile = function(message) {
    const modulePath = path.resolve(path.dirname(module.parent.parent.filename), this.inspectValue)
    const fileType = getFileType(modulePath);

    if (!fileType) {
      throw new InspectionError('File ' + this.inspectValue + ' does not exists!(Resolved path: ' + modulePath + ')');
    }

    if (fileType !== 'file') {
      throw new InspectionError('File ' + this.inspectValue + ' is not a file!', fileType, 'file');
    }

    return this;
  }

  /**
   * Inspects whether a file does not exists or it is not a file
   *
   * @method isNotFile
   * @version v1.6.0
   *
   * @param {string} file File path
   * @param  {string} [message] Custom error message
   *
   * @example {js}
   * inspect('/tmp/test.json').isNotFile();
   *
   * @chainable
   * @returns {object} Returns `this` value
   */
  Inspect.prototype.isNotFile = function(message) {
    const modulePath = path.resolve(path.dirname(module.parent.parent.filename), this.inspectValue)
    const fileType = getFileType(modulePath);

    if (!fileType) {
      return this
    }

    if (fileType === 'file') {
      throw new InspectionError('File ' + this.inspectValue + ' is not a file!', fileType, 'file');
    }

    return this;
  }

  /**
   * Inspects whether a file exists and it is a directory
   *
   * @method isDirectory
   * @version v1.6.0
   *
   * @param {string} file File path
   * @param  {string} [message] Custom error message
   *
   * @example {js}
   * inspect('/tmp/test.json').isDirectory();
   *
   * @chainable
   * @returns {object} Returns `this` value
   */
  Inspect.prototype.isDirectory = function(message) {
    const modulePath = path.resolve(path.dirname(module.parent.parent.filename), this.inspectValue)
    const fileType = getFileType(modulePath);

    if (!fileType) {
      throw new InspectionError('Dir ' + this.inspectValue + ' does not exists! (Resolved path: ' + modulePath + ')');
    }

    if (fileType !== 'directory') {
      throw new InspectionError('Dir ' + this.inspectValue + ' is not a directory!', fileType, 'directory');
    }

    return this;
  }

  /**
   * Inspects whether a file/dir does not exists or it is not a directory
   *
   * @method isNotDirectory
   * @version v1.6.0
   *
   * @param {string} file File path
   * @param  {string} [message] Custom error message
   *
   * @example {js}
   * inspect('/tmp/test.json').isNotDirectory();
   *
   * @chainable
   * @returns {object} Returns `this` value
   */
  Inspect.prototype.isNotDirectory = function(message) {
    const modulePath = path.resolve(path.dirname(module.parent.parent.filename), this.inspectValue)
    const fileType = getFileType(modulePath);

    if (!fileType) {
      return this;
    }

    if (fileType === 'directory') {
      throw new InspectionError('File ' + this.inspectValue + ' is not a directory!', fileType, 'directory');
    }

    return this;
  }
}
