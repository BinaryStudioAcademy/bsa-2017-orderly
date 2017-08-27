const defaultSize = 155;
const defaultView = {
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
    ],
};

module.exports = {defaultView};