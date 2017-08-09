require('../../db/dbConnect');
const Repository = require('../generalRepository');
const Team = require('../../schemas/team/teamSchema');

class TeamRepository extends Repository {
    constructor() {
        super();
        this.model = Team;
    }
}

module.exports = new TeamRepository();
