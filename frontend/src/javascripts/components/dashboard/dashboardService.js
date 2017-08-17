const formatFieldsRecords = (fields, records) => {
    let combined = [];
    for (const [ind, field] of fields.entries()) {
        let fieldRecords = [];
        for (const record of records) {
            fieldRecords.push(record.record_data[ind]);
        }
        combined.push({_id: field._id, name: field.name, records: fieldRecords});
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
    debounce,
    setName
}