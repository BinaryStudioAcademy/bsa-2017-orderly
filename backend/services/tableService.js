const R = require('ramda');
const tableRepository = require('../repositories/table/tableRepository');

function tableService () {};

tableService.prototype.getByIds = getByIds;

function getByIds(id, callback) {
    tableRepository.getByIds(id)
    .then((tables) => {
        tables[0].records.forEach((el) => {
            el.record_data.forEach((elem, index) => {
                if (elem.data || (elem.data === 0)) {
                    tables[0].fields[index].count = tables[0].fields[index].count || 0;
                    tables[0].fields[index].count++
                }
                if (tables[0].fields[index].type === 'longtext' || tables[0].fields[index].type === 'text') {
                    if (!tables[0].fields[index].footerTotal) {
                        tables[0].fields[index].footerTotal = 0;
                    }
                    tables[0].fields[index].footerTotal += elem.data.length;
                } else if (tables[0].fields[index].type === 'number' || tables[0].fields[index].type === 'currency' || tables[0].fields[index].type === 'percent') {
                    if (!tables[0].fields[index].footerTotal) {
                        tables[0].fields[index].footerTotal = 0;
                    }
                    tables[0].fields[index].footerTotal += +parseFloat(elem.data) || +elem.data.slice(1);
                } 
            })
        });

        callback(null, tables)
    })
    .catch((error) => callback(error, null));
}

module.exports = new tableService;