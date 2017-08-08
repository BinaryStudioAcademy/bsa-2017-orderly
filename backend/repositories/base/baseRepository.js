require('../../db/dbConnect');
const Repository = require('../generalRepository');
const Base = require('../../schemas/base/baseSchema');

class BaseRepository extends Repository{
    constructor() {
        super();
        this.model = Base;
    }

    getAll() {
        return this.model.find().exec();
    }

    getById(id) {
        return this.model.findById(id);
    }

    add(baseData) {
        const base = new this.model(baseData);
        return base.save(base);
    }

    remove(id) {
        return this.model.findOneAndRemove({_id: id});
    }

    update(id, baseData) {
        return this.model.findOneAndUpdate({_id: id}, {$set: baseData}, {'new': true});
    }
}

module.exports = new BaseRepository();
