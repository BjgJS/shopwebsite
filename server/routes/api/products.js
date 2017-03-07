var mongoose = require('mongoose');
var router = require('express').Router();
var Product = mongoose.model('Product');

router.param('slug', function(req, res, next, slug) {
    Product.findOne({slug: slug})
        .then(product => {
            if (!product) return res.status(404).json({errors: {message: 'Not found', code: 404}});
            req.product = product;
            next();
        })
        .catch(next);
});

/**
 * GET all products
 */
router.get('/', function (req, res, next) {
    Product.find()
        .then(products => {
            if (!products) return res.sendStatus(404);
            return res.json({
                products: products
            })
        })
        .catch(next);
});

router.get('/:slug', function (req, res) {
    return res.json({
        product: req.product
    });
});

/**
 * POST save product
 */
router.post('/', function (req, res, next) {
    let payload = req.body.product;
    let product = new Product({
        name: payload.name,
        slug: payload.slug,
        price: payload.price,
        images: payload.images
    });
    product.save()
        .then(product => {
            if (!product) return res.sendStatus(404);
            return res.json({product: product});
        })
        .catch(next);
});

module.exports = router;