const dbConnect = require('../../db/dbConnect');
const Repository = require('../generalRepository');
const Kanban = require('../../schemas/view/kanbanSchema');
///const Table = require('../../schemas/tableSchema');

class KanbanRepository extends Repository {

    constructor() {
        super();
        this.model = Kanban;
        ///this.table = Table;
    }

    getById(viewId, callback) {
        const query = this.model.findOne({_id: viewId});
        query.exec(callback);
    };

    add(tableId, kanbanViewData, callback) {
        const newKanbanViewData = new this.model(kanbanViewData);
        newKanbanViewData.save(function(err, data) {
            if (!err){
                // ToDo: add addView method in Table Repository
                // this.table.addView(tableId, data, callback);
                callback(null, data);
            } else {
                callback(err, null);
            }
        });
    };

    findOneAndUpdate(viewId, kanbanViewData, callback) {
        const query = this.model.update({_id: viewId}, kanbanViewData);
        query.exec(callback);
    };

    findOneAndDelete(tableId, viewId, callback) {
        // ToDo: add removeView method in Table Repository
        /*this.table.removeView(tableId, viewId, function(err, data) {
            if (!err){
                const query = this.model.remove({_id: viewId});
                query.exec(callback);
            } else {
                callback(err, null);
            }
        });*/
    };


    addColumn(viewId, kanbanColumnData, callback) {
        const query = this.model.update({_id: viewId},{
            $push: {'columns_config': kanbanColumnData}
        });
        query.exec(callback);
    };

    findOneColumnAndUpdate(viewId, columnId, kanbanColumnData, callback) {
        const query = this.model.update({
            _id: viewId,
            'columns_config._id': columnId
        }, {
            $set:{
                'columns_config.$.name': kanbanColumnData.name,
                'columns_config.$.position': kanbanColumnData.position,
                'columns_config.$.included': kanbanColumnData.included
            }
        });
        query.exec(callback);

    };

    findOneColumnAndDelete(viewId, columnId, callback) {
        const query = this.model.update({_id: viewId},{
            $pull: { 'columns_config': { _id: columnId } } }
        );
        query.exec(callback);
    };
}

module.exports = new KanbanRepository();