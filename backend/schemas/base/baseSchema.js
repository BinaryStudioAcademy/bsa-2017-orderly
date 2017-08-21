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
    color: { type: String, default: function () {
        const colors = [
            '#2D7FF9',
            '#18BFFF',
            '#02AAA4',
            '#FF08C2',
            '#F82B60',
            '#FF6F2C',
            '#FCB400',
            '#20C933',
            '#8B46FF',
            '#666666'
        ];
        return colors[Math.floor(Math.random() * (colors.length))];
    }},
    createdAt: {
        type: Date,
        default: Date.now,
    },
}, {versionKey: false});

module.exports = mongoose.model('base', baseSchema);