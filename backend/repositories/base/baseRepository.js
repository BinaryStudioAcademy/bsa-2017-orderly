require('../../db/dbConnect');
const ObjectId = require('mongoose').Types.ObjectId
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

	deleteTableFromBase(tableId) {
    	const Base = this.model
    	return Base.find({
		    'tables': { $in: [tableId] }
	    })
		    .then(base => Base.findByIdAndUpdate(
				    base[0]._id,
				    { $pull: { tables: tableId }},
				    {'new': true}
			    ))
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
        return this.model.findByIdAndUpdate(
            baseId,
            {tables: newTables}
        )
    }
}

module.exports = new BaseRepository();
