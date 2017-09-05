const async = require('async');
const teamRepository = require('../repositories/team/teamRepository');
const tableRepository = require('../repositories/table/tableRepository');
const formRepository = require('../repositories/view/formRepositories');
const galleryRepository = require('../repositories/view/galleryRepositories');
const gridRepository = require('../repositories/view/gridRepositories');
const kanbanRepository = require('../repositories/view/kanbanRepositories');
const baseRepository = require('../repositories/base/baseRepository');
//const locus = require('locus')
const R = require('ramda');

let tablesCopy = (tables) => {
    let newTables = tables.map(table => {
         delete table._id
         table.views.map(view => {
            delete view._id
            //delete view.view._id
            // view.view.fields_config.map(config => {
            //     delete config._id
            //     return config
            // })
            return view
         })
         table.fields.map(field => {
            delete field._id
            return field
         })
         table.records.map(record => {
            delete record._id
            record.record_data.map(data => {
                delete data._id
                return data
            })
            return record
         })
         return table
    })
    return newTables
} 

let baseCopy = (baseToCopy) => {
    let newBase = Object.assign({}, baseToCopy);

    return tableRepository.getByIds(newBase.tables)
    .then((tables) => tables.map((table) => {
        delete table._id
        return table
    }))
    .then((tables) => {
        console.log(tables)
    
        // let newTables =[...tables]
        // delete newTables[0]._id
        // console.log('aaaa', tables[0]._id)
        // return newTables
        // for (let table in newTables) {
        //     delete newTables[table]._id
        // }
            // table.views.map(view => {
            //     delete view._id
            //     return view
            // })
            // table.fields.map(field => {
            //     delete field._id
            //     return field
            // })
            // table.records.map(record => {
            //     delete record._id
            //     record.record_data.map(data => {
            //         delete data._id
            //         return data
            //    })
            //     return record
            // })
            // return table
    //})
        let promiseArray = [];
        let i = 0
        let newBase = Object.assign({}, baseToCopy);
        delete newBase._id;
        newBase.tables = [];
        promiseArray[i] = baseRepository.add(newBase);
        for ( let table in tables ) {
         promiseArray[++i] = tableRepository.add(tables[table])
        }
        return Promise.all(promiseArray)
    })
    .then(([base, ...table]) => baseRepository.addTablesToBase(base._id, table))
}



module.exports = { baseCopy, tablesCopy }