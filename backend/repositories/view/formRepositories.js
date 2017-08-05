const Form = require('../../schemas/view/formSchema');
const Repository = require('../generalRepository');

class FormRepository extends Repository {
    constructor() {
        super();
        this.model = Form;
    }

    addField(viewId, formFieldData) {
        return this.model.findByIdAndUpdate(viewId,
            {'$push': {'fields_config': formFieldData}},
            {'new': true});
    }

    updateField(viewId, fieldId, formFieldData) {
        return this.model.findOneAndUpdate({
            _id: viewId,
            'fields_config._id': fieldId},
        {
            $set:{
                'fields_config.$.name': formFieldData.name,
                'fields_config.$.position': formFieldData.position,
                'fields_config.$.included': formFieldData.included
            }
        });
    }

    deleteField(viewId, fieldId) {
        return this.model.findByIdAndUpdate(viewId, {'$pull': { 'fields_config': { _id: fieldId } }});
    }

}

module.exports = new FormRepository();