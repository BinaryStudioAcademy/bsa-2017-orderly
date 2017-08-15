const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const tableSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String
    },
    records: [{
	    record_data: [{
		    data: String
	    }],
	    history: [{
		    collaborator: {
			    type: Schema.Types.ObjectId,
			    ref: 'User'
		    },
		    changes: {
			    changed_from: {
				    type: String
			    },
			    changed_to: {
				    type: String
			    }
		    }
	    }],
	    comments: [{
		    collaborator: {
			    type: Schema.Types.ObjectId,
			    ref: 'User'
		    },
		    message: {
			    type: String
		    }
	    }]
    }],
    fields: [{
        type: Schema.Types.ObjectId,
        ref: 'Field'
    }],
    views: [{
        type: Schema.Types.ObjectId,
        ref: 'View'
    }]
}, {versionKey: false});


module.exports = mongoose.model('table', tableSchema);