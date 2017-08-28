const R = require('ramda');
const router = require('express').Router();

const teamRepository = require('../../repositories/team/teamRepository');
const baseRepository = require('../../repositories/base/baseRepository');
const tableRepository = require('../../repositories/table/tableRepository');
const { defaultTeam, defaultTable } = require('../../config/defaultEntities');

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
    teamRepository.remove(req.params.id)
        .then((result) => res.status(200).send(result))
        .catch((err) => res.status(500).send(err))
});

router.put('/:id', function (req, res) {
    teamRepository.update(req.params.id, req.body)
        .then((result) => {
        res.status(result ? 200 : 400).send(result);
    }).catch((err) => {
        res.status(500).send(err);
    });
});

router.get('/:teamId/base', (req, res) => {
    teamRepository.getById(req.params.teamId)
        .then((team) => baseRepository.getByIds(team.bases))
        .then((bases) => res.status(200).send(bases))
        .catch((err) => res.status(500).send(err))
})

router.post('/:teamId/base', (req, res) => Promise.all([
        baseRepository.add(req.body),
        tableRepository.add(defaultTable())
    ])
    .then( ([base, table]) => baseRepository.addTableToBase(base._id, table._id))
    .then( (result) => teamRepository.addBaseToTeam(req.params.teamId, result._id))
	.then((team) => res.status(200).send(team))
	.catch((err) => res.status(500).send(err))
);

router.get('/user/:userId', (req, res) => {
    teamRepository.getByOwner(req.params.userId)
        .then((result) => {
            if (R.isEmpty(result)) {
                return [teamRepository.add(defaultTeam(req.params.userId))];
            }
            else return result
        })
        .then((teams) => res.status(200).send(teams))
        .catch((err) => res.status(500).send(err))
});

module.exports = router;
