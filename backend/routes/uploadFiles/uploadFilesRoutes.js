const router = require('express').Router();
const userRepository = require('../../repositories/user/userRepository');
const { defaultTable } = require('../../config/defaultTable');
const multer = require('multer');


const storage = multer.diskStorage({
  destination: './files',
  filename(req, file, cb) {
    const splittedFilename = file.originalname.split('.');
    const [fileName, fileType] = splittedFilename;
    const finalName = `${fileName}-${Date.now()}.${fileType}`;
    req.finalName = finalName;
    
    cb(null, finalName);
  },
});

const upload = multer({ storage });

router.post('/', upload.single('file'), (request, response) => {
  const meta = request.body;
  const userId = `${meta.userId}`
  const updateAvatar = { "avatar": "path: http://localhost:2020/files/" + request.finalName}

    userRepository.update(userId, updateAvatar)
    .then((result) => response.status(200).send(result))
    .catch((error) => response.status(400).send(`Can not add image. ${error}`));
});

module.exports = router;
