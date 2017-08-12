const User = require('../../schemas/user/User');
const Repository = require('../generalRepository');

class UserRepository extends Repository {
    constructor() {
        super();
        this.model = User;
    }
}

module.exports = new UserRepository();