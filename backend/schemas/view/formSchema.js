const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const formSchema = new Schema({
    "type": {
        "type": String,
        "enum": ["form"],
        "default": "form",
        "required": true
    },
    "name": {
        "type": String,
        "required": true
    },
    "description": String,
    "logo": String,
    "fields_config": [{
        "name": {
            "type": String,
            "required": true
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
});

module.exports = mongoose.model('form', formSchema);