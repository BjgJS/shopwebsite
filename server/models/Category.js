var mongoose = require('mongoose');
var slug = require('slug');

var CategorySchema = new mongoose.Schema({
    name: {type: String, required: true, unique: true},
    slug: {type: String, unique: true},
    display_flag: {type: Boolean, default: true},
    children: [{type: mongoose.Schema.Types.ObjectId, ref: 'Category'}]
}, {timestamp: true});


// CategorySchema.pre('validate', function (done) {
//     var _promises = [];
//     var self = this;
//     console.log(this);
//     this.children.map((category) => {
//         _promises.push(category.save().then(obj => obj._id));
//     });
//
//     Promise.all(_promises).then((ids) => {
//         console.log(ids);
//         self.children = ids;
//         done();
//     });
// });

CategorySchema.pre('save', function (done) {
    this.slug = slug(this.name);
    done();
});

module.exports = function () {
    mongoose.model('Category', CategorySchema);
};