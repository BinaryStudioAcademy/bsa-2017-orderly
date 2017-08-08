const router = require('express').Router();
const teamRepository = require('../../repositories/team/teamRepository');

router.get('/', (req, res) => {
    teamRepository.getAll().then((teams) => {
        res.status(200).send(teams);
    }).catch((err) => {
        res.status(500).send(`Can not get teams list\n${err}`);
    });
});

router.get('/:id', (req, res) => {
    const teamId = req.params.id;
    teamRepository.getById(teamId).then((team) => {
        if (team) {
            res.status(200).send(team);
        } else {
            res.status(400).send(`No team with id ${teamId}`);
        }
    }).catch((err) => {
        res.status(500).send(`Can not get team ${teamId}\n${err}`);
    });
});

router.post('/', (req, res) => {
    const teamObj = req.body;
    teamRepository.add(teamObj).then((team) => {
        res.status(200).send(`Created ${team.name}`);
    }).catch((err) => {
        res.status(500).send(`Can not create team ${req.body.name}\n${err}`);
    })
    ;
});

router.delete('/:id', (req, res) => {
    const teamObj = req.params.id;
    teamRepository.remove(teamObj).then((result) => {
        if (result.n) {
            res.status(200).send(`Team deleted:\n${result}`);
        } else {
            res.status(400).send(`No team with ID ${teamObj}`);
        }
    }).catch((err) => {
        res.status(500).send(`Can not delete team, ${err}`);
    });
});

router.put('/:id', function (req, res) {
    const teamObj = req.body;
    const teamId = req.params.id;
    teamRepository.update(teamId, teamObj).then((result) => {
        if (result) {
            res.status(200).send(`Team ${teamId} updated:\n${result}`);
        } else {
            res.status(400).send(`No team with ID ${teamId}`);
        }
    }).catch((err) => {
        res.status(500).send(`Can not update team ${teamId}\n${err}`);
    });
});

module.exports = router;
