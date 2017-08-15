require('../../db/dbConnect');
const Repository = require('../generalRepository');
const Table = require('../../schemas/table/Table');
const objectId = require('mongoose').Types.ObjectId;

class TableRepository extends Repository {

    constructor() {
        super();
        this.model = Table;
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

    updateRecord(tableId, record) {
        return this.model.findByIdAndUpdate(
            tableId,
            {'$push': {records: record._id}},
            {'new': true}
        );
    }

    pullRecord(tableId, recordId) {
        return this.model.findByIdAndUpdate(
            tableId,
            {'$pull': {records: recordId}}
        );
    }

    linkView(tableId, viewId) {
        return this.model.findByIdAndUpdate(
            tableId,
            {'$push': {views: viewId}},
            {'new': true}
        );
    }

    unlinkView(tableId, viewId) {       //remove
        return this.model.findByIdAndUpdate(
            tableId,
            {'$pull': {views: viewId}}
        );
    }

}

module.exports = new TableRepository();
