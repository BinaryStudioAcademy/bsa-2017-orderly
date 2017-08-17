const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId;

const baseSchema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true,
        default: 'New Base'
    },
    description: String,
    icon: {
        type: String,
        default: 'code'
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
    tables: [{type: ObjectId, ref: 'Tables'}],
    color: { type: String, default: '#C3C8B7' },
    createdAt: {
        type: Date,
        default: Date.now,
    },
}, {versionKey: false});

module.exports = mongoose.model('base', baseSchema);