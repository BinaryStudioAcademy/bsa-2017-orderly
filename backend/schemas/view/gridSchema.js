const mongoose = require('mongoose');
const Schema = mongoose.Schema;

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
    fields_config: [
        {
            name: {
                type: String,
                required: true,
                trim: true
            },
            hidden: {
                type: Boolean,
                default: false
            },
            size: {
                type: Number,
                required: true
            },
            position: {
                type: Number,
                required: true
            },
            fixed_area: {
                type: Number,
                // "required": true
            }
        }
    ]
}, { versionKey: false });

GridSchema.pre('findOneAndUpdate', function(next) {
    this.options.runValidators = true;
    next();
});

module.exports = mongoose.model('grid', GridSchema);