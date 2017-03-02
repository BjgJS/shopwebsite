var mongoose = require('mongoose');
var router = require('express').Router();
var passport = require('passport');
var User = mongoose.model('User');

/**
 * POST user login
 */
router.post('/login', function (req, res, next) {
    passport.authenticate('local', {session: false}, function (err, user, info) {
        if (err) return next(err);
        if (user) {
            return res.json({user: user.toAuthJSON()});
        } else {
            return res.status(402).json(info);
        }
    })(req, res, next);
});

/**
 * POST register new user
 */
router.post('/register', function (req, res, next) {
    var user = new User(req.body.user);
    user.save()
        .then(() => {
            return res.json({user: user.toAuthJSON()});
        })
        .catch(next);
});

router.post('/logout', function (req, res, next) {

});

module.exports = router;