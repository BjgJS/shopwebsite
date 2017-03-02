var mongoose = require('mongoose');
var bcrypt = require('bcrypt-nodejs')
var UserSchema = new mongoose.Schema({
    username: {
        type: String, lowercase: true, unique: true
    },
    email: {
        type: String, lowercase: true, unique: true
    },
    password: String,
}, {timestamps: true});

UserSchema.methods.validPassword = (password, done) => {
    bcrypt.compare(password, this.password, function (err, isMatch) {
        done(err, isMatch);
    });
};

UserSchema.pre('save', function (done) {
    var self = this;
    if (!self.isModified('password')) {
        return done();
    }
    bcrypt.hash(self.password, null, null, (err, hashedPassword) => {
        if (err) return done(err);
        self.password = hashedPassword;
        done();
    });
});

mongoose.model('User', UserSchema);