import {SORT_RECORDS, FILTER_RECORDS, REMOVE_FILTER} from "./gridActions";

const initialState = {
    sortedRecords: null,
    filteredRecords: null,
};

export default function gridReducer(state = initialState, action) {
    switch (action.type){
    case SORT_RECORDS: {
        console.log('GRID REDUCER SORT RECORDS');
        console.log(action);
        console.log('-------------------------');
        return {...state};
    }
    case FILTER_RECORDS: {
        const index = action.table.fields.findIndex((f) => f._id === action.fieldId);
        const filtered = action.table.records.filter((r) => r.record_data[index].data.includes(action.filterQuery));
        return {...state, filteredRecords: filtered};
    }
    case REMOVE_FILTER: {
        return {...state, filteredRecords: null};
    }
    default:
        return state;
    }
}
