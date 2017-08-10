const Gallery = require('../../schemas/view/gallerySchema');
const Repository = require('../generalRepository');

class GalleryRepository extends Repository {
    constructor() {
        super();
        this.model = Gallery;
    }

    addRecords(viewId, galleryRecordsConfigData) {        
        return this.model.findByIdAndUpdate(viewId,
            {'$push': {'records_config': galleryRecordsConfigData}},
            {'new': true});
    }

    updateRecords(viewId, configId, galleryRecordsConfigData) {
        return this.model.findOneAndUpdate({
            _id: viewId,
            'records_config._id': configId},
        {
            $set:{
                'records_config.$.position': galleryRecordsConfigData.position,
                'records_config.$.included_fields': galleryRecordsConfigData.included_fields
            }
        });
    }

    deleteRecords(viewId, configId) {
        return this.model.findByIdAndUpdate(viewId, {'$pull': { 'records_config': { _id: configId } }});
    }

}

module.exports = new GalleryRepository();