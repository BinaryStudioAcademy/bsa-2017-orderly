const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    "email": {
        "type": String,
        "index": { "unique": true },
        "required": true,
        "trim": true
    },
    "password": {
        "type": String,
        "required": true,
        "select": false
    },
    "firstName": {
        "type": String,
        "trim": true
    },
    "lastName": {
        "type": String,
        "trim": true
    },
    "avatar" : {
        "type": String,
        "default": "avatar"
    },
    "country" : {
        "type": String,
        "trim": true
    },
    "city" : {
        "type": String,
        "trim": true
    },
    "address" : {
        "type": String,
        "trim": true
    },
    "phone" : {
        "type": String,
        "trim": true
    },
    "gender" : String,
    "birthday": Date
}, {versionKey: false});

UserSchema.pre('findOneAndUpdate', function(next) {
    this.options.runValidators = true;
    next();
});

/**
 * The pre-save hook method.
 */
UserSchema.pre('save', function saveHook(next) {
    const user = this;

    // proceed further only if the password is modified or the user is new
    if (!user.isModified('password')) return next();

    return bcrypt.genSalt((saltError, salt) => {
        if (saltError) { return next(saltError); }

        return bcrypt.hash(user.password, salt, (hashError, hash) => {
            if (hashError) { return next(hashError); }

            // replace a password string with hash value
            user.password = hash;

            return next();
        });
    });
});

/**
 * Compare the passed password with the value in the database. A model method.
 */
UserSchema.methods.comparePassword = function comparePassword(password, callback) {
    bcrypt.compare(password, this.password, callback);
};

module.exports = mongoose.model('User', UserSchema);