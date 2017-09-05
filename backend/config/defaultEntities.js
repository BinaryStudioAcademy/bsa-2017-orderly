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

const defaultViews = {
	grid: {
		type: 'grid',
		name: 'Grid view',
		description: 'Default grid view',
		fixed_area: 1,
	},
	form: {
		type: 'form',
		name: 'Form view',
		description: 'Default form view',
	},
	kanban: {
		type: 'kanban',
		name: 'Kanban view'
	},
	gallery: {
		type: 'gallery',
		name: 'Gallery view'
	}
}


module.exports = {
    defaultTeam,
    defaultTable,
	defaultViews
};
