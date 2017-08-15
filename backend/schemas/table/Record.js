const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const recordSchema = new Schema({
    record_data: [{
        type: String,
	    required: true
    }],
    history: [{
        type: Schema.Types.ObjectId,
        ref: 'history'
    }],
    comments: [{
        type: Schema.Types.ObjectId,
        ref: 'comment'
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
        ref: 'user'
    },
    message: {
        type: String
    }
}, {versionKey: false});

module.exports.Comment = mongoose.model('comment', commentSchema);
// module.exports.History = mongoose.model('History', historySchema);
module.exports.Record = mongoose.model('record', recordSchema);
