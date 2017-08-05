require('../db/dbConnect');
const Repository = require('./generalRepository');
const Record = require('../schemas/Record').Record;
const Comment = require('../schemas/Record').Comment
let that

class RecordRepository extends Repository {

  constructor() {
    super();
    this.model = Record;
    that = this
  }

  getByIds(ids) {
    return that.model.find({'_id': { $in: ids}})
  }

  addComment(recordId, comment) {          //link comment with record
    return that.model.findByIdAndUpdate(
      recordId,
      {'$push': {comments: comment._id}},
      {'new': true}
    )
  }

  pullComment(recordId, commentId) {
    return that.model.findByIdAndUpdate(
      recordId,
      {'$pull': {comments: commentId}}
    )
  }

}

class CommentRepository extends Repository {

  constructor() {
    super();
    this.model = Comment;
  }
}

module.exports.recordRepository = new RecordRepository()
module.exports.commentRepository = new CommentRepository()
