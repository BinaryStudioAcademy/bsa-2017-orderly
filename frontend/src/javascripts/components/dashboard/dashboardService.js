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
    setName
}