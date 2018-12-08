const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TVSchema = new Schema({
    title: String,
    overview: String,
    poster_path: String,
    popularity: Number,
    tag: []
});

const TV = mongoose.model('Schema', TVSchema);

module.exports = TV;
