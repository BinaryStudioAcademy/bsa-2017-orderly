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

    includeExcludeFields(viewId, data) {
        return this.model.findById(viewId).then((view) => {
            view.toObject();
            if (data.type ==='INCLUDE_ALL') {
                view.fields_config.map((config)=> {
                    config.included = true;
                    return config;
                })
            }
            if (data.type ==='EXCLUDE_ALL') {
                view.fields_config.map((config)=> {
                    config.included = false;
                    return config;
                })
            }
            if (data.type ==='INCLUDE_FIELD') {
                view.fields_config.map((config)=> {
                    if (config.field == data.fieldId) {
                        config.included = true;
                    }
                    return config;
                })
            }
            if (data.type ==='EXCLUDE_FIELD') {
                view.fields_config.map((config)=> {
                    if (config.field == data.fieldId) {
                        config.included = false;
                    }
                    return config;
                })
            }
            return view.save();
        });
    }


    deleteField(viewId, fieldId) {
        return this.model.findByIdAndUpdate(viewId,
            {'$pull': { 'fields_config': { _id: fieldId } }},
            {'new': true}
            );
    }
    getByIds(ids) {
        return this.model.find({'_id': {$in: ids}})
            .populate('views.view');
    }

}

module.exports = new FormRepository();