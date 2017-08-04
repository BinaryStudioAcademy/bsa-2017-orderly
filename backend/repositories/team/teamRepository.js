require('../../db/dbConnect');
const Repository = require('../generalRepository');
const Team = require('../../schemas/team/teamSchema');

class TeamRepository extends Repository{
    constructor() {
        super();
        this.model = Team;
    }

    getAll() {
        return this.model.find().exec();
    }

    getById(id) {
        return this.model.find(id).exec();
    }

    add(teamData) {
        const team = new this.model(teamData);
        return team.save(team);
    }

    remove(id) {
        return this.model.findOneAndRemove(id);
    }

    update(id, teamData) {
        return this.model.findOneAndUpdate(id, {$set: teamData}, {'new': true});
    }
}

module.exports = new TeamRepository();
