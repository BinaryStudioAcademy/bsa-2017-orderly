const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId;

const KanbanSchema = new Schema({
    type: {
        type: String,
        enum: ["kanban"],
        default: "kanban",
        required: true
    },
    name: {
        type: String,
        required: true,
        trim: true
    },
    description: String,
	logo: String,
    fields_config: [{
    	field: ObjectId,
	    name: {
    	    type: String,
		    trim: true
	    },
	    isCover: {
    		type: Boolean,
		    default: false
	    },
        isHidden: {
            type: Boolean,
            default: false
        },
        isStacked: {
    		type: Boolean,
	        default: false
        }
    }]
}, {versionKey: false});

KanbanSchema.pre('findOneAndUpdate', function(next) {
    this.options.runValidators = true;
    next();
});

module.exports = mongoose.model('kanban', KanbanSchema);