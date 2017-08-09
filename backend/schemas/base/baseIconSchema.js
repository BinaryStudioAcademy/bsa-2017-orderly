const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const baseIconSchema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    path: {
        type: String,
        required: true
    },
}, {versionKey: false});

module.exports = mongoose.model('baseIcon', baseIconSchema);