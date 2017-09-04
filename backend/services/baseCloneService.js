const mongoose = require('mongoose');

const objectClone = (objectToCopy) => {
    let copiedObjectWithId = JSON.parse(JSON.stringify(objectToCopy));
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
  console.log(copiedObjectWithId)
} 

module.exports = {objectClone};