const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId;

const tableSchema = new Schema({
    name: {
        type: String,
        required: true,
        default: 'new table'
    },
    description: {
        type: String,
        default: ''
    },
    records: [{
        record_data: [{
            data: String
        }],
        history: [{
            collaborator: {
                type: ObjectId,
                ref: 'User'
            },
            changes: {
                changed_from: {
                    type: String
                },
                changed_to: {
                    type: String
                },
                field_id: {
                    type: String
                },
                record_id: {
                    type: String
                }
            },
            date: {
                type: Date,
                default: Date.now
            }
        }],
        comments: [{
            collaborator: {
                type: ObjectId,
                ref: 'User'
            },
            message: {
                type: String
            },
            created: {
                type: Date,
                default: Date.now
            }
        }]
    }],
    fields: [{
        name: {
            type: String,
            default: 'new field'
        },
        type: {
            type: String,
            require: true
        },
        description: {
            type: String,
            default: 'description'
        },
        options:{
            select:[],
            number: { type: Number, default: '2' },
            currency: { type: String,  default:'$' },
            date: { 
                format: { type: String,  default:'#MM#/#DD#/#YYYY#' },
                time: { type: Boolean, default: false }
                },
            percent: { type: Number, default: '1' },
            multiple:[]
            }
    }],
    views: [{
        type: {
            type: String,
            enum: ['grid', 'form', 'gallery', 'kanban'],
            required: true
        },
        view: {
            type: ObjectId,
            refPath: 'views.type',
            required: true
        },
    }]
}, {versionKey: false});

module.exports = mongoose.model('table', tableSchema);
