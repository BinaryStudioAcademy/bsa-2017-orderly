const Grid = require('../../schemas/view/gridSchema');
const Repository = require('../generalRepository');

class GridRepository extends Repository {
    constructor() {
        super();
        this.model = Grid;
    }

    addField(viewId,gridFieldData) {
        return this.model.findByIdAndUpdate(viewId,
            {'$push': {'fields_config': gridFieldData}},
            {'new': true});
    }

    updateField(viewId, fieldId, gridFieldData) {
        return this.model.findOneAndUpdate({
            _id: viewId,
            'fields_config._id': fieldId},
        {
            $set:{
                'fields_config.$.name': gridFieldData.name,
                'fields_config.$.position': gridFieldData.position,                
                'fields_config.$.hidden': gridFieldData.hidden,
                'fields_config.$.fixed_area': gridFieldData.fixed_area,
                'fields_config.$.size': gridFieldData.size
            }
        });
    }

    deleteField(viewId, fieldId) {
        return this.model.findByIdAndUpdate(viewId, {'$pull': { 'fields_config': { _id: fieldId } }});
    }

}

module.exports = new GridRepository();