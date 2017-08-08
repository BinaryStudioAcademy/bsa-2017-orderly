const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectID;

const baseSchema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    description: String,
    icon: ObjectId,
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
    color: String,
    createdAt:  Date,
}, {versionKey: false});

module.exports = mongoose.model('base', baseSchema);