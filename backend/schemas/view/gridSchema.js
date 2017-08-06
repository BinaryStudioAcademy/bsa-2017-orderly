const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const GridSchema = new Schema({    
    "description": {
        "type": "String"
    },
    "type": {
        "type": "String",
        "enum": [ "grid" ],
        "required": true,
        "default": "grid",
        "trim": true
    },    
    "name": {
        "type": "String",
        "required": true
    },
    "fields_config": [
        {
            "name": {
                "type": "String",
                "required": true,
                "trim": true
            },
            "hidden": {
                "type": "Boolean"
            },
            "size": {
                "type": "Number"
            },
            "position": {
                "type": "Number"
            },
            "fixed_area": {
                "type": "Number"
            }
        }
    ] 
}, { versionKey: false });

GridSchema.pre('findOneAndUpdate', function(next) {
    this.options.runValidators = true;
    next();
});

module.exports = mongoose.model('grid', GridSchema);