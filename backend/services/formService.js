const R = require('ramda')
const promisify = require('es6-promisify')
const fs = require('fs')
const rename = promisify(fs.rename)
const path = require('path')
const attachmentDirectory = path.join(__dirname, '..', 'files', 'attachment')

const renameTemporaryFileFolder = (table) => {
	let idx = -1
	let neededField = R.find(field => {
		idx++
		return field.type === 'attachment'
	})(table.fields)
	if (!neededField) return
	let recordId = R.path(['record_data', idx, '_id'], R.last(table.records))
	return rename(attachmentDirectory + '/temporary', attachmentDirectory + '/' + recordId)
}



module.exports = {
	renameTemporaryFileFolder
}