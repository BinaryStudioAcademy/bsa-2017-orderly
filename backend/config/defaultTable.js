const defaultTable = {
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
    ],
};

module.exports = {
    defaultTable
};