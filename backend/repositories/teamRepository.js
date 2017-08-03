var Repository = require('./generalRepository');
var Team = require('../schemas/teamSchema');

function TeamRepository() {
    Repository.prototype.constructor.call(this);
    this.model = Team;
}

TeamRepository.prototype = new Repository();


/*
UserRepository.prototype.getById = function(id, callback) {
};

UserRepository.prototype.getAll = function(body, callback) {
};

UserRepository.prototype.addTeam = function(objTeam, callback) {
};

UserRepository.prototype.findOneAndDelete = function(id, callback) {
};

UserRepository.prototype.findOneAndUpdate = function(id, objTeam, callback) {
};
*/


module.exports = new TeamRepository();