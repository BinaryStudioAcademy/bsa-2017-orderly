require('../../db/dbConnect');
const Repository = require('../generalRepository');
const Base = require('../../schemas/base/baseSchema');

class BaseRepository extends Repository{
    constructor() {
        super();
        this.model = Base;
    }
}

module.exports = new BaseRepository();
