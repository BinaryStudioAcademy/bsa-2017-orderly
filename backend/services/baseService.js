const async = require('async');
const teamRepository = require('../repositories/team/teamRepository');
const tableRepository = require('../repositories/table/tableRepository');
const formRepository = require('../repositories/view/formRepositories');
const galleryRepository = require('../repositories/view/galleryRepositories');
const gridRepository = require('../repositories/view/gridRepositories');
const kanbanRepository = require('../repositories/view/kanbanRepositories');
const baseRepository = require('../repositories/base/baseRepository');

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
    newBase.tables = [];
    delete newBase._id;
    let promiseArray=[];
    let i = 0

    // promiseArray[i] = baseRepository.add(newBase)
    // for ( let table in base.tables ) {
    //      promiseArray[++i] = tableRepository.add(base.tables[table])
    //      //console.log(promiseArray)
    // }

   // return tableRepository.getByIds(base.tables)
   //  .then((tables) => tablesCopy(tables))
   //  .then((tables) =>  baseRepository.add(newBase))
   //  .then(([base, tables]) => Promise.all(promiseArray))
   //  .then((base) => baseRepository.addTablesToBase(base._id, table))
    //.then((base) => teamRepository.addBaseToTeam(req.body.teamId, base._id))
     // let baseTables;
     //  tableRepository.getByIds(newBase.tables)
     //  .then(([...tables]) => {
     //    //console.log(tables)
     //     //tables = [...tables];
     //     baseTables = [...tables]
     //     console.log(baseTables)
     //  })
    //    console.log(baseTables)

        return baseRepository.add(newBase)
        .then((base) => { 
            let payload = {}; 
            payload.base = base; 
            tableRepository.getByIds(baseToCopy.tables)
            .then((tables) => tablesCopy(tables))
            .then((tables) => payload.tables = tables)
            return payload
        })
        .then((payload) => {
            let array = []
            for ( let table in payload.tables ) {
             array[table] = tableRepository.add(payload.tables[table])
            }
            return Promise.all(array)
        })
        
}



module.exports = { baseCopy, tablesCopy }