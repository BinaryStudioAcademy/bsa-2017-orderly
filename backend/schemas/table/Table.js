const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const tableSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String
    },
    records: [{
        type: Schema.Types.ObjectId,
        ref: 'record'
    }],
    fields: [{
        type: Schema.Types.ObjectId,
        ref: 'field'
    }],
    views: [{
        type: Schema.Types.ObjectId,
        ref: 'view'
    }]
}, {versionKey: false});

module.exports = mongoose.model('table', tableSchema);