const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const baggerSchema = new Schema({
    number: Number,
    name: String,
    schedule: [{
        day: {type: String},
        period: {type: String}
    }],
    address: String,
    phone: String,
    roles: [String]
}, {collection: 'bagger'});

const bagger = mongoose.model('bagger', baggerSchema);

module.exports = bagger;