const userRepository = require('../repositories/user/userRepository')
const teamRepository = require('../repositories/team/teamRepository')
const emailService = require('./emailService')
const promisify = require('es6-promisify')

const sendInvite = promisify(emailService.sendInvite)

const getInfoForInvite = (userId, message, teamId) => Promise.all([
		userRepository.getById(userId),
		teamRepository.getById(teamId)
	])
		.then(([user, team]) => sendInvite(user.email, message, team.name))

module.exports = {
	getInfoForInvite
}