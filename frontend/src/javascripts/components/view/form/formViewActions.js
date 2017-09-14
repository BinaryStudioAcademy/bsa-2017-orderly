export const INCLUDE_FIELD = 'INCLUDE_FIELD';
export const EXCLUDE_FIELD = 'EXCLUDE_FIELD';
export const INCLUDE_ALL = 'INCLUDE_ALL';
export const EXCLUDE_ALL = 'EXCLUDE_ALL';
export const GET_CURRENT_TABLE_AND_VIEW = 'GET_CURRENT_TABLE_AND_VIEW';
export const BLUR_RECORD = 'BLUR_RECORD';
export const UPDATE_TABLE_BY_FORM_DATA = 'UPDATE_TABLE_BY_FORM_DATA';
export const CHANGE_FORM_NAME = 'CHANGE_FORM_NAME';
export const CHANGE_FORM_DESCRIPTION = 'CHANGE_FORM_DESCRIPTION';
export const UPLOAD_FILES = 'UPLOAD_FILES';
export const DELETE_FILE = 'DELETE_FILE';


export function updateableByFormData(tableId, table) {
    return {
        type: UPDATE_TABLE_BY_FORM_DATA,
        tableId: tableId,
        table: table
    };
}

export function changeRecord (tableId, recordId, data, user) {
    return {
        type: 'CHANGE_RECORD',
        tableId: tableId,
        recordId: recordId,
        data: data,
        user: user
    };
};

export function uploadAttachment (data, typeOfFile, record_dataId, tableId) {
    return {
        type: UPLOAD_FILES,
        data: data,
        typeOfFile: typeOfFile,
        record_dataId: record_dataId,
        tableId: tableId
    }
}

export function deleteFile (typeOfFile, record_dataId, tableId, fileNamesStr) {
    return {
        type: DELETE_FILE,
        typeOfFile: typeOfFile,
        record_dataId: record_dataId,
        tableId: tableId,
        fileNamesStr: fileNamesStr
    }
}

export function updateFormName(name, tableId, viewId) {
    return {
        type: CHANGE_FORM_NAME,
        viewId: viewId,
        tableId: tableId,
        name: name
    };
}

export function updateFormDescription(description, tableId, viewId) {
    return {
        type: CHANGE_FORM_DESCRIPTION,
        viewId: viewId,
        tableId: tableId,
        description: description
    };
}

export function putRecordInState(recordData, index) {
    return {
        type: BLUR_RECORD,
        recordData: recordData,
        index: index
    };
}

export function getTableAndView(tableId, viewId) {
    return {
        type: GET_CURRENT_TABLE_AND_VIEW,
        tableId: tableId,
        viewId: viewId
    };
}

export function includeField(fieldId, tableId, viewId) {
    return {
        type: INCLUDE_FIELD,
        fieldId: fieldId,
        tableId: tableId,
        viewId: viewId
    };
}

export function excludeField(fieldId, tableId, viewId) {
    return {
        type: EXCLUDE_FIELD,
        fieldId: fieldId,
        tableId: tableId,
        viewId: viewId
    };
}

export function includeAll(fieldIds, tableId, viewId) {
    return {
        type: INCLUDE_ALL,
        fieldIds: fieldIds,
        tableId: tableId,
        viewId: viewId
    };
}

export function excludeAll(fieldIds, tableId, viewId) {
    return {
        type: EXCLUDE_ALL,
        fieldIds: fieldIds,
        tableId: tableId,
        viewId: viewId
    };
}
