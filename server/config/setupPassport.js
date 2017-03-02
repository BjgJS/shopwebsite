var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var mongoose = require('mongoose');
var User = mongoose.model('User');

passport.use(new LocalStrategy({
    usernameField: 'user[username]',
    passwordField: 'user[password]'
}, function (username, password, done) {
    User.findOne({username: username})
        .then(user => {
            if (!user) {
                return done(null, false, {
                    errors: {
                        'username or password': 'is invalid'
                    }
                });
            }
            user.validPassword(password, function (err, isMatch) {
                console.log(err);
                if (err) return done(err);
                if (!isMatch) {
                    return done(null, false, {
                        errors: {
                            'username or password': 'is invalid'
                        }
                    });
                }
                return done(null, user);
            });
        })
        .catch(done);
}));