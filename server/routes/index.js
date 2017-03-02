var router = require('express').Router();

// api router config here
router.use('/api', require('./api'));

// other router config here

module.exports = router;
