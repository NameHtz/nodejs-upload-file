const router = require('express').Router();

import uploadImage  from './uploadImage';


router.use(uploadImage)

export default router;