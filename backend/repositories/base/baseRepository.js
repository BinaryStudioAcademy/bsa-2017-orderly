require('../../db/dbConnect');
const Repository = require('../generalRepository');
const Base = require('../../schemas/base/baseSchema');

class BaseRepository extends Repository {
    constructor() {
        super();
        this.model = Base;
    }

    remove(id) {
        return this.model.findByIdAndRemove(id);
    }

    addTableToBase(baseId, tableId) {
        return this.model.findByIdAndUpdate(
            baseId,
            {'$push': {tables: tableId}},
            {'new': true}
        );
    }
    addTablesToBase(baseId, tables) {
        let newTables = []
        for ( let table in tables) {
            newTables[table] = tables[table]._id
        }
        console.log(newTables)
        return this.model.findByIdAndUpdate(
            baseId,
            {tables: newTables}
        )
    }
}

module.exports = new BaseRepository();
