const async = require('async');
const teamRepository = require('../repositories/team/teamRepository');
const tableRepository = require('../repositories/table/tableRepository');
const formRepository = require('../repositories/view/formRepositories');
const galleryRepository = require('../repositories/view/galleryRepositories');
const gridRepository = require('../repositories/view/gridRepositories');
const kanbanRepository = require('../repositories/view/kanbanRepositories');
const baseRepository = require('../repositories/base/baseRepository');
const mongoose = require('mongoose');
const R = require('ramda');


let baseCopy = (baseToCopy) => {
    let newBase = Object.assign({}, baseToCopy);

    return tableRepository.getByIds(newBase.tables)
    .then((tables) => {
        return tables.map(table => { 
            return table.toObject()
            })
        })
    .then((tables) => {
        let newTables = tables.map(table => {
         delete table._id
         table._id = mongoose.Types.ObjectId();
        
         let fields = table.fields.map(field => {
            delete field._id
            field._id = mongoose.Types.ObjectId();            
            return field
         })
         let records = table.records.map(record => {
            delete record._id
            let record_data = record.record_data.map(data => {
                delete data._id
                return data
            })
            let comments = record.comments.map(comment => {
                delete comment._id
                return comment
            })
            let history = record.history.map(history => {
                delete history._id
                return history
            })
            record.record_data = record_data;
            record.comments = comments;
            record.history = history;

            return record
         })
         viewCopy(table)
         table.fields = fields;
         table.records = records;
         return table
        })
    return newTables
    })
    .then((tables) => {
        let promiseArray = [];
        let i = 0
        let newBase = Object.assign({}, baseToCopy);
        delete newBase._id;
        newBase.tables = [];
        newBase.name = `${baseToCopy.name} copy` 
        promiseArray[i] = baseRepository.add(newBase);
        for ( let table in tables ) {
         
         promiseArray[++i] = tableRepository.add(tables[table])
        }
        return Promise.all(promiseArray)
    })
    .then(([base, ...table]) => baseRepository.addTablesToBase(base._id, table))
}


let viewCopy = (table) => {
    let newTable = Object.assign({}, table);

    let gridIds = [], formIds = [], kanbIds = [], gallIds = [];
    let idGr = 0, idF = 0, idK = 0, idGl = 0;
    for (view in newTable.views) {
        if (newTable.views[view].type === 'grid') {
            gridIds[idGr] = newTable.views[view].view._id
            idGr += 1; 
        }
        if (newTable.views[view].type === 'form') {
            formIds[idF] = newTable.views[view].view._id
            idF += 1; 
        }
        if (newTable.views[view].type === 'kanban') {
            kanbIds[idK] = newTable.views[view].view._id
            idK += 1; 
        }
        if (newTable.views[view].type === 'gallery') {
            gallIds[idGl] = newTable.views[view].view._id
            idGl += 1; 
        }
    }
    table.views = [];     
        if (gridIds[0]) {   
            gridRepository.getByIds(gridIds)
            .then((views)  => {
                return views.map(view => { 
                    return view.toObject()
                    })
                })
            .then((views) => {
                 let newViews = views.map(view => {
                 delete view._id
                 let fields_config = view.fields_config.map((config, i) => {
                    delete config._id
                    config.field = newTable.fields[i]._id
                    return config
                    
                 })
                 let filters = view.filters.filterSet.map((filter, i) => {
                    delete filter._id
                    fieldId = newTable.fields[i]._id
                    return filter
                    })
                 view.fields_config = fields_config;
                 view.filters = filters;
                 return view
                })
                return newViews
            })
            .then((views) => {
                let promiseArray =[]
                let i = 0
                for ( let view in views ) {
                 promiseArray[i++] = gridRepository.add(views[view])
                }
                return Promise.all(promiseArray)
            })
            .then((...gridViews)=> tableRepository.pushClonedViewsToTable('grid', newTable._id, gridViews))
        }

        if (formIds[0]) {   
            formRepository.getByIds(formIds)
            .then((views)  => {
                return views.map(view => { 
                    return view.toObject()
                    })
                })
            .then((views) => {
                 let newViews = views.map(view => {
                 delete view._id
                 let fields_config = view.fields_config.map((config, i) => {
                    delete config._id
                    config.field = newTable.fields[i]._id
                    return config
                    
                 })
                 view.fields_config = fields_config;
                 return view
                })
                return newViews
            })
            .then((views) => {
                let promiseArray =[]
                let i = 0
                for ( let view in views ) {
                 promiseArray[i++] = formRepository.add(views[view])
                }
                return Promise.all(promiseArray)
            })
            .then((...formViews)=> tableRepository.pushClonedViewsToTable('form', newTable._id, formViews))
        }

    if (kanbIds[0]) {   
        kanbanRepository.getByIds(kanbIds)
        .then((views)  => {

            return views.map(view => { 
                return view.toObject()
                })
            })
        .then((views) => {
             let newViews = views.map(view => {
             delete view._id
             let fields_config = view.fields_config.map((config, i) => {
                delete config._id
                config.field = newTable.fields[i]._id
                return config
                
             })
             view.fields_config = fields_config;
             return view
            })
            return newViews
        })
        .then((views) => {
            let promiseArray =[]
            let i = 0
            for ( let view in views ) {
             promiseArray[i++] = kanbanRepository.add(views[view])
            }
            return Promise.all(promiseArray)
        })
        .then((...kanbanViews)=> tableRepository.pushClonedViewsToTable('kanban', newTable._id, kanbanViews))
    }
}


module.exports = { baseCopy }