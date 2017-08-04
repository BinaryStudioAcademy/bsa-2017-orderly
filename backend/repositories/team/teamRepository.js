require('../../db/dbConnect');
let Repository = require('../generalRepository');
let Team = require('../../schemas/team/teamSchema');

class TeamRepository extends Repository{
    constructor() {
        super();
        this.model = Team;
    }

    getAll() {
        return this.model.find().exec();
    }

    getById(id) {
        return this.model.find({id}).exec();
    }

    add(teamData) {
        let team = new this.model(teamData);
        return team.save(team);
    }

    findOneAndDelete(id) {
        return this.model.findOneAndRemove(id);
    }

    findOneAndUpdate(id, teamData) {
        return this.model.findOneAndUpdate(id, {$set: teamData}, {new: true});
    }
}

module.exports = new TeamRepository();