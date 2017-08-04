const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const formSchema = new Schema({
    type: String,
    name: String,
    description: String,
    logo: String,
    fields_config: [{
        name: String,
        position: Number,
        included: Boolean
    }]
});

module.exports = mongoose.model('form', formSchema);