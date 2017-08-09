
const addTable = ({name, id}) => {
    return {
        type: 'ADD_TABLE',
        name: name,
        id: id
    };
};

const switchTable = (id) => {
    return {
        type: 'SWITCH_TABLE',
        id: id
    };
};

export {
    addTable,
    switchTable
};
