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
        ref: 'Record'
    }],
    fields: [{
        name: {
            type: String,
            require: true
        },
        type: {
            type: String,
            require: true
        },
        description: {
            type: String
        }
    }],
    views: [{
        type: Schema.Types.ObjectId,
        ref: 'View'
    }]
}, {versionKey: false});

module.exports = mongoose.model('Table', tableSchema);