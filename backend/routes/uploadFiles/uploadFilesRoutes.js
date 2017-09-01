const express = require('express');
const router = express.Router();
const userRepository = require('../../repositories/user/userRepository');
const tableRepository = require('../../repositories/table/tableRepository');
const multer = require('multer');
const path = require('path');
const mkdirp = require('mkdirp')


const storage = multer.diskStorage({
	destination: (req, file, cb) => {
		if (file.fieldname === 'attachment') {
			const dir = `files/attachment/${req.params.record_dataId}/${req.params.type}`
			mkdirp.sync(dir)
			cb(null, dir)
		}
		if (file.fieldname === 'file') {
			cb(null, './files')
		}
	},
	filename: (req, file, cb) => {
		if (file.fieldname === 'attachment') {
			cb(null, file.originalname)
		}
		if (file.fieldname === 'file') {
			const splittedFilename = file.originalname.split('.');
			const [fileName, fileType] = splittedFilename;
			const finalName = `${fileName}-${Date.now()}.${fileType}`;
			req.finalName = finalName;
			cb(null, finalName);
		}
	}
})

const upload = multer({ storage });

router.post('/', upload.single('file'), (request, response) => {
  const meta = request.body;
  const userId = `${meta.userId}`
  const updateAvatar = { "avatar": request.finalName}

    userRepository.update(userId, updateAvatar)
    .then((result) => response.status(200).send(result))
    .catch((error) => response.status(400).send(`Can not add image. ${error}`));
});

router.post('/attachment/:record_dataId/:type/:tableId', upload.single('attachment'), (req, res) => {
	tableRepository.updateRecordById(req.params.tableId, req.params.record_dataId, req.file.originalname)
		.then(table => res.status(200).send(table))
		.catch(err => res.status(400).send(err))
})

router.delete('/attachment/:record_dataId/:type/:tableId/:fileNamesStr', (req, res) => {
	tableRepository.updateRecordById(req.params.tableId, req.params.record_dataId, req.params.fileNamesStr, true)
		.then(table => res.status(200).send(table))
		.catch(err => res.status(400).send(err))
})

router.use('/', express.static('files'))
router.use('/attachment', express.static('files'))

module.exports = router;
