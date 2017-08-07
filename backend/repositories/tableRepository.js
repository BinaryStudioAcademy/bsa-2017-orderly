require('../db/dbConnect');
const Repository = require('./generalRepository');
const Table = require('../schemas/Table');

class TableRepository extends Repository {

    constructor() {
        super();
        this.model = Table;
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

    addField(tableId, field) {
        return this.model.findByIdAndUpdate(
            tableId,
            {'$push': {fields: field._id}},
            {'new': true}
        );
    }

    pullField(tableId, fieldId) {
        return this.model.findByIdAndUpdate(
            tableId,
            {'$pull': {fields: fieldId}}
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
