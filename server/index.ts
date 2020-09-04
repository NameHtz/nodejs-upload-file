import express = require('express');
import fileUpload = require('express-fileupload');

import routes from './routes';

const cors = require('cors');

const app = express();

app.use(cors());


app.use(fileUpload({createParentPath: true}));

app.use(routes);

app.use('/images', express.static('images'));

app.listen(8097, () => {
  console.log('Welcome')
});