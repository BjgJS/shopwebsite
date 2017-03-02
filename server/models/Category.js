var mongoose = require('mongoose');
var slug = require('slug');

var CategorySchema = new mongoose.Schema({
    name: {type: String, required: true, unique: true},
    slug: {type: String, unique: true},
    display_flag: {type: Boolean, default: true},
    level: { type: Number, default: 0 },
    children: [{type: mongoose.Schema.Types.ObjectId, ref: 'Category'}]
}, {timestamp: true});

CategorySchema.pre('save', function (done) {
    this.slug = slug(this.name);
    done();
});

CategorySchema.pre('find', function (done) {
    this.populate('children');
    done();
});

CategorySchema.methods.toSimpleJSON = function () {
    const toSimpleJson = function (category) {
        let result = { name: category.name, children: [] };
        if (category.children && category.children.length > 0) {
            let json = [];
            category.children.forEach(c => {
                json.push(toSimpleJson(c));
            });
            result.children = json;
        }
        return result;
    };
    return toSimpleJson(this);
};

module.exports = function () {
    mongoose.model('Category', CategorySchema);
};