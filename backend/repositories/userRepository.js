const User = require('../../schemas/userSchema');
const Repository = require('../generalRepository');

class UserRepository extends Repository {
    constructor() {
        super();
        this.model = User;
    }
}

module.exports = new UserRepository();