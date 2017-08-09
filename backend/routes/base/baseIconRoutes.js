const router = require('express').Router();
const baseIconRepository = require('../../repositories/base/baseIconRepository');

router.get('/', (req, res) => {
    baseIconRepository.getAll().then((icons) => {
        res.status(200).send(icons);
    }).catch((err) => {
        res.status(500).send(err);
    });
});

router.get('/:id', (req, res) => {
    baseIconRepository.getById(req.params.id).then((icon) => {
        res.status(icon ? 200 : 400).send(icon);
    }).catch((err) => {
        res.status(500).send(err);
    });
});

router.post('/', (req, res) => {
    baseIconRepository.add(req.body).then((icon) => {
        res.status(200).send(icon);
    }).catch((err) => {
        res.status(500).send(err);
    })
    ;
});

router.delete('/:id', (req, res) => {
    baseIconRepository.remove(req.params.id).then((result) => {
        res.status(200).send(result);
    }).catch((err) => {
        res.status(500).send(err);
    });

});

router.put('/:id', function (req, res) {
    baseIconRepository.update(req.params.id, req.body).then((result) => {
        res.status(result ? 200 : 400).send(result);
    }).catch((err) => {
        res.status(500).send(err);
    });
});

module.exports = router;
