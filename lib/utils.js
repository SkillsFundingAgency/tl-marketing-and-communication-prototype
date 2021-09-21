// Core dependencies
const fs = require('fs')

// NPM dependencies
const csvParse = require('csv-parse/lib/sync')
const getKeypath = require('keypather/get')
const marked = require('marked')
const path = require('path')
const portScanner = require('portscanner')
const inquirer = require('inquirer')

// Local dependencies
const config = require('../app/config.js')

// Require core and custom filters, merges to one object
// and then add the methods to Nunjucks environment
exports.addNunjucksFilters = function (env) {
  var coreFilters = require('./core_filters.js')(env)
  var customFilters = require('../app/filters.js')(env)
  var filters = Object.assign(coreFilters, customFilters)
  Object.keys(filters).forEach(function (filterName) {
    env.addFilter(filterName, filters[filterName])
  })
}

// Add Nunjucks function called 'checked' to populate radios and checkboxes
exports.addCheckedFunction = function (env) {
  env.addGlobal('checked', function (name, value) {
    // Check data exists
    if (this.ctx.data === undefined) {
      return ''
    }

    // Use string keys or object notation to support:
    // checked("field-name")
    // checked("['field-name']")
    // checked("['parent']['field-name']")
    name = !name.match(/[.[]/g) ? `['${name}']` : name
    var storedValue = getKeypath(this.ctx.data, name)

    // Check the requested data exists
    if (storedValue === undefined) {
      return ''
    }

    var checked = ''

    // If data is an array, check it exists in the array
    if (Array.isArray(storedValue)) {
      if (storedValue.indexOf(value) !== -1) {
        checked = 'checked'
      }
    } else {
      // The data is just a simple value, check it matches
      if (storedValue === value) {
        checked = 'checked'
      }
    }
    return checked
  })
}

// Find an available port to run the server on
exports.findAvailablePort = function (app, callback) {
  var port = null

  // When the server starts, we store the port in .port.tmp so it tries to restart
  // on the same port
  try {
    port = Number(fs.readFileSync(path.join(__dirname, '/../.port.tmp')))
  } catch (e) {
    port = Number(process.env.PORT || config.port)
  }

  console.log('')

  // Check port is free, else offer to change
  portScanner.findAPortNotInUse(port, port + 50, '127.0.0.1', function (error, availablePort) {
    if (error) { throw error }
    if (port === availablePort) {
      // Port is free, return it via the callback
      callback(port)
    } else {
      // Port in use - offer to change to available port
      console.error('ERROR: Port ' + port + ' in use - you may have another prototype running.\n')

      // Ask user if they want to change port
      inquirer.prompt([{
        name: 'changePort',
        message: 'Change to an available port?',
        type: 'confirm'
      }]).then(answers => {
        if (answers.changePort) {
          // User answers yes
          port = availablePort
          fs.writeFileSync(path.join(__dirname, '/../.port.tmp'), port.toString())
          console.log('Changed to port ' + port)

          callback(port)
        } else {
          // User answers no - exit
          console.log('\nYou can set a new default port in server.js, or by running the server with PORT=XXXX')
          console.log("\nExit by pressing 'ctrl + c'")
          process.exit(0)
        }
      })
    }
  })
}

// Redirect HTTP requests to HTTPS
exports.forceHttps = function (req, res, next) {
  var protocol = req.headers['x-forwarded-proto']
  // Glitch returns a comma separated list for x-forwarded-proto
  // We need the first to determine if running on https
  if (protocol) {
    protocol = protocol.split(',').shift()
  }

  if (protocol !== 'https') {
    console.log('Redirecting request to https')
    // 302 temporary - this is a feature that can be disabled
    return res.redirect(302, 'https://' + req.get('Host') + req.url)
  }

  // Mark proxy as secure (allows secure cookies)
  req.connection.proxySecure = true
  next()
}

// Try to match a request to a template, for example a request for /test
// would look for /app/views/test.html
// and /app/views/test/index.html

function renderPath (path, res, next) {
  // Try to render the path
  res.render(path, function (error, html) {
    if (!error) {
      // Success - send the response
      res.set({ 'Content-type': 'text/html; charset=utf-8' })
      res.end(html)
      return
    }
    if (!error.message.startsWith('template not found')) {
      // We got an error other than template not found - call next with the error
      next(error)
      return
    }
    if (!path.endsWith('/index')) {
      // Maybe it's a folder - try to render [path]/index.html
      renderPath(path + '/index', res, next)
      return
    }
    // We got template not found both times - call next to trigger the 404 page
    next()
  })
}

exports.matchRoutes = function (req, res, next) {
  var path = req.path

  // Remove the first slash, render won't work with it
  path = path.substr(1)

  // If it's blank, render the root index
  if (path === '') {
    path = 'index'
  }

  renderPath(path, res, next)
}

// Try to match a request to a Markdown file and render it
exports.matchMdRoutes = function (req, res) {
  var docsPath = '/../docs/documentation/'
  if (fs.existsSync(path.join(__dirname, docsPath, req.params[0] + '.md'), 'utf8')) {
    var doc = fs.readFileSync(path.join(__dirname, docsPath, req.params[0] + '.md'), 'utf8')
    var html = marked(doc)
    res.render('documentation_template', { document: html })
    return true
  }
  return false
}

// Store data from POST body or GET query in session
var storeData = function (input, data) {
  for (var i in input) {
    // any input where the name starts with _ is ignored
    if (i.indexOf('_') === 0) {
      continue
    }

    var val = input[i]

    // Delete values when users unselect checkboxes
    if (val === '_unchecked' || val === ['_unchecked']) {
      delete data[i]
      continue
    }

    // Remove _unchecked from arrays of checkboxes
    if (Array.isArray(val)) {
      var index = val.indexOf('_unchecked')
      if (index !== -1) {
        val.splice(index, 1)
      }
    } else if (typeof val === 'object') {
      // Store nested objects that aren't arrays
      if (typeof data[i] !== 'object') {
        data[i] = {}
      }

      // Add nested values
      storeData(val, data[i])
      continue
    }

    data[i] = val
  }
}

// Get session default data from file
let sessionDataDefaults = {}

const sessionDataDefaultsFile = path.join(__dirname, '/../app/data/session-data-defaults.js')

try {
  sessionDataDefaults = require(sessionDataDefaultsFile)
} catch (e) {
  console.error('Could not load the session data defaults from app/data/session-data-defaults.js. Might be a syntax error?')
}

// Middleware - store any data sent in session, and pass it to all views
exports.autoStoreData = function (req, res, next) {
  if (!req.session.data) {
    req.session.data = {}
  }

  req.session.data = Object.assign({}, sessionDataDefaults, req.session.data)

  storeData(req.body, req.session.data)
  storeData(req.query, req.session.data)

  // Send session data to all views

  res.locals.data = {}

  for (var j in req.session.data) {
    res.locals.data[j] = req.session.data[j]
  }

  next()
}

// Middleware - load data from data-files to session, and pass it to all views

const keyPrefix = 'KEY_'

function appendJSONFileDataToObj (obj, fileName, dirPath) {
  /*
  If fileName is NOT .json do nothing, otherwise load / parse file data and append to obj.
  */
  const fileComponents = path.parse(fileName)
  if (fileComponents.ext !== '.json') {
    return
  }
  const fileKey = fileComponents.name
  const filePath = path.join(dirPath, fileName)
  const fileStr = fs.readFileSync(filePath)
  const fileObj = JSON.parse(fileStr)
  Object.assign(obj, { [fileKey]: fileObj })
}

function isObjArrayToTransformToObj (objArray, fileName) {
  /*
  Return true if objArray has key with keyPrefix-ed property,
  throw error if multiple keyPrefix-ed properties.
  */
  const keyCols = Object.keys(objArray[0]).filter(key => key.startsWith(keyPrefix))
  if (keyCols.length === 0) {
    return false
  }
  if (keyCols.length > 1) {
    throw new Error(
      `Error processing data file ${fileName}:` +
      `${keyCols.length} key columns (prefix KEY_) found: [${keyCols.join(', ')}]. ` +
      'Only one is currently supported.'
    )
  }
  return true
}

function transformObjArrayToObj (objArray, fileName) {
  /*
  Refactor objArray into nested obj keyed with keyPrefix-ed property (see keyPrefix global),
  e.g. [{KEY_a: b, c: d}] => {b: {c: d}}.
  Throw error if non-unique values are found for the keyPrefix-ed property.
  */
  const keyCols = Object.keys(objArray[0]).filter(key => key.startsWith(keyPrefix))
  var output = {}
  const keyCol = keyCols[0]
  objArray.forEach((obj) => {
    const keyVal = obj[keyCol]
    if (keyVal in output) {
      throw new Error(
        `Error processing data file ${fileName}: ` +
        `Values for key column ${keyCol} must be unique. ` +
        `Value ${keyVal} is repeated.`
      )
    }
    delete obj[keyCol]
    output[keyVal] = obj
  })
  return output
}

function appendCSVFileDataToObj (obj, fileName, dirPath) {
  /*
  If fileName is NOT .csv do nothing, otherwise load / parse file data and append to obj.
  Will append csv data to obj array ([{a: b, c: d}]) unless property with keyPrefix
  (see keyPrefix global) is found, in which case will append csv data as obj
  ({b: {c: d}}, see transformObjArrayToObj function above).
  */
  const fileComponents = path.parse(fileName)
  if (fileComponents.ext !== '.csv') {
    return
  }
  const fileKey = fileComponents.name
  const filePath = path.join(dirPath, fileName)
  const fileCSVString = fs.readFileSync(filePath, { encoding: 'utf-8' })
  const fileObjArray = csvParse(fileCSVString, { columns: true, skip_empty_lines: true, cast: true })
  if (isObjArrayToTransformToObj(fileObjArray, fileName)) {
    const fileObj = transformObjArrayToObj(fileObjArray, fileName)
    Object.assign(obj, { [fileKey]: fileObj })
  } else {
    Object.assign(obj, { [fileKey]: fileObjArray })
  }
}

function appendFileDataToObj (obj, fileName, dirPath) {
  /*
  Run all appender functions in appenders array on fileName in dirPath.
  Appender functions should each take three args (obj, fileName, dirPath) and only
  append data from one file extension each (e.g. .json) to obj, ignoring other file extensions.
  */
  const appenders = [
    appendJSONFileDataToObj,
    appendCSVFileDataToObj
  ]
  appenders.forEach(appender => appender(obj, fileName, dirPath))
}

function dataFilesToObj (dirPath) {
  /*
  Scan dirPath for files and run all through appendFileDataToObj to collate fileData,
  then return as object.
  */
  var output = {}
  const filesInDir = fs.readdirSync(dirPath)
  filesInDir.forEach(fileName => appendFileDataToObj(output, fileName, dirPath))
  return output
}

const dataFileDir = path.join(__dirname, '../app/data/data-files')

function dataFilesToSessionData (req, res, next, opts = {}) {
  /*
  Middleware function to load data from files in opts.dirToScan to session data.
  If opts.prioritiseFileData = true, will overwrite data in session with data
  loaded from files with every request. If opts.prioritiseFileData = false,
  data in session will never be overwritten with data from files.
  */
  const defaultOpts = {
    dirToScan: dataFileDir,
    prioritiseFileData: false
  }
  const resolvedOpts = Object.assign({}, defaultOpts, opts)

  if (!req.session.data) {
    req.session.data = {}
  }
  const fileData = dataFilesToObj(resolvedOpts.dirToScan)

  if (resolvedOpts.prioritiseFileData === true) {
    // if prioritiseFileData, overwrite existing session data with data from files
    req.session.data = Object.assign({}, req.session.data, fileData)
  } else {
    // otherwise, overwrite data from files with session data
    req.session.data = Object.assign({}, fileData, req.session.data)
  }

  // Send session data to all views
  res.locals.data = {}

  for (var j in req.session.data) {
    res.locals.data[j] = req.session.data[j]
  }

  // run next middleware in callback chain
  next()
}

exports.dataFilesToSessionDataFactory = function (opts = {}) {
  /*
  Factory for dataFilesToSessionData middleware. Returns pre-configured
  dataFilesToSessionData function that satisfies interface for express middleware
  (see https://expressjs.com/en/guide/writing-middleware.html)
  */
  return (req, res, next) => { dataFilesToSessionData(req, res, next, opts) }
}
