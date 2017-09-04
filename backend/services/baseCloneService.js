const mongoose = require('mongoose');


const objectClone = (base, tables, view) => {
    let copiedObjectWithId = JSON.parse(JSON.stringify(base));

    if (copiedObjectWithId != null && typeof(copiedObjectWithId) != 'string' &&
    typeof(copiedObjectWithId) != 'number' && typeof(copiedObjectWithId) != 'boolean' ) {
        if (typeof(copiedObjectWithId.length) == 'undefined') { 
          delete copiedObjectWithId._id;
          for (let key in copiedObjectWithId) {
            objectClone(copiedObjectWithId[key]);
          }
        }
        else {
          for (let i = 0; i < copiedObjectWithId.length; i++) {
            objectClone(copiedObjectWithId[i]);
          }
        }
  }
  //console.log(copiedObjectWithId[3])
  return copiedObjectWithId
} 

// const objectClone = (base, tables, view) => {
//     let newBase = Object.assign({}, base);
//     delete newBase._id;
//     let tablesN = Object.assign({}, newBase.tables);
//     newBase.tables =[]
//     console.log( newBase )
// }


module.exports = objectClone;