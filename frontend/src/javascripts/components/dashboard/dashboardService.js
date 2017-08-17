export const formatFieldsRecords = (fields, records) => {
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