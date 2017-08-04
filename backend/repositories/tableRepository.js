require('../db/dbConnect');
const Repository = require('./generalRepository');
const Table = require('../schemas/Table');
const Record = require('../schemas/Record');

class TableRepository extends Repository {

  constructor() {
    super();
     this.model = Table;
  }

}

module.exports = new TableRepository()



//
// const addRecord = (tableId, record) =>
//   new Record(record).save()
//     .then( recordObj =>
//       Table.findByIdAndUpdate(
//         tableId,
//         {'$push': {'records': recordObj._id}},
//         {'new': true}
//     ))
//
// const deleteRecord = (tableId, recordId) =>
//   Table.findByIdAndUpdate(tableId, {'$pull': {records: recordId}})
//
//
//
//
//
// module.exports = {
//   add,
//   getAll,
//   getById,
//   update,
//   deleteTable,
//   addRecord,
//   deleteRecord
// }