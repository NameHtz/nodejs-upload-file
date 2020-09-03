const router = require('express').Router();

const  uploadImage  = require('./uploadImage');

router.use(uploadImage)

module.exports = router;