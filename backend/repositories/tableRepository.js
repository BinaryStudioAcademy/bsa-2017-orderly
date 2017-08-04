require('../db/dbConnect')
const Table = require('../schemas/Table');
const Record = require('../schemas/Record');

const add = (table) => new Table(table).save();

const getById = (tableId) => Table.findById(tableId);

const getAll = () => Table.find({});

const update = (tableId, data) => Table.findByIdAndUpdate(tableId, data, { 'new': true });

const deleteTable = (tableId) => Table.findByIdAndRemove(tableId);

const addRecord = (tableId, record) =>
  new Record(record).save()
    .then( recordObj =>
      Table.findByIdAndUpdate(
        tableId,
        {'$push': {'records': recordObj._id}},
        {'new': true}
    ))





module.exports = {
  add,
  getAll,
  getById,
  update,
  deleteTable,
  addRecord
}