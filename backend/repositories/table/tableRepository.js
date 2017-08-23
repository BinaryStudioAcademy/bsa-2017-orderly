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

    getRecords(tableId) {
        return this.model.findById(tableId).select('records');
    }

    getOneRecord(tableId, recordId) {
        return this.model.findOne(
            {_id: tableId},
            {
                records: {
                    $elemMatch: {
                        _id: recordId
                    }
                }
            }).select('-_id -views -fields -name -description');
    }

    addRecord(tableId, record) {
        return that.model.findByIdAndUpdate(
            tableId,
            {'$push': {records: record}},
            {'new': true}
        );
    }

    pullRecord(tableId, recordId) {
        return that.model.findByIdAndUpdate(
            tableId,
            {'$pull': {records: {_id: recordId}}},
            {'new': true}
        );
    }

    updateRecords(tableId, data) {
        return this.model.findById(tableId)
            .then((table) => {
                for (let record of table.records) {
                    record.record_data.push(data);
                }
                return table.save();
            });
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
        return this.model.findById(tableId).then((table) => {
            const field = table.fields.find((f) => f._id.toString() === fieldId);
            field.type = data.fieldType || field.type;
            field.name = data.fieldName || field.name;
            if (data.fieldType) {
                let recordIds = data.records.map((r) => r._id);
                table.records.forEach((record) => {
                    record.record_data.map((d) => {
                        if (recordIds.includes(d._id.toString())) {
                            d.data = '';
                        }
                        return d;
                    });
                });
            }
            return table.save();
        });
    }

    updateFields(tableId, data) {
        return this.model.findById(tableId)
            .then((table) => {
                table.records.push({record_data: new Array(table.fields.length).fill(data)});
                return table.save();
            });
    }

    deleteField(tableId, fieldId) {
        return this.model.findById(tableId).then((table) => {
            const deleteAt = table.fields.indexOf(table.fields.find((f) => f._id.toString() === fieldId));
            table.fields.splice(deleteAt, 1);
            table.records.forEach((record) => {
                record.record_data.splice(deleteAt, 1);
            });
            return table.save();
        });
    }

    deleteAllFields(tableId) {
        return this.model.update(
            {_id: objectId(tableId)},
            {'$pull': {fields: {}}});
    }
}

module.exports = new TableRepository();
