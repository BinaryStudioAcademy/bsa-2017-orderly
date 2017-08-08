const router = require('express').Router();
const baseRepository = require('../../repositories/base/baseRepository');

router.get('/', (req, res) => {
    baseRepository.getAll().then((bases) => {
        res.send(bases);
    }).catch((err) => {
        res.send(`Can not get base list\n${err}`);
    });
});

router.get('/:id', (req, res) => {
    baseRepository.getById(req.params.id).then((base) => {
        res.send(base);
    }).catch((err) => {
        res.send(`Can not get base ${req.params.id}\n${err}`);
    });
});

router.post('/', (req, res) => {
    const baseObj = req.body;
    baseRepository.add(baseObj).then((base) => {
        res.send(`Created ${base.name}`);
    }).catch((err) => {
        res.send(`Can not create base ${req.body.name}\n${err}`);
    })
    ;
});

router.delete('/:id', (req, res) => {
    baseRepository.remove(req.params.id).then((result) => {
        res.send(`Base ${req.params.id} deleted:\n${result}`);
    }).catch((err) => {
        res.send(`Can not delete base, ${err}`);
    });

});

router.put('/:id', function (req, res) {
    const baseObj = req.body;
    baseRepository.update(req.params.id, baseObj).then((result) => {
        res.send(`Base ${req.params.id} updated:\n${result}`);
    }).catch((err) => {
        res.send(`Can not update base ${req.params.id}\n${err}`);
    });
});

module.exports = router;
