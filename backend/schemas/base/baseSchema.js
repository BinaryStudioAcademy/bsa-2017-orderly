const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId;
const baseIcon = require('./baseIconSchema');

const baseSchema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    description: String,
    icon: {
        type: ObjectId,
        ref: baseIcon,
    },
    collaborators: [
        {
            userId: {
                type: ObjectId,
                required: true
            },
            role: {
                type: String,
                enum: [
                    'owner',
                    'creator',
                    'editOnly',
                    'readOnly'
                ],
                required: true
            }
        }
    ],
    tables: [{type: ObjectId, ref: 'table'}],
    color: String,
    createdAt: {
        type: Date,
        default: Date.now,
    },
}, {versionKey: false});

module.exports = mongoose.model('base', baseSchema);