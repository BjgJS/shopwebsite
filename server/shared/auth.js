var jwt = require('express-jwt');
var secret = process.env.APP_SECRET_KEY;

function getTokenFromHeader(req) {
    if (req.headers.authorization && req.headers.authorization.split(' ')[0] === 'Token') {
        return req.headers.authorization.split(' ')[1];
    }
    return null;
}

var auth = {
    required: jwt({
        secret: secret,
        userProperty: 'payload',
        getToken: getTokenFromHeader
    })
};

module.exports = auth;