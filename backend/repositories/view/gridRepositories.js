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
        return this.model.findById(viewId)
            .then((view) => {
                const config = view.fields_config.find((f) => f._id.toString() === fieldId);
                config.name = gridFieldData.name || config.name;
                config.size = gridFieldData.size || config.size;
                config.position = gridFieldData.position || config.position;
                config.hidden = gridFieldData.hidden || config.hidden;
                console.log(view);
                return view.save();
            });
    }

    deleteField(viewId, fieldId) {
        return this.model.findByIdAndUpdate(viewId,
            {'$pull': {'fields_config': {_id: fieldId}}},
            {'new': true});
    }

}

module.exports = new GridRepository();
