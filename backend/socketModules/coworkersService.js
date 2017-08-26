const coworkers = {};

module.exports = {
    addCoworker: (user, tableId, callback) => {
        if (!coworkers[tableId]) {
            coworkers[tableId] = {};
        }
        if (user) {
            coworkers[tableId][user._id] = user;
        }
        callback(coworkers[tableId]);
    },

    removeCoworker:(userId, tableId, callback) => {
        if (coworkers[tableId] && coworkers[tableId][coworkers[tableId]]) {
            delete coworkers[tableId][userId];
        }
        callback(coworkers[tableId]);
    }
};


