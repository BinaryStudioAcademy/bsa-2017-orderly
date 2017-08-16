require('../../db/dbConnect');
const Repository = require('../generalRepository');
const Table = require('../../schemas/table/Table');
const objectId = require('mongoose').Types.ObjectId;

let that;

class TableRepository extends Repository {

    constructor() {
        super();
        this.model = Table;
        that = this;
    }

    updateRecord(tableId, record) {
        return that.model.findByIdAndUpdate(
            tableId,
            {'$push': {records: record._id}},
            {'new': true}
        );
    }

    pullRecord(tableId, recordId) {
        return that.model.findByIdAndUpdate(
            tableId,
            {'$pull': {records: recordId}}
        );
    }
    
    getFields(tableId) {
        return this.model.findById(tableId).select('fields');
    }

    getOneField(tableId, fieldId) {
        return this.model.findOne(
            {_id: tableId},
            {
                fields: {
                    $elemMatch: {
                        _id: fieldId
                    }
                }
            }).select('-_id -views -records -name -description');
    }

    addField(tableId, field) {
        return this.model.findByIdAndUpdate(
            tableId,
            {'$push': {fields: field}},
            {'new': true}
        );
    }

    updateField(tableId, fieldId, data) {
        return this.model.update(
            {_id: objectId(tableId), 'fields._id': objectId(fieldId)},
            {'$set': {'fields.$.name': data.name}});
    }

    deleteField(tableId, fieldId) {
        return this.model.update(
            {_id: objectId(tableId)},
            {'$pull': {fields: {_id: objectId(fieldId)}}});
    }

    deleteAllFields(tableId) {
        return this.model.update(
            {_id: objectId(tableId)},
            {'$pull': {fields: {}}});
    }
}

module.exports = new TableRepository();
