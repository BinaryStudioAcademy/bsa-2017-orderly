const dbConnect = require('../../db/dbConnect');
const Repository = require('../generalRepository');
const Form = require('../../schemas/view/formSchema');
///const Table = require('../../schemas/tableSchema');

class FormRepository extends Repository {

    constructor() {
        super();
        this.model = Form;
        ///this.table = Table;
    }

    getById(viewId, callback) {
        const query = this.model.findOne({_id: viewId});
        query.exec(callback);
    };

    add(tableId, formViewData, callback) {
        const newFormViewData = new this.model(formViewData);
        newFormViewData.save(function(err, data) {
            if (!err){
                // ToDo: add addView method in Table Repository
                // this.table.addView(tableId, data, callback);
                callback(null, data);
            } else {
                callback(err, null);
            }
        });
    };

    findOneAndUpdate(viewId, formViewData, callback) {
        const query = this.model.update({_id: viewId}, formViewData);
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


    addField(viewId, formFieldData, callback) {
        const query = this.model.update({_id: viewId},{
            $push: {'fields_config': formFieldData}
        });
        query.exec(callback);
    };

    findOneFieldAndUpdate(viewId, fieldId, formFieldData, callback) {
        const query = this.model.update({
            _id: viewId,
            'fields_config._id': fieldId
        }, {
            $set:{
                'fields_config.$.name': formFieldData.name,
                'fields_config.$.position': formFieldData.position,
                'fields_config.$.included': formFieldData.included
            }
        });
        query.exec(callback);

    };

    findOneFieldAndDelete(viewId, fieldId, callback) {
        const query = this.model.update({_id: viewId},{
            $pull: { 'fields_config': { _id: fieldId } } }
        );
        query.exec(callback);
    };
}

module.exports = new FormRepository();