const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const kanbanSchema = new Schema({
    type: String,
    description: String,
    name: String,
    columns_config: [{ hidden: Boolean }]
});

module.exports = mongoose.model('kanban', kanbanSchema);