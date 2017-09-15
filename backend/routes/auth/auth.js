const router = require('express').Router();
const validator = require('validator');
const passport = require('passport');
const crypto = require('crypto');
const userRepository = require('../../repositories/user/userRepository');
const emailService = require ('../../services/emailService');

/*
 * Validate the sign up form
 */
function validateSignupForm(payload) {
    const errors = {};
    let isFormValid = true;
    let message = '';

    if (!payload || typeof payload.email !== 'string' || !validator.isEmail(payload.email)) {
        isFormValid = false;
        errors.email = 'Please provide a correct email address.';
    }

    if (!isValidSignupPassword(payload)) {
        isFormValid = false;
        errors.password = 'Password must have at least 6 characters.';
    }

    if (!payload || typeof payload.firstName !== 'string' || payload.firstName.trim().length === 0) {
        isFormValid = false;
        errors.firstName = 'Please provide your First name.';
    }

    if (!payload || typeof payload.lastName !== 'string' || payload.lastName.trim().length === 0) {
        isFormValid = false;
        errors.lastName = 'Please provide your Last name.';
    }

    if (!isFormValid) {
        message = 'Check the form for errors.';
    }

    return {
        success: isFormValid,
        message,
        errors
    };
}

function isValidSignupPassword(payload) {
    return (payload && typeof payload.password === 'string' && payload.password.trim().length >= 6);
}
/**
 * Validate the login form
 */
function validateLoginForm(payload) {
    const errors = {};
    let isFormValid = true;
    let message = '';

    if (!payload || typeof payload.email !== 'string' || payload.email.trim().length === 0) {
        isFormValid = false;
        errors.email = 'Please provide your email address.';
    }

    if (!payload || typeof payload.password !== 'string' || payload.password.trim().length === 0) {
        isFormValid = false;
        errors.password = 'Please provide your password.';
    }

    if (!isFormValid) {
        message = 'Check the form for errors.';
    }

    return {
        success: isFormValid,
        message,
        errors
    };
}

router.post('/signup', (req, res, next) => {
    const validationResult = validateSignupForm(req.body);
    if (!validationResult.success) {
        return res.status(400).json({
            success: false,
            message: validationResult.message,
            errors: validationResult.errors
        });
    }

    userRepository.get({ email: req.body.email })
        .then((user) => {
            if (user) {
                return res.status(409).json({
                    success: false,
                    message: 'Check the form for errors.',
                    errors: {
                        email: 'This email is already taken.'
                    }
                });
            }

            passport.authenticate('local-signup', (err) => {
                if (err) {
                    return res.status(400).json({
                        success: false,
                        message: 'Could not process the form.'
                    });
                }

                return res.status(200).json({
                    success: true,
                    message: 'You have successfully signed up! Now you should be able to log in.'
                });
            })(req, res, next);
        })
        .catch((err) => res.status(400).json({
            success: false,
            message: 'Could not process the form.'
        }));
});

router.post('/login', (req, res, next) => {
    const validationResult = validateLoginForm(req.body);
    if (!validationResult.success) {
        return res.status(400).json({
            success: false,
            message: validationResult.message,
            errors: validationResult.errors
        });
    }

    return passport.authenticate('local-login', (err, token, userData) => {
        if (err) {
            if (err.name === 'IncorrectCredentialsError') {
                return res.status(400).json({
                    success: false,
                    message: err.message
                });
            }

            return res.status(400).json({
                success: false,
                message: 'Could not process the form.'
            });
        }

        return res.json({
            success: true,
            message: 'You have successfully logged in!',
            token,
            user: userData
        });
    })(req, res, next);
});

router.post('/forgot', (req, res, next) => {
    crypto.randomBytes(20, function(err, buf) {
        const token = buf.toString('hex');

        userRepository.get({email: req.body.email})
            .then((user) => {

                user.reset_password_token = token;
                user.reset_password_expires = Date.now() + 3600000; // One hour

                user.save((err) => {
                    if (err) {
                        return res.status(400).json({
                            error: 'Internal error'
                        });
                    }

                    const host = req.headers.origin ? req.headers.origin : req.headers.host;
                    const resetLink = host + '/reset/' + token;

                    emailService.sendResetPasswordLink(user.email, resetLink, () => {
                        return res.status(200).json({
                            message: `Please check your email. We sent an email to ${user.email}, which contains a link to reset your password.`
                        });
                    });
                });
            })
            .catch((err) => res.status(400).json({
                error: 'The email you entered does not belong to any account.'
            }));
    });
});

router.post('/reset/:token', (req, res, next) => {
    userRepository.get({
        reset_password_token: req.params.token,
        reset_password_expires: {$gt: Date.now()}
    })
        .then((user) => {
            if (!isValidSignupPassword(req.body)) {
                return res.status(400).json({
                    error: 'Password must have at least 6 characters.'
                });
            }

            user.password = req.body.password;
            user.reset_password_token = undefined;
            user.reset_password_expires = undefined;

            user.save((err) => {
                req.body.email = user.email;

                passport.authenticate('local-login', (err, token, userData) => {

                    emailService.sendPasswordChangedNotification(user.email);

                    return res.json({
                        success: true,
                        message: 'Your password has been successfully changed.',
                        token: token,
                        user: userData
                    });
                })(req, res, next);
            });
        })
        .catch((err) => res.status(400).json({
            error: 'Password reset token is invalid or has expired.'
        }));
});

module.exports = router;