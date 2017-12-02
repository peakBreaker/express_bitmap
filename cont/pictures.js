var potrace = require('potrace'),
    fs = require('fs');

var trace_bitmap = function(){
    potrace.trace('./trine.png', function(err, svg) {
    if (err) throw err;
    fs.writeFileSync('./output.svg', svg);
  });
}

// TODO: save to user id folder + incrementer
// TODO: Run trace bitmap on the images

var express = require('express')
  , router = express.Router()
  , multer = require('multer')

var upload = multer({
  dest: './public/uploads',
})

router.get('/hello', function(req, res){
  res.send('Hello world!');
})

router.post('/upload', upload.single('image'), function(req, res, next) {
  console.log("Getting image file!");
  res.send('Successfully got file!');
})

module.exports = router;
