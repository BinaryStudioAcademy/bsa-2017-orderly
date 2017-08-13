const getBaseById = (_id, tableId) => {
    return {
        type: 'GET_BASE',
        _id: _id,
        tableId: tableId
    };
};

const getTables = () => {
    return {
        type: 'GET_TABLES'
    };
};

const setActive = (tableId) => {
    return {
        type: 'SET_ACTIVE_TAB',
        tableId: tableId
    };
};

const addTable = ({name, baseId}) => {
    return {
        type: 'ADD_TABLE',
        name: name,
        baseId: baseId
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
    setActive,
    addTable,
    switchTable
};
