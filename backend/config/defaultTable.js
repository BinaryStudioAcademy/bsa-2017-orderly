const defaultTable = {
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
            name: 'Simple text',
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
};

module.exports = {
    defaultTable
}