var Repository = require('./generalRepository');
var Team = require('../schemas/teamSchema');

function TeamRepository() {
    Repository.prototype.constructor.call(this);
    this.model = Team;
}

TeamRepository.prototype = new Repository();


/*
TeamRepository.prototype.getById = function(id, callback) {
};

TeamRepository.prototype.getAll = function(body, callback) {
};
*/

TeamRepository.prototype.addTeam = function(objTeam, callback) {
    if (objTeam){
        console.log(objTeam);
        callback(objTeam);
    } else {
        callback(new Error('Team is no exist'));
    }
};

/*
TeamRepository.prototype.findOneAndDelete = function(id, callback) {
};

TeamRepository.prototype.findOneAndUpdate = function(id, objTeam, callback) {
};
*/


module.exports = new TeamRepository();