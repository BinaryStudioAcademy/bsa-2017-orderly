require('../../db/dbConnect');
const Form = require('../../schemas/view/formSchema');

const add = (form) => new Form(form).save();

const getById = (viewId) => Form.findById(viewId);

const getAll = () => Form.find({});

const update = (viewId, formViewData) => Form.findByIdAndUpdate({_id: viewId}, formViewData);

const deleteForm = (viewId) => Form.findByIdAndRemove(viewId);

const addField = (viewId, formFieldData) =>
    Form.findByIdAndUpdate(viewId,
        {'$push': {'fields_config': formFieldData}},
        {'new': true});

const updateField = (viewId, fieldId, formFieldData) =>
    Form.findOneAndUpdate({
        _id: viewId,
        'fields_config._id': fieldId},
        {
        $set:{
            'fields_config.$.name': formFieldData.name,
            'fields_config.$.position': formFieldData.position,
            'fields_config.$.included': formFieldData.included
        }
    });

const deleteField = (viewId, fieldId) =>
    Form.findByIdAndUpdate(viewId, {'$pull': { 'fields_config': { _id: fieldId } }});

module.exports = {
    add,
    getById,
    getAll,
    update,
    deleteForm,
    addField,
    updateField,
    deleteField
};