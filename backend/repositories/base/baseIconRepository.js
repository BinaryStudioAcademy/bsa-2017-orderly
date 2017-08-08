require('../../db/dbConnect');
const Repository = require('../generalRepository');
const baseIcon = require('../../schemas/base/baseIconSchema');

class BaseRepository extends Repository {
    constructor() {
        super();
        this.model = baseIcon;
    }
}

module.exports = new BaseRepository();
