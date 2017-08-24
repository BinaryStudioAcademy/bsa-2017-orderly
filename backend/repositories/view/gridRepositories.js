const Grid = require('../../schemas/view/gridSchema');
const Repository = require('../generalRepository');

class GridRepository extends Repository {
    constructor() {
        super();
        this.model = Grid;
    }

    addField(viewId, gridFieldData) {
        return this.model.findByIdAndUpdate(viewId,
            {'$push': {'fields_config': gridFieldData}},
            {'new': true});
    }

    updateField(viewId, fieldId, gridFieldData) {
        return this.model.findOneAndUpdate(
            {_id: viewId, 'fields_config._id': fieldId},
            {$set: {'fields_config.$': gridFieldData}},
            {'new': true});
    }

    deleteField(viewId, fieldId) {
        return this.model.findByIdAndUpdate(viewId,
            {'$pull': {'fields_config': {_id: fieldId}}},
            {'new': true});
    }

}

module.exports = new GridRepository();
