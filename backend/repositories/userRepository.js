let Repository = require('./generalRepository');
let User = require('../schemas/userSchema');

function UserRepository() {
    Repository.prototype.constructor.call(this);
    this.model = User;
}

UserRepository.prototype = new Repository();

// UserRepository.prototype.SomeFunction = function() {
// };

module.exports = new UserRepository();
