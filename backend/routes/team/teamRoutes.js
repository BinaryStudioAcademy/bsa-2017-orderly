const router = require('express').Router();
const teamRepository = require('../../repositories/team/teamRepository');

router.get('/', (req, res) => {
    teamRepository.getAll().then((teams) => {
        res.status(200).send(teams);
    }).catch((err) => {
        res.status(500).send(err);
    });
});

router.get('/:id', (req, res) => {
    teamRepository.getById(req.params.id).then((team) => {
        res.status(team ? 200: 400).send(team);
    }).catch((err) => {
        res.status(500).send(err);
    });
});

router.post('/', (req, res) => {
    teamRepository.add(req.body).then((team) => {
        res.status(200).send(team);
    }).catch((err) => {
        res.status(500).send(err);
    })
    ;
});

router.delete('/:id', (req, res) => {
    teamRepository.remove(req.params.id).then((result) => {
        res.status(200).send(result);
    }).catch((err) => {
        res.status(500).send(err);
    });
});

router.put('/:id', function (req, res) {
    teamRepository.update(req.params.id, req.body).then((result) => {
        res.status(result ? 200 : 400).send(result);
    }).catch((err) => {
        res.status(500).send(err);
    });
});

module.exports = router;
