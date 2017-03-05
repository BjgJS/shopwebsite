var mongoose = require('mongoose');
var slug = require('slug');

var ImageSchema = mongoose.Schema({
    imageName: String, description: String
});

var ProductSchema = mongoose.Schema({
    name: {type: String, required: true, unique: true},
    slug: {type: String, unique: true},
    category: {type: mongoose.Schema.Types.ObjectId, ref: 'Category'},
    price: {type: Number},
    images: {
        avatar: {type: ImageSchema},
        items: [ImageSchema]
    }
}, {timestamp: true});

ProductSchema.pre('save', function (done) {
    if (!this.slug) {
        this.slug = slug(this.name);
    }
    done();
});

mongoose.model('Product', ProductSchema);
