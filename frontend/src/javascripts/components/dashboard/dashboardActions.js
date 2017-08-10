const getTables = () => {
    return {
        type: 'GET_TABLES'
    };
};

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
    getTables,
    addTable,
    switchTable
};
