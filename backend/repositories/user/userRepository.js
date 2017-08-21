const User = require('../../schemas/user/User');
const Repository = require('../generalRepository');
let currentUser = null;

class UserRepository extends Repository {
    constructor() {
        super();
        this.model = User;
    }

    setCurrentUser(user) {
        currentUser = user;
    }

    getCurrentUser() {
        return currentUser;
    }
}

module.exports = new UserRepository();