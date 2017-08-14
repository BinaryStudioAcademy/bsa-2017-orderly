const userRepository = require('../repositories/user/userRepository');
const PassportLocalStrategy = require('passport-local').Strategy;

/**
 * Return the Passport Local Strategy object.
 */
module.exports = new PassportLocalStrategy({
    usernameField: 'email',
    passwordField: 'password',
    session: false,
    passReqToCallback: true
}, (req, email, password, done) => {
    const userData = {
        email: email,
        password: password,
        firstName: req.body.firstName,
        lastName: req.body.lastName
    };

    userRepository.add(userData)
        .then((data) => done(null, data))
        .catch((err) => done(err, null));
});