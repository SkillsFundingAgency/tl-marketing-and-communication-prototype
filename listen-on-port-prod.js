// Local dependencies
const server = require('./server.js')
const utils = require('./lib/utils.js')
// Set up configuration variables

utils.findAvailablePort(server, function () {
  console.log('Listening on port ' + 3001 + '   url: http://localhost:' + 3001)
  server.listen(3001)
})
