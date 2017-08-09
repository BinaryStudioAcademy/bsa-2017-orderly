require('../../db/dbConnect');
const Repository = require('../generalRepository');
const Field = require('../../schemas/table/Field');

class FieldRepository extends Repository {
    constructor() {
        super();
        this.model = Field;
    }

    getByIds(ids) {
        return this.model.find({'_id': {$in: ids}});
    }
}

module.exports = new FieldRepository();
