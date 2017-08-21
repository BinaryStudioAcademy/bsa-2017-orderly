const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId;
const baseSchema = require('../base/baseSchema');

const teamSchema = new Schema({
    owner: {
        type: ObjectId,
        required: true
    },
    name: {
        type: String,
        required: true,
    },
    collaborators: [
        {
            userId: {
                type: ObjectId,
                ref: 'user',
                required: true
            },
            role: {
                type: String,
                enum: [
                    "owner",
                    "creator",
                    "editOnly",
                    "readOnly"
                ],
                required: true
            }
        }
    ],
    bases: [{type: ObjectId, ref: baseSchema}],
    createdAt: {
        type: Date,
        default: Date.now
    },
}, {versionKey: false});

module.exports = mongoose.model('team', teamSchema);