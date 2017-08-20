const formatFieldsRecords = (fields, records) => {
    let combined = [];
    for (const [ind, field] of fields.entries()) {
        let fieldRecords = [];
        for (const record of records) {
            fieldRecords.push(record.record_data[ind]);
        }
        combined.push({_id: field._id, name: field.name, type: field.type, records: fieldRecords});
    }
    return combined;
};

const formatRecordRecords = (fields, records) => {
    let combined = [];
    let fieldNames = [];
    let fieldTypes = [];
    for (const field of fields) {
        fieldNames.push(field.name);
        fieldTypes.push(field.type);
    }

    for (const [ind, record] of records.entries()) {
        let recordDataArr = [];
        for (const [index, record_data] of record.record_data.entries()) {
            recordDataArr.push({_id: record_data._id, data: record_data.data,
                                fieldName: fieldNames[index], type: fieldTypes[index]});
        }
        combined.push({_id: record._id, coments: record.comments,
                       history: record.history, record_data: recordDataArr});
    }
    return combined;
};

const debounce = (func, delay) => {
    let inDebounce = undefined;
    return function () {
        let context = this;
        let args = arguments;
        clearTimeout(inDebounce);
        return inDebounce = setTimeout(() => func.apply(context, args), delay);
    };
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
    formatRecordRecords,
    debounce,
    setName
}