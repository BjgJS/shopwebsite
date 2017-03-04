var mongoose = require('mongoose');
var slug = require('slug');

var ProductSchema = mongoose.Schema({
    name: {type: String, required: true, unique: true},
    slug: {type: String, unique: true},
    category: {type: mongoose.Schema.Types.ObjectId, ref: 'Category'}
}, {timestamp: true});

mongoose.model('Product', ProductSchema);
