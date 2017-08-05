const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const kanbanSchema = new Schema({
    "type": {
        "type": String,
        "enum": ["kanban"],
        "default": "kanban",
        "required": true
    },
    "name": {
        "type": String,
        "required": true
    },
    "description": String,
    "columns_config": [{
        "hidden": {
            "type": Boolean,
            "default": false
        }
    }]
});

module.exports = mongoose.model('kanban', kanbanSchema);