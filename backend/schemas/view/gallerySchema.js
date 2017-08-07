const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const GallerySchema = new Schema({   
    "description": {
        "type": "String"
    },
    "type": {
        "type": "String",
        "enum": [ "gallery" ],
        "required": true,
        "default": "gallery"
    },    
    "name": {
        "type": "String",
        "required": true,
        "trim": true
    },
    "records_config": [
        {
            
            "position": {
                "type": "Number",
                "required": true
            },
            "included_fields": [
                {
                    "type": "String"
                }
            ]
        }
    ] 
}, { versionKey: false });

GallerySchema.pre('findOneAndUpdate', function(next) {
    this.options.runValidators = true;
    next();
});

module.exports = mongoose.model('gallery', GallerySchema);