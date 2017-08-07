const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const User = new Schema({}, {versionKey: false});

module.exports = mongoose.model('User', User);