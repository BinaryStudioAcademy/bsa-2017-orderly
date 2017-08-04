const router = require('express').Router();
const teamRepository = require('../../repositories/team/teamRepository');

router.get('/', (req, res) => {
    teamRepository.getAll().then((teams) => {
        res.send(teams);
    }).catch((err) => {
        res.send(`Can not get teams list\n${err}`);
    });
});

router.get('/:id', (req, res) => {
    teamRepository.getById(req.params.id).then((team) => {
        res.send(team);
    }).catch((err) => {
        res.send(`Can not get team ${req.params.id}\n${err}`);
    });
});

router.post('/', (req, res) => {
    const teamObj = req.body;
    teamRepository.add(teamObj).then((team) => {
        res.send(`Created ${team.name}`);
    }).catch((err) => {
        res.send(`Can not create team ${req.body.name}\n${err}`);
    })
    ;
});

router.delete('/:id', (req, res) => {
    teamRepository.remove(req.params.id).then((result) => {
        res.send(`Team ${req.params.id} deleted:\n${result}`);
    }).catch((err) => {
        res.send(`Can not delete team, ${err}`);
    });

});

router.put('/:id', function (req, res) {
    const teamObj = req.body;
    teamRepository.update(req.params.id, teamObj).then((result) => {
        res.send(`Team ${req.params.id} updated:\n${result}`);
    }).catch((err) => {
        res.send(`Can not update team ${req.params.id}\n${err}`);
    });
});

module.exports = router;
