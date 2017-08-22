const router = require('express').Router();
const userRepository = require('../../repositories/user/userRepository');
const { defaultTable } = require('../../config/defaultTable');
const multer = require('multer');
const fs = require('fs');
const path = require('path');
var mime = require('mime');


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
      // var filepath = path.join(filesFolder, filename);

      //  fs.exists(filepath, function (exists) {
      //      if (!exists) {
      //          response.statusCode = 404;
      //          response.end();
      //          return;
      //      }
      //      var mimetype = mime.lookup(filepath);
      //      response.setHeader('Content-Type', mimetype);

      //      var filestream = fs.createReadStream(filepath);
      //      filestream.pipe(response);
      //  });

  //   //response.send(request.params.path, {root: './files'})
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
