var mongoose = require('mongoose');
var router = require('express').Router();
var Product = mongoose.model('Product');

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