var mongoose = require('mongoose');
var router = require('express').Router();
var Category = mongoose.model('Category');

/**
 * GET all categories
 */
router.get('/', function (req, res, next) {
    Category.find().then(function (categories) {
        if (!categories) return res.sendStatus(404);
        return res.json({
            categories: categories
        });
    }).catch(next);
});

/**
 * SAVE category
 * authorized user only
 */
router.post('/', function (req, res, next) {
    const saveCategory = (category) => {
        if (category.children.length > 0) {
            var _promises = [];
            category.children.forEach(c => {
                 _promises.push(saveCategory(c));
            });
            return Promise.all(_promises).then(ids => {
                category.children = ids;
                return category;
            }).then(c => new Category(c).save());
        }
        return new Category(category).save();
    };

    return saveCategory(req.body.category)
        .then((category) => res.json({category: category.toSimpleJSON()}))
        .catch(next);
});


module.exports = router;