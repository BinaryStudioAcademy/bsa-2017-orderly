const getBaseById = (_id) => {
    return {
        type: 'GET_BASE',
        _id: _id
    };
};

const getTables = () => {
    return {
        type: 'GET_TABLES'
    };
};

// const getTableById = (_id) => {
//     return {
//         type: 'GET_TABLE_BY_ID',
//         _id: _id
//     };
// };

// const getTablesByIds = (tables) => {
//     return {
//         type: 'GET_TABLES_BY_IDS_SUCCEEDED',
//         tables: tables
//     };
// };

const addTable = (name) => {
    return {
        type: 'ADD_TABLE',
        name: name
    };
};

const switchTable = (_id) => {
    return {
        type: 'SWITCH_TABLE',
        _id: _id
    };
};

export {
    getBaseById,
    getTables,
    // getTableById,
    // getTablesByIds,
    addTable,
    switchTable
};
