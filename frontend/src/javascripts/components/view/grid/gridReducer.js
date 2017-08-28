import {SORT_RECORDS, FILTER_RECORDS} from "./gridActions";

const initialState = {
    sortedRecords: [],
    filteredRecords: [],
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
        console.log('GRID REDUCER FILTER RECORDS');
        console.log(action);
        console.log('---------------------------');
        return {...state};
    }
    default:
        return state;
    }
}
