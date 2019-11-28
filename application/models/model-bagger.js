const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const baggerSchema = new Schema({
    title: String,
    icon: String
}, {collection: 'badge'});

const bagger = mongoose.model('bagger', baggerSchema);

module.exports = bagger;