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
			{name: 'Primary field', type: "text"},
			{name: 'Long text', type: 'longtext'},
			{name: 'Number', type: 'number'},
			{name: 'Single select', type: 'select'},
			{name: 'Auto increment', type: 'autonumber',},
			{name: 'URL', type: 'url'}
		]
	}
};

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
	}
}

const defaultView = (defaultSize = 155) => {
	return {
		name: 'Grid view',
		type: 'grid',
		ref: 'grid',
		fields_config: [
			{name: 'Primary field',  size: defaultSize, position: 1,},
			{name: 'Long text',      size: defaultSize, position: 2,},
			{name: 'Number',         size: defaultSize, position: 3,},
			{name: 'Single select',  size: defaultSize, position: 4,},
			{name: 'Auto increment', size: defaultSize, position: 5,},
			{name: 'URL',            size: defaultSize, position: 6,},
		]
	}
}

module.exports = {
    defaultTable,
	defaultTeam,
	defaultView
}