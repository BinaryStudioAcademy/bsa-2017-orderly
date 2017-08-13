const getTables = () => {
    console.log('getTables in action');
    return {
        type: 'GET_TABLES'
    };
};

const addTable = (name) => ({
    type: 'ADD_TABLE',
    name: name
});

const switchTable = (id) => ({
    type: 'SWITCH_TABLE',
    id: id
});

export {
    getTables,
    addTable,
    switchTable
};
