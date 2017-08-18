require('../../db/dbConnect');
const Repository = require('../generalRepository');
const Base = require('../../schemas/base/baseSchema');

class BaseRepository extends Repository {
    constructor() {
        super();
        this.model = Base;
    }

    addTableToBase(baseId, tableId) {
        return this.model.findByIdAndUpdate(
            baseId,
            {'$push': {tables: tableId}},
            {'new': true}
        );
    }
}

module.exports = new BaseRepository();
