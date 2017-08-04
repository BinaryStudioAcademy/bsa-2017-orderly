const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Record = new Schema({
  history: [{
    type: Schema.Types.ObjectId,
    ref: 'History'
  }],
  comments: [{
    type: Schema.Types.ObjectId,
    ref: 'Comment'
  }],
  record_data: [{
    data: String
  }]
});

const History = new Schema({
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
})

const Comment = new Schema({
  collaborator: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
  message: {
    type: String
  }
});


module.exports = mongoose.model('Record', Record);
module.exports = mongoose.model('Comment', Comment);
module.exports = mongoose.model('History', History);