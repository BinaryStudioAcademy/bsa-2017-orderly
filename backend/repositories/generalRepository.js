require('../db/dbConnect');

class Repository {
    constructor() {
        this.model = null;
    }

    add(data) {
        return new this.model(data).save();
    }

    getById(id) {
        return this.model.findById(id);
    }

    getbyIds(ids) {
        return this.model.find({'_id': { $in: ids}});
    }

    getAll() {
        return this.model.find();
    }

    update(id, body) {
        return this.model.findByIdAndUpdate(id, body, {'new': true});
    }

    remove(id) {
        return this.model.remove({_id: id});
    }
}

module.exports = Repository;