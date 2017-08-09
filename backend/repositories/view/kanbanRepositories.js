const Kanban = require('../../schemas/view/kanbanSchema');
const Repository = require('../generalRepository');

class KanbanRepository extends Repository {
    constructor() {
        super();
        this.model = Kanban;
    }

    addColumn(viewId, kanbanColumnData) {
        return this.model.findByIdAndUpdate(viewId,
            {'$push': {'columns_config': kanbanColumnData}},
            {'new': true});
    }

    updateColumn(viewId, columnId, kanbanColumnData) {
        return this.model.findOneAndUpdate({
            _id: viewId,
            'columns_config._id': columnId},
        {
            $set:{
                'columns_config.$.hidden': kanbanColumnData.hidden
            }
        });
    }

    deleteColumn(viewId, columnId) {
        return this.model.findByIdAndUpdate(viewId, {'$pull': { 'columns_config': { _id: columnId } }});
    }
}

module.exports = new KanbanRepository();