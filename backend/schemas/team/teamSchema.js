const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const teamSchema = new Schema({
    owner: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true,
    },
    collaborators: Array,
    // [
    //     {
    //         userId: {
    //             type: ObjectId,
    //             // required: true
    //         },
    //         role: {
    //             type: String,
    //             enum: [
    //                 "owner",
    //                 "creator",
    //                 "editOnly",
    //                 "readOnly"
    //             ],
    //             // required: true
    //         }
    //     }
    // ],
    bases: Array,
    createdAt:  Date,
}, {versionKey: false});

module.exports = mongoose.model('team', teamSchema);