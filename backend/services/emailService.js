const nodemailer = require('nodemailer');
const config = require('../config');

const createTransport = () => {
    return nodemailer.createTransport({
        service: 'Gmail',
        auth: {
            user: config.supportEmail,
            pass: config.supportEmailPassword
        }
    });
};

const sendResetPasswordLink = (email, resetLink, callback) => {
    const mailOptions = {
        to: email,
        from: config.fromEmail,
        subject: 'no-reply (Orderly password reset)',
        text: 'To reset your Orderly password, please click this link:\n\n' +
               resetLink + '\n\n' +
              'If you did not request this, please ignore this email and your password will remain unchanged.\n'
    };

    createTransport().sendMail(mailOptions, callback);
};

const sendPasswordChangedNotification = (email, callback) => {
    const mailOptions = {
        to: email,
        from: config.fromEmail,
        subject: 'no-reply (Your password has been changed)',
        text: 'Рassword for your account ' + email + ' has just been changed.\n',
    };

    createTransport().sendMail(mailOptions, callback);
};

const sendInvite = (email, message, teamName, callback) => {
	const mailOptions = {
		to: email,
		from: config.fromEmail,
		subject: 'no-reply (Invite to Orderly)',
		text: message ? message : `This is invite to ${teamName} team.`
	}
	createTransport().sendMail(mailOptions, callback)
}

module.exports = {
    sendResetPasswordLink,
    sendPasswordChangedNotification,
	sendInvite
};