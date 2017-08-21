const jwt = require('jsonwebtoken');
const userRepository = require('../repositories/user/userRepository');
const PassportLocalStrategy = require('passport-local').Strategy;
const config = require('../config');

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
        email: email.trim(),
        password: password.trim()
    };

    return userRepository.get({ email: userData.email }, '+password')
        .then((user) => {
            if (!user) {
                const error = new Error('Incorrect email or password');
                error.name = 'IncorrectCredentialsError';
                return done(error);
            }

            // check if a hashed user's password is equal to a value saved in the database
            return user.comparePassword(userData.password, (err, isMatch) => {
                if (err) { return done(err); }
                if (!isMatch) {
                    const error = new Error('Incorrect email or password');
                    error.name = 'IncorrectCredentialsError';

                    return done(error);
                }

                const payload = {
                    sub: user._id
                };

                // create a token string
                const token = jwt.sign(payload, config.jwtSecret);
                const data = {
                    email: user.email,
                    firstName: user.firstName,
                    lastName: user.lastName
                };

                return done(null, token, data);
            });
        })
        .catch((error) => done(error));
});