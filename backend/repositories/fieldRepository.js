require('../db/dbConnect');
const Repository = require('./generalRepository');
const Field = require('../schemas/Field');
let that;

class FieldRepository extends Repository {
    constructor() {
        super();
        that = this;
        that.model = Field;
    }

    getByIds(ids) {
        return that.model.find({'_id': {$in: ids}});
    }
}

module.exports = new FieldRepository();
