export const CHANGE_FIELD_DATA = 'CHANGE_FIELD_DATA';

export function changeFieldData(data) {
    return {
        type: CHANGE_FIELD_DATA,
        data: data
    };
}

