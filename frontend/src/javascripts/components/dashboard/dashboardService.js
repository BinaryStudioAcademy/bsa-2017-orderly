import R from 'ramda';

const formatFieldsRecords = (tables, tableId) => {
    const currentTable = R.find(R.propEq('_id', tableId))(tables);
    let combined = [];
    for (const [ind, field] of currentTable.fields.entries()) {
        let fieldRecords = [];
        for (const record of currentTable.records) {
            fieldRecords.push(record.record_data[ind]);
        }
        combined.push({_id: field._id, name: field.name, type: field.type, records: fieldRecords});
    }
    return combined;
};

const formatExpandRecords = (tables, tableId) => {
    const currentTable = R.find(R.propEq('_id', tableId))(tables);
    /*let combined = [];
    for (const [ind, record] of currentTable.records.entries()) {
        let recordDataArr = [];
        for (const [index, record_data] of record.record_data.entries()) {
            recordDataArr.push({
                _id: record_data._id,
                data: record_data.data,
                fieldName: currentTable.fields[index].name,
                type: currentTable.fields[index].type
            });
        }
        combined.push({_id: record._id, coments: record.comments,
            history: record.history, record_data: recordDataArr});
    }*/

    /*return R.map((record) => {
        return R.mergeAll([
            R.dissoc('record_data', record),
            {
                record_data: R.addIndex(R.map)((recordItem, fieldIndex) => {
                    return {
                        ...recordItem,
                        fieldName: currentTable.fields[fieldIndex].name,
                        type: currentTable.fields[fieldIndex].type
                    };
                })(record.record_data)
            }]);
    })(currentTable.records);*/

    return [];
};

const setName = (activeModal) => {
    switch (activeModal) {
        case 'rename':
            return 'Rename table';
        case 'edit description':
            return 'Edit description';
        case 'duplicate':
            return 'Duplicate table';
        case 'delete':
            return 'Delete table';
    }
};

export {
    formatFieldsRecords,
    formatExpandRecords,
    setName
}