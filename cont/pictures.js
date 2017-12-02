var potrace = require('potrace'),
    fs = require('fs');

var trace_bitmap = function(file){
    potrace.trace(file, function(err, svg) {
    if (err) throw err;
    fs.writeFileSync('./output.svg', svg);
  });
}

// TODO: save to user id folder + incrementer
// TODO: Use only public now
// TODO: Run trace bitmap on the images

var express = require('express')
  , router = express.Router()
  , multer = require('multer')
  , Thumbnail = require('thumbnail')

var thumbnail = new Thumbnail('./uploads/public/original/', './uploads/public/thumbnails/');

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './uploads/public/original/')
  },
  filename: function (req, file, cb) {
    cb(null, file.fieldname + '-' + Date.now() + '-' + file.originalname)
  }
})

var upload = multer({ storage: storage })

router.get('/hello', function(req, res){
  res.send('Hello world!');
})

router.post('/upload', upload.single('image'), function(req, res, next) {
  console.log("Getting image file!");
  console.log(req.file);
  res.send('Successfully got file!');
  // Proceed to making the thumbnail
  thumbnail.ensureThumbnail(req.file.filename, null, 100, function (err, filename) {
    console.log('created thumbnail image!');
    console.log(filename);
    console.log(err);
    // "filename" is the name of the thumb in '/path/to/thumbnails'
  });


  return;
})

module.exports = router;
