const router = require('express').Router();
const userRepository = require('../../repositories/user/userRepository');
const { defaultTable } = require('../../config/defaultEntities');
const multer = require('multer');
const fs = require('fs');
const path = require('path');

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
  const updateAvatar = { "avatar": request.finalName}

    userRepository.update(userId, updateAvatar)
    .then((result) => response.status(200).send(result))
    .catch((error) => response.status(400).send(`Can not add image. ${error}`));
});

router.get('/:path', (request, response) => {
  var filename = path.basename(request.params.path);
  fs.readFile(`./files/${filename}`, function(err, data) {
    if (err){
     response.statusCode = 404;
      response.end();
      return;
    }
    response.writeHead(200, {'Content-Type': 'image/png'});
    response.end(data);
});
})



module.exports = router;
