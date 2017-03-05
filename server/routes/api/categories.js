var mongoose = require('mongoose');
var router = require('express').Router();
var Category = mongoose.model('Category');
var auth = require('../../shared/auth');

router.param('category', function (req, res, next, slug) {
    Category.findOne({slug: slug})
        .then(category => {
            if (!category) return res.sendStatus(404);
            req.category = category;
            return next();
        })
        .catch(next);
});

/**
 * GET all categories
 */
router.get('/', function (req, res, next) {
    const nested = req.query.mode !== 'flatten';
    const level = {level: nested ? 0 : {$gt: -1}};
    let query = Category.find(level);
    if (!nested) query = query.populate('parent', '-_id name slug');
    query.then(function (categories) {
            if (!categories) return res.sendStatus(404);
            if (nested) {
                return res.json({
                    categories: categories.map(c => c.toNestedJSON())
                });
            } else {
                return res.json({
                    categories: categories.map(c => c.toSimpleJSON())
                });
            }
        })
        .catch(next);
});

/**
 * SAVE category
 * authorized user only
 */
router.post('/', function (req, res, next) {
    const saveCategory = (category, level = 0) => {
        if (category.children && category.children.length > 0) {
            var _promises = [];
            category.children.forEach(c => {
                _promises.push(saveCategory(c, level + 1));
            });
            return Promise.all(_promises).then(ids => {
                category.children = ids;
                category.level = level;
                return category;
            }).then(c => new Category(c).save());
        }
        category.level = level;
        return new Category(category).save();
    };

    return saveCategory(req.body.category, -1)
        .then((category) => res.json({category: category.toNestedJSON()}))
        .catch(next);
});

router.put('/:category', function (req, res, next) {
    const category = req.category;
    category.name = req.body.name;
    category.slug = req.body.slug || category.slug;
    category.displayFlag = req.body.displayFlag;
    category.save()
        .then(function (c) {
            return res.json({
                category: c.toSimpleJSON()
            });
        })
        .catch(next);
});
module.exports = router;