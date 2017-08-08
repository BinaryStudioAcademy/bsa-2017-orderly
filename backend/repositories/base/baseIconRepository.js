require('../../db/dbConnect');
const Repository = require('../generalRepository');
const baseIcon = require('../../schemas/base/baseIconSchema');

class BaseRepository extends Repository{
    constructor() {
        super();
        this.model = baseIcon;
    }

    getAll() {
        return this.model.find().exec();
    }

    getById(id) {
        return this.model.findById(id);
    }

    add(iconData) {
        const icon = new this.model(iconData);
        return icon.save(icon);
    }

    remove(id) {
        return this.model.findOneAndRemove({_id: id});
    }

    update(id, iconData) {
        return this.model.findOneAndUpdate({_id: id}, {$set: iconData}, {'new': true});
    }
}

module.exports = new BaseRepository();
