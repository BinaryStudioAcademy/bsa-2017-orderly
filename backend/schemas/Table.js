const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const Table = new Schema({
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
  fields: [{
    type: Schema.Types.ObjectId,
    ref: 'Field'
  }],
  views: [{
    type: Schema.Types.ObjectId,
    ref: 'View'
  }]
});


module.exports = mongoose.model('Table', Table);