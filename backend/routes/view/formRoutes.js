const formRepository = require('../../repositories/view/formRepositories');

module.exports = (app) => {
    app.get('/views/form/:viewId', (req, res, next) => {
        formRepository.getById(req.params.viewId, (err, data) => {
            if (!err){
                res.data = data;
                res.json(res.data);
            } else {
                res.status(400);
                res.end();
            }
        });
    });

    //Todo move to TablesRoute ?
    app.post('/tables/:tableId/views/form', (req, res, next) => {
        const formViewData = req.body;
        console.log(req.body);
        formRepository.add(req.params.tableId, formViewData, (err, data) => {
            if (!err){
                res.data = data;
                res.json(res.data);
            } else {
                res.status(400);
                res.end();
            }
        });
    });

    app.put('/views/form/:viewId', (req, res, next) => {
        const formViewData = req.body;
        formRepository.findOneAndUpdate(req.params.viewId, formViewData, (err, data) => {
            if (!err){
                res.data = data;
                res.json(res.data);
            } else {
                res.status(400);
                res.end();
            }
        });
    });

    //Todo move to TablesRoute ?
    app.delete('/tables/:tableId/views/form/:viewId', (req, res, next) => {
        formRepository.findOneAndDelete(req.params.tableId, req.params.viewId, (err, data) => {
            if (!err){
                res.data = data;
                res.json(res.data);
            } else {
                res.status(400);
                res.end();
            }
        });
    });

    app.post('/views/form/:viewId/fields', (req, res, next) => {
        const formFieldData = req.body;
        formRepository.addField(req.params.viewId, formFieldData, (err, data) => {
            if (!err){
                res.data = data;
                res.json(res.data);
            } else {
                res.status(400);
                res.end();
            }
        });
    });

    app.put('/views/form/:viewId/fields/:fieldId', (req, res, next) => {
        const formFieldData = req.body;
        formRepository.findOneFieldAndUpdate(req.params.viewId, req.params.fieldId, formFieldData, (err, data) => {
            if (!err){
                res.data = data;
                res.json(res.data);
            } else {
                res.status(400);
                res.end();
            }
        });
    });

    app.delete('/views/form/:viewId/fields/:fieldId', (req, res, next) => {
        formRepository.findOneFieldAndDelete(req.params.viewId, req.params.fieldId, (err, data) => {
            if (!err){
                res.data = data;
                res.json(res.data);
            } else {
                res.status(400);
                res.end();
            }
        });
    });
};