const router = require('express').Router();

const { uploadImage } = require('./../../controllers/uploadImage');

router.post('/upload-image', uploadImage)


module.exports = router;