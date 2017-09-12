const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId;

const GridSchema = new Schema({
    type: {
        type: String,
        enum: ['grid'],
        default: 'grid',
        required: true,
    },
    name: {
        type: String,
        required: true
    },
    description: String,
    fixed_area: {
        type: Number,
        required: true
    },
    filters: {
        conjunction: {
            type: String,
            enum: ['and', 'or'],
            default: 'and',
        },
        filterSet: [
            {
                fieldId: ObjectId,
                fieldIndex: Number,
                condition: String,
                value: String,
            }
        ]
    },
    fields_config: [
        {
            field: ObjectId,
            hidden: {
                type: Boolean,
                default: false,
            },
            size: {
                type: Number,
                required: true
            },
            position: {
                type: Number,
                required: true
            },
        }
    ]
}, { versionKey: false });

GridSchema.pre('findOneAndUpdate', function(next) {
    this.options.runValidators = true;
    next();
});

module.exports = mongoose.model('grid', GridSchema);