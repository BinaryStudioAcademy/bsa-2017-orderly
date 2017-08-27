require('../../db/dbConnect');
const Repository = require('../generalRepository');
const Team = require('../../schemas/team/teamSchema');

class TeamRepository extends Repository {
    constructor() {
        super();
        this.model = Team;
    }

    getByOwner(userId) {
    	return this.model.find({ owner: userId });
    }

    remove(teamId) {
    	return this.model.findByIdAndRemove(teamId);
    }

    addBaseToTeam(teamId, baseId) {
    	return this.model.findByIdAndUpdate(
    		teamId,
		    {'$push': {bases: baseId}},
		    {'new': true}
	    );
    }
}

module.exports = new TeamRepository();
