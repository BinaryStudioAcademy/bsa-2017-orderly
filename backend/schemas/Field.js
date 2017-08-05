const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const fieldSchema = new Schema({
  name: {
    type: String,
    require: true
  },
  type: {
    type: String,
    require: true
  },
  description: {
    type: String
  }
});


module.exports = mongoose.model('Field', fieldSchema);