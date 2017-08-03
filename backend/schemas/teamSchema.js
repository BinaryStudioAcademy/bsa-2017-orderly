const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const teamSchema = new Schema({});

module.exports = mongoose.model('team', teamSchema);