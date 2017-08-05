const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const FormSchema = new Schema({
    "type": {
        "type": String,
        "enum": ["form"],
        "default": "form",
        "required": true
    },
    "name": {
        "type": String,
        "required": true,
        "trim": true
    },
    "description": String,
    "logo": String,
    "fields_config": [{
        "name": {
            "type": String,
            "required": true,
            "trim": true
        },
        "position": {
            "type": Number,
            "required": true
        },
        "included": {
            "type": Boolean,
            "default": true
        }
    }]
}, {versionKey: false});

FormSchema.pre('findOneAndUpdate', function(next) {
    this.options.runValidators = true;
    next();
});

module.exports = mongoose.model('form', FormSchema);