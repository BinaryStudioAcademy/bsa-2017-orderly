const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const recordSchema = new Schema({
  record_data: [{
    data: String
  }],
  history: [{
    type: Schema.Types.ObjectId,
    ref: 'History'
  }],
  comments: [{
    type: Schema.Types.ObjectId,
    ref: 'Comment'
  }]
}, {versionKey: false});

const historySchema = new Schema({
  collaborator: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
  changes: {
    changed_from: {
      type: String
    },
    changed_to: {
      type: String
    }
  }
}, {versionKey: false});

const commentSchema = new Schema({
  collaborator: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
  message: {
    type: String
  }
}, {versionKey: false});


module.exports.Comment = mongoose.model('Comment', commentSchema);
// module.exports.History = mongoose.model('History', historySchema);
module.exports.Record = mongoose.model('Record', recordSchema);
