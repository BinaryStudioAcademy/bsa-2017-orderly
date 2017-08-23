const defaultTable = () => {
	return {
		records: [
			{
				record_data: [
					{data: ''},
					{data: ''},
					{data: ''},
				]
			}
		],
		fields: [
			{
				name: 'Primary field',
				type: "text",
			},
			{
				name: 'Long text',
				type: 'longtext'
			},
			{
				name: 'Number',
				type: 'number',
			}
		],
		views: []
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

module.exports = {
    defaultTable,
	defaultTeam
}