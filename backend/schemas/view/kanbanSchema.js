const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const KanbanSchema = new Schema({
    "type": {
        "type": String,
        "enum": ["kanban"],
        "default": "kanban",
        "required": true
    },
    "name": {
        "type": String,
        "required": true,
        "trim": true
    },
    "description": String,
    "columns_config": [{
        "hidden": {
            "type": Boolean,
            "default": false
        }
    }]
}, {versionKey: false});

KanbanSchema.pre('findOneAndUpdate', function(next) {
    this.options.runValidators = true;
    next();
});

module.exports = mongoose.model('kanban', KanbanSchema);