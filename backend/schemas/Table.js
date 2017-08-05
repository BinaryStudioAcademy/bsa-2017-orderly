const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const tableSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  description: {
    type: String
  },
  records: [{
    type: Schema.Types.ObjectId,
    ref: 'Record'
  }],
  fieldIds: [{
    type: Schema.Types.ObjectId,
    ref: 'Field'
  }],
  views: [{
    type: Schema.Types.ObjectId,
    ref: 'View'
  }]
});


module.exports = mongoose.model('Table', tableSchema);