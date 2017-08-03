const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const teamSchema = new Schema({
    id: Schema.Types.ObjectId,
    owner: String,
    name: String,
    collaborators: Array,
    bases: Array
});

module.exports = mongoose.model('team', teamSchema);