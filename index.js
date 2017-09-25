const express = require('express');
const api = express();

require('./settings')(api);       console.log('>> Loaded settings');
require('./models')(api);         console.log('>> Loaded models');
require('./middlewares')(api);    console.log('>> Loaded middleware');
require('./actions')(api);        console.log('>> Loaded actions');
require('./routes')(api);         console.log('>> Loaded routes');

console.log(`Server started and listening on port ${api.settings.port}`);
api.listen(api.settings.port);