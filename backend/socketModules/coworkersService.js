let coworkers = {};

module.exports = {
    addCoworker: (user, tableId, callback) => {
        if (!coworkers[tableId]) {
            coworkers[tableId] = {};
        }
        if (user) {
            coworkers[tableId][user._id] = user;
        }

        let changes = {};
        changes[tableId] = coworkers[tableId];
        callback(changes);
    },

    coworkerChangeTable: (user, tableId, callback) => {
        let oldTableId;
        for (coworkersTableId in coworkers) {
            for (coworkersUserId in coworkers[coworkersTableId]) {
                if ( coworkers[coworkersTableId].hasOwnProperty(user._id) ) {
                    oldTableId = coworkersTableId;
                    delete coworkers[coworkersTableId][user._id];
                }
            }
        }

        if (!coworkers[tableId]) {
            coworkers[tableId] = {};
        }
        if (user) {
            coworkers[tableId][user._id] = user;
        }

        let changes = {};
        changes[tableId] = coworkers[tableId];
        changes[oldTableId] = coworkers[oldTableId];
        callback(changes);
    },

    removeCoworker:(user, callback) => {
        if (user) {
            let tableId;
            for (coworkersTableId in coworkers) {
                for (coworkersUserId in coworkers[coworkersTableId]) {
                    if (coworkers[coworkersTableId].hasOwnProperty(user._id)) {
                        tableId = coworkersTableId;
                        delete coworkers[coworkersTableId][user._id];
                    }
                }
            }

            if (tableId) {
                if (coworkers[tableId] && coworkers[tableId][user._id]) {
                    delete coworkers[tableId][user._id];
                }

                let changes = {};
                changes[tableId] = coworkers[tableId];
                callback(changes);
            }
        }
    }
};


