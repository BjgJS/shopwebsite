var mongoose = require('mongoose');
var slug = require('slug');

var CategorySchema = new mongoose.Schema({
    name: {type: String, required: true, unique: true},
    slug: {type: String, unique: true},
    displayFlag: {type: Boolean, default: true},
    level: {type: Number, default: 0},
    children: [{type: mongoose.Schema.Types.ObjectId, ref: 'Category'}],
    parent: {type: mongoose.Schema.Types.ObjectId, ref: 'Category'}
}, {timestamp: true});

CategorySchema.pre('find', function (done) {
    this.populate(['children']);
    done();
});

CategorySchema.pre('save', function (done) {
    if (!this.slug)
        this.slug = slug(this.name);
    done();
});
CategorySchema.post('save', function (done) {
    const _p = []
    this.children.forEach(c => {
        c.parent = this;
        _p.push(c.save());
    });
    Promise.all(_p).then(done);
});

CategorySchema.methods.toNestedJSON = function () {
    const toNestedJson = function (category) {
        let result = {
            name: category.name,
            level: category.level,
            slug: category.slug,
            displayFlag: category.displayFlag
        };
        if (category.children && category.children.length > 0) {
            
            let json = [];
            category.children.forEach(c => {
                json.push(toNestedJson(c));
            });
            result.children = json;
        }
        return result;
    };
    return toNestedJson(this);
};

CategorySchema.methods.toSimpleJSON = function () {
    return {
        name: this.name,
        slug: this.slug,
        displayFlag: this.displayFlag,
        level: this.level,
        parent: this.parent
    }
};
mongoose.model('Category', CategorySchema);
