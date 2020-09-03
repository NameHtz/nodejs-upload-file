const express = require('express');
const app = express();
const cors = require('cors');

const fileUpload = require('express-fileupload');

app.use(cors());

const routes = require('./routes');


app.use(fileUpload({createParentPath: true}));


app.use(routes);

app.use('/images',express.static('images'));

app.listen(8097, () => {

});