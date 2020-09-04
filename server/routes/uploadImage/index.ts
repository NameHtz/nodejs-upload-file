const router = require('express').Router();

import uploadImage from './../../controllers/uploadImage';

router.post('/upload-image', uploadImage)


export default router;