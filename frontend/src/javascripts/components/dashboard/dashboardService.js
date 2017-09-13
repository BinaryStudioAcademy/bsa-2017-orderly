import R from 'ramda'

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

const getRoleByUserId = (userId, members) => {
	if (!userId || R.isEmpty) return
	debugger
	return R.prop('role')(R.find(R.propEq('userId', userId))(members))
}

export {
    formatFieldsRecords,
    setName,
	getRoleByUserId
};