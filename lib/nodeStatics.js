'use strict'

const path = require('path')
const fs = require('fs')

module.exports = (inspect) => {
  /**
   * Reads a file
   *
   * @method readFile
   * @static
   * @version 1.9.0
   *
   * @param  {string} filepath Filepath
   * @param  {object} opt      Options object
   *
   * @returns {string} Returns the file content as a string
   */
  inspect.readFile = (filepath, opt) => {
    opt = opt || {}
    if (!opt.encoding) opt.encoding = 'utf8'

    try {
      return fs.readFileSync(filepath, opt)
    } catch (err) {
      if (err && !opt.silent) {
        throw err
      }
    }

    return ''
  }

  /**
   * Reads a JSON file
   *
   * @method writeJSON
   * @static
   * @version 1.9.0
   *
   * @param  {string} filepath Filepath
   * @param  {object} opt      Options object
   *
   * @returns {object} Returns read JSON content
   */
  inspect.readJSON = (filepath, opt) => {
    const content = inspect.readFile(filepath, opt)
    return content.length === 0 ? null : JSON.parse(content)
  }

  /**
   * Writes a file
   *
   * @method writeFile
   * @static
   * @version 1.9.0
   *
   * @param  {string} filepath Filepath
   * @param  {object} content  JSON object
   * @param  {object} opt      Options object
   *
   * @returns {boolean} Returns `true` if a file was written and `false` if not.
   */
  inspect.writeFile = (filepath, content, opt) => {
    opt = opt || {}
    try {
      inspect.createDir(path.dirname(filepath), {
        silent: true
      })

      fs.writeFileSync(filepath, content, opt)
      return true
    } catch (err) {
      if (err && !opt.silent) {
        throw err
      }
    }

    return false
  }

  /**
   * Writes a JSON file
   *
   * @method writeJSON
   * @static
   * @version 1.9.0
   *
   * @param  {string} filepath Filepath
   * @param  {object} content  JSON object
   * @param  {object} opt      Options object
   *
   * @returns {boolean} Returns `true` if a file was written and `false` if not.
   */
  inspect.writeJSON = (filepath, content, opt) => {
    opt = opt || {}
    return inspect.writeFile(filepath, JSON.stringify(content, null, opt.indention || '  ', opt))
  }

  /**
   * Create dir
   *
   * @method createDir
   * @static
   *
   * @param {string} dir Dir path
   * @param {object} [opt] Options
   */
  inspect.createDir = (dir, opt) => {
    const dirArray = [dir]
    let curDir = dir

    const beer = 'full'
    while (beer !== 'empty') {
      try {
        fs.accessSync(curDir)
        break
      } catch (err) {
        // do nothing here
      }

      curDir = path.resolve(curDir, '../')
      if (curDir === '/') {
        break
      }

      dirArray.unshift(curDir)
    }

    for (const d of dirArray) {
      try {
        fs.mkdirSync(d)
      } catch (err) {
        if (!opt.silent) throw err
      }
    }
  }

  /**
   * Removes a dir and all its subfolders
   *
   * @method  removeDir
   * @static
   * @param   {string} dir Dir path
   * @param   {object} opt Options
   * @returns {Array} Returns an array with paths of all removed items
   */
  inspect.removeDir = (dir, opt) => {
    opt = opt || {}
    let removed = []

    try {
      const files = fs.readdirSync(dir)
      for (const fl of files) {
        const filepath = path.join(dir, fl)
        const stat = fs.lstatSync(filepath)
        if (stat.isDirectory()) {
          removed = removed.concat(inspect.removeDir(filepath))
          fs.rmdirSync(filepath)
          removed.push(filepath)
        } else {
          fs.unlinkSync(filepath)
          removed.push(filepath)
        }
      }
    } catch (err) {
      if (err && !opt.silent) {
        throw err
      }
    }

    return removed
  }
}
