const R = require('ramda');
const router = require('express').Router();
const baseService = require('../../services/baseService')
const teamRepository = require('../../repositories/team/teamRepository');
const baseRepository = require('../../repositories/base/baseRepository');
const tableRepository = require('../../repositories/table/tableRepository');
const gridViewRepository = require('../../repositories/view/gridRepositories');
const {defaultTeam, defaultTable, defaultGridView, defaultFormView, defaultKanbanView, defaultGalleryView} = require('../../config/defaultEntities');

router.get('/', (req, res) => {
    teamRepository.getAll().then((teams) => {
        res.status(200).send(teams);
    }).catch((err) => {
        res.status(500).send(err);
    });
});

router.get('/:id', (req, res) => {
    teamRepository.getById(req.params.id).then((team) => {
        res.status(team ? 200 : 400).send(team);
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
        .catch((err) => res.status(500).send(err));
});

router.put('/:id', function (req, res) {
    teamRepository.update(req.params.id, req.body)
        .then((result) => {
            res.status(result ? 200 : 400).send(result);
        }).catch((err) => res.status(500).send(err));
});

router.get('/:teamId/base', (req, res) => {
    teamRepository.getById(req.params.teamId)
        .then((team) => baseRepository.getByIds(team.bases))
        .then((bases) => res.status(200).send(bases))
        .catch((err) => res.status(500).send(err));
});

router.post('/:teamId/base', (req, res) => Promise.all(
    [
        baseRepository.add(req.body),
        tableRepository.add(defaultTable()),
        gridViewRepository.add(defaultGridView()),
    ])
    .then(([base, table, view]) => Promise.all(
        [
            baseRepository.addTableToBase(base._id, table._id),
            tableRepository.addView(table._id, view._id, view.type)
        ])
    )
    .then(([base, table]) => teamRepository.addBaseToTeam(req.params.teamId, base._id))
    .then((team) => res.status(200).send(team))
    .catch((err) => res.status(500).send(err))
);

router.post('/:teamId/baseClone', (req, res) => {
    let baseCloned = baseService.baseCopy(req.body.base);

    tableRepository.getByIds(req.body.base.tables)
    .then((tables) => baseService.tablesCopy(tables))
    .then((tables, baseCloned) => {
        let promiseArray = [];
        let i = 0
        promiseArray[i] = baseRepository.add(baseCloned);
        for ( let table in tables ) {
         promiseArray[++i] = tableRepository.add(tables[table])
        }
        return Promise.all(promiseArray)
    })
    .then(([base, ...table]) => baseRepository.addTablesToBase(base._id, table))
    //baseService.baseCopy(req.body.base)
    .then((base) => teamRepository.addBaseToTeam(req.body.teamId, base._id))
    .then((team) => res.status(200).send(team))
    .catch(err => {console.log(err)})
    //.catch((err) => res.status(500).send(err))
});

router.put('/:teamId/collaborators', (req, res) => {
	teamRepository.addCollaboratorToTeam(req.params.teamId, req.body)
		.then(team => res.status(200).send(team))
		.catch(err => res.status(500).send(err))
})

router.delete('/:teamId/collaborators/:userId', (req, res) => {
	teamRepository.removeCollaborators(req.params.teamId, req.params.userId)
		.then(team => res.status(200).send(team))
		.catch(err => res.status(500).send(err))
})

router.put('/:teamId/collaborators/:userId', (req, res) => {
	teamRepository.updateMemberRole(req.params.teamId, req.params.userId, req.body.role)
		.then(team => res.status(200).send(team))
		.catch(err => res.status(500).send(err))
})

router.get('/user/:userId', (req, res) => {
    teamRepository.getByOwner(req.params.userId)
        .then((result) => {
            if (R.isEmpty(result)) {
                return [teamRepository.add(defaultTeam(req.params.userId))];
            }
            else return result;
        })
        .then((teams) => res.status(200).send(teams))
        .catch((err) => res.status(500).send(err));
});

module.exports = router;
