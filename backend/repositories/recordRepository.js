require('../db/dbConnect');
const Repository = require('./generalRepository');
const Record = require('../schemas/Record').Record;
const Comment = require('../schemas/Record').Comment;

class RecordRepository extends Repository {

    constructor() {
        super();
        this.model = Record;
    }

    getByIds(ids) {
        return this.model.find({'_id': {$in: ids}});
    }

    addComment(recordId, comment) {          //link comment with record
        return this.model.findByIdAndUpdate(
            recordId,
            {'$push': {comments: comment._id}},
            {'new': true}
        );
    }

    pullComment(recordId, commentId) {
        return this.model.findByIdAndUpdate(
            recordId,
            {'$pull': {comments: commentId}}
        );
    }

}

class CommentRepository extends Repository {
    constructor() {
        super();
        this.model = Comment;
    }
}

module.exports.recordRepository = new RecordRepository();
module.exports.commentRepository = new CommentRepository();
