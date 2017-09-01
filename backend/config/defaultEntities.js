const defaultTeam = (userId) => {
    return {
        owner: userId,
        name: 'New Team',
        collaborators: [
            {
                userId: userId,
                role: 'owner'
            }
        ]
    };
};

const defaultTable = () => {
    return {
        records: [
            {record_data: [{data: ''}, {data: ''}, {data: ''}, {data: ''}, {data: ''}, {data: ''}]},
            {record_data: [{data: ''}, {data: ''}, {data: ''}, {data: ''}, {data: ''}, {data: ''}]},
            {record_data: [{data: ''}, {data: ''}, {data: ''}, {data: ''}, {data: ''}, {data: ''}]},
            {record_data: [{data: ''}, {data: ''}, {data: ''}, {data: ''}, {data: ''}, {data: ''}]},
            {record_data: [{data: ''}, {data: ''}, {data: ''}, {data: ''}, {data: ''}, {data: ''}]},
            {record_data: [{data: ''}, {data: ''}, {data: ''}, {data: ''}, {data: ''}, {data: ''}]},
        ],
        fields: [
            {name: 'Primary field',  type: "text",       description: 'First field'},
            {name: 'Long text',      type: 'longtext',   description: 'Second field'},
            {name: 'Number',         type: 'number',     description: 'Third field'},
            {name: 'Single select',  type: 'select',     description: 'Forth field'},
            {name: 'Auto increment', type: 'autonumber', description: 'Fifth field'},
            {name: 'URL',            type: 'url',        description: 'Sixth field'}
        ]
    };
};

const defaultView = (defaultSize = 155) => {
    return {
        type: 'grid',
        name: 'Grid view',
        description: 'Default grid view',
        fixed_area: 1,
        fields_config: [
            {size: defaultSize, position: 1, hidden: false},
            {size: defaultSize, position: 2, hidden: false},
            {size: defaultSize, position: 3, hidden: false},
            {size: defaultSize, position: 4, hidden: false},
            {size: defaultSize, position: 5, hidden: false},
            {size: defaultSize, position: 6, hidden: false},
        ]
    };
};

module.exports = {
    defaultTeam,
    defaultTable,
    defaultView
};
