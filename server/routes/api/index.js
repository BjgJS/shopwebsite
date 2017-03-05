var router = require('express').Router();

router.use('/categories', require('./categories'));
router.use('/auth', require('./auth'));
router.use('/products', require('./products'));

module.exports = router;