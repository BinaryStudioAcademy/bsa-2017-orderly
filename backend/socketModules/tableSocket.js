const R = require('ramda')
const tableRepository = require('../repositories/table/tableRepository')
const baseRepository = require('../repositories/base/baseRepository')
const { defaultTable, defaultViews } = require('../config/defaultEntities')

const viewReps = {
	grid: require('../repositories/view/gridRepositories'),
	form: require('../repositories/view/formRepositories'),
	kanban: require('../repositories/view/kanbanRepositories'),
	gallery: require('../repositories/view/galleryRepositories')
}

module.exports = function (io) {
	io.on('connection', socket => {
		console.log('connection to socket table obtained!')

		socket.on('table:add', payload => {
			let newTable = payload.table || defaultTable()
			return Promise.all([
				tableRepository.add(R.merge(newTable, payload.table)),
				viewReps['grid'].add(defaultViews['grid'])
			])
				.then(([table, view]) => tableRepository.addView(table._id, view._id, view.type))
				.then(table => R.tap(table => {
					socket.emit('table:add:success', table)
				})(table))
				.then(table => baseRepository.addTableToBase(payload.baseId, table._id))
				.then(base => {
					socket.emit('base:update:success', base)
				})
		})




	})
}