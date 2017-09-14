const Kanban = require('../../schemas/view/kanbanSchema');
const Repository = require('../generalRepository');

class KanbanRepository extends Repository {
    constructor() {
        super();
        this.model = Kanban;
    }

    addColumn(viewId, kanbanColumnData) {
        return this.model.findByIdAndUpdate(viewId,
            {'$push': {'fields_config': kanbanColumnData}},
            {'new': true});
    }

    updateColumn(viewId, columnId, kanbanColumnData) {
        return this.model.findOneAndUpdate({
            _id: viewId,
            'fields_config._id': columnId},
        {
            $set:{
                'fields_config.$.hidden': kanbanColumnData.hidden
            }
        });
    }

    deleteColumn(viewId, columnId) {
        return this.model.findByIdAndUpdate(viewId, {'$pull': { 'fields_config': { _id: columnId } }});
    }
    getByIds(ids) {
        return this.model.find({'_id': {$in: ids}})
            .populate('views.view');
    }
}

module.exports = new KanbanRepository();