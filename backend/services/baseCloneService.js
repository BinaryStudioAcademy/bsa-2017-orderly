const mongoose = require('mongoose');

// let objectCloneFunc = (obj) => {
//     let copiedObjectWithId = JSON.parse(JSON.stringify(obj));

//     if (copiedObjectWithId != null && typeof(copiedObjectWithId) != 'string' &&
//     typeof(copiedObjectWithId) != 'number' && typeof(copiedObjectWithId) != 'boolean' ) {
//         if (typeof(copiedObjectWithId.length) == 'undefined') { 
//           delete copiedObjectWithId._id;
//           for (let key in copiedObjectWithId) {
//             objectClone(copiedObjectWithId[key]);
//           }
//         }
//         else {
//           for (let i = 0; i < copiedObjectWithId.length; i++) {
//             objectClone(copiedObjectWithId[i]);
//           }
//         }
//   }
//   return copiedObjectWithId
// } 

let baseCopy = (base) => {
    let newBase = Object.assign({}, base);
    newBase.tables = [];
    delete newBase._id;

    return newBase
}

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


module.exports = { baseCopy, tablesCopy }