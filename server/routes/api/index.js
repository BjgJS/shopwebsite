var router = require('express').Router();

router.use('/categories', require('./categories'));
// router.use('/auth', require('./auth'));

module.exports = router;