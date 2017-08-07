const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({}, {versionKey: false});

module.exports = mongoose.model('user', userSchema);