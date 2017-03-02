var mongoose = require('mongoose');
var bcrypt = require('bcrypt-nodejs')
var UserSchema = new mongoose.Schema({
    username: {
        type: String, lowercase: true, unique: true
    },
    email: {
        type: String, lowercase: true, unique: true
    },
    password: { type: String, required: true },
}, {timestamps: true});

UserSchema.methods.validPassword = function(password, done) {
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

UserSchema.methods.generateJWT = function () {
    // TODO: generate token
    return "TOKEN";
};

UserSchema.methods.toAuthJSON = function () {
    return {
        username: this.username,
        token: this.generateJWT()
    };
};

mongoose.model('User', UserSchema);