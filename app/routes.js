const express = require('express')
const router = express.Router()

require('./routes/v1/routes.js')(router);
require('./routes/v2/routes.js')(router);

module.exports = router