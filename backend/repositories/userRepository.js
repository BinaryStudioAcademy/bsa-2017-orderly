var Repository = require('./generalRepository');
var User = require('../schemas/User');

function UserRepository() {
	Repository.prototype.constructor.call(this);
	this.model = User;
}

UserRepository.prototype = new Repository();


// UserRepository.prototype.SomeFunction = function() {
// };

module.exports = new UserRepository();