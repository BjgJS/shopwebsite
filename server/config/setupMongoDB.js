var mongoose = require('mongoose');

module.exports = function () {
    mongoose.connect(process.env.DB_URL).then(
        () => {
            console.log('Connect to mongodb successfully! ' + process.env.DB_URL);
            require('../models')();

        },
        (err) => {
            console.log('Something went wrong!', err);
        }
    );
};
