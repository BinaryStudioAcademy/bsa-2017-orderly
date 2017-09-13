require('../../db/dbConnect');
const Repository = require('../generalRepository');
const Team = require('../../schemas/team/teamSchema');
const Base = require('../../schemas/base/baseSchema');

class TeamRepository extends Repository {
    constructor() {
        super();
        this.model = Team;
    }

    getByOwner(userId) {
    	return this.model.find({ owner: userId });
    }

    getByMember(userId) {
    	return this.model.find({'collaborators.userId': userId})
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

	getMembersByBaseId(baseId) {
    	return this.model.find({bases: baseId})
	}

	addCollaboratorToTeam(teamId, user) {
		return this.model.findByIdAndUpdate(
    		teamId,
		    {'$push': { collaborators:user}},
		    {'new': true}
	    );
	}

	removeCollaborators(teamId, userId) {
		return this.model.findByIdAndUpdate(
			teamId,
			{'$pull': {collaborators: {userId: userId}}},
			{'new': true}
		)
	}

	updateMemberRole(teamId, userId, role) {
		return this.model.findOneAndUpdate({
    		_id: teamId,
		    'collaborators.userId': userId
			},
	        {$set: {'collaborators.$.role' : role}},
			{'new': true}
	    )
	}
}

module.exports = new TeamRepository();
