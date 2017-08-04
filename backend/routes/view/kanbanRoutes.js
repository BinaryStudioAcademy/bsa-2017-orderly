const kanbanRepository = require('../../repositories/view/kanbanRepositories');

module.exports = (app) => {
    app.get('/views/kanban/:viewId', (req, res, next) => {
        kanbanRepository.getById(req.params.viewId, (err, data) => {
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
    app.post('/tables/:tableId/views/kanban', (req, res, next) => {
        const kanbanViewData = req.body;
        kanbanRepository.add(req.params.tableId, kanbanViewData, (err, data) => {
            if (!err){
                res.data = data;
                res.json(res.data);
            } else {
                res.status(400);
                res.end();
            }
        });
    });

    app.put('/views/kanban/:viewId', (req, res, next) => {
        const kanbanViewData = req.body;
        kanbanRepository.findOneAndUpdate(req.params.viewId, kanbanViewData, (err, data) => {
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
    app.delete('/tables/:tableId/views/kanban/:viewId', (req, res, next) => {
        kanbanRepository.findOneAndDelete(req.params.tableId, req.params.viewId, (err, data) => {
            if (!err){
                res.data = data;
                res.json(res.data);
            } else {
                res.status(400);
                res.end();
            }
        });
    });

    app.post('/views/kanban/:viewId/columns', (req, res, next) => {
        const kanbanColumnData = req.body;
        kanbanRepository.addColumn(req.params.viewId, kanbanColumnData, (err, data) => {
            if (!err){
                res.data = data;
                res.json(res.data);
            } else {
                res.status(400);
                res.end();
            }
        });
    });

    app.put('/views/kanban/:viewId/columns/:columnId', (req, res, next) => {
        const kanbanColumnData = req.body;
        kanbanRepository.findOneColumnAndUpdate(req.params.viewId, req.params.columnId, kanbanColumnData, (err, data) => {
            if (!err){
                res.data = data;
                res.json(res.data);
            } else {
                res.status(400);
                res.end();
            }
        });
    });

    app.delete('/views/kanban/:viewId/columns/:columnId', (req, res, next) => {
        kanbanRepository.findOneColumnAndDelete(req.params.viewId, req.params.columnId, (err, data) => {
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