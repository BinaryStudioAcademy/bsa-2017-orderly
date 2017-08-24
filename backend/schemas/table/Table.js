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
                }
            }
        }],
        comments: [{
            collaborator: {
                type: ObjectId,
                ref: 'User'
            },
            message: {
                type: String
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
        }
    }],
    views: [{
        type: {
            type: String,
            enum: ['grid', 'form', 'gallery', 'kanban'],
            required: true
        },
        viewId: ObjectId,
        ref: {
            type: String,
            enum: ['grid', 'form', 'gallery', 'kanban'],
        }
    }]
}, {versionKey: false});

module.exports = mongoose.model('table', tableSchema);

// gridViews: [{
//     type: Schema.Types.ObjectId,
//     ref: 'grid'
// }],
//     formViews: [{
//     type: Schema.Types.ObjectId,
//     ref: 'form'
// }],
//     galleryViews: [{
//     type: Schema.Types.ObjectId,
//     ref: 'gallery'
// }],
//     kanbanViews: [{
//     type: Schema.Types.ObjectId,
//     ref: 'kanban'
// }],
