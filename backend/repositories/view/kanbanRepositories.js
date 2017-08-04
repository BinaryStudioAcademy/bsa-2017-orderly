require('../../db/dbConnect');
const Kanban = require('../../schemas/view/kanbanSchema');

const add = (kanban) => new Kanban(kanban).save();

const getById = (viewId) => Kanban.findById(viewId);

const getAll = () => Kanban.find({});

const update = (viewId, kanbanViewData) => Kanban.findByIdAndUpdate({_id: viewId}, kanbanViewData);

const deleteKanban = (viewId) => Kanban.findByIdAndRemove(viewId);

const addColumn = (viewId, kanbanColumnData) =>
    Kanban.findByIdAndUpdate(viewId,
        {'$push': {'columns_config': kanbanColumnData}},
        {'new': true});

const updateColumn = (viewId, columnId, kanbanColumnData) =>
    Kanban.findOneAndUpdate({
            _id: viewId,
            'columns_config._id': columnId},
        {
            $set:{
                'columns_config.$.hidden': kanbanColumnData.hidden
            }
        });

const deleteColumn = (viewId, columnId) =>
    Kanban.findByIdAndUpdate(viewId, {'$pull': { 'columns_config': { _id: columnId } }});

module.exports = {
    add,
    getById,
    getAll,
    update,
    deleteKanban,
    addColumn,
    updateColumn,
    deleteColumn
};