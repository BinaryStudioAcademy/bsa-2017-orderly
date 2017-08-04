require('../db/dbConnect');

class Repository {
    constructor() {
        this.model = null;
    }

    add(data) {
        return new this.model(data).save();
    };

    getById(id) {
        return this.model.findById(id);
    };

    getAll() {
        return this.model.find();
    };

    update(id, body) {
        return this.model.update({_id: id}, body);
    };

    remove(id) {
        return this.model.remove({_id: id});
    };

    // ToDo: fix this. Do we really need it?
    deleteMany(array, callback) {
        array.forEach(id => {
            const query = this.model.remove({_id: id});
            query.exec(callback);
        });
    };
}

module.exports = Repository;