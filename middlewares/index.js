const multer = require('multer');

var tmpStorage = multer.diskStorage({
    filename: function (req, file, cb) {
        cb(null, file.fieldname + '-' + Date.now() + '.jpg');
    }
});

var profileImageStorage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'img/profile');
    },
    filename: function (req, file, cb) {
        cb(null, file.fieldname + '-' + Date.now() + '.jpg');
    }
});

module.exports = (api) => {
    api.middlewares = {
        bodyParser: require('body-parser'),
        goodLevel: require('./goodLevel')(api),
        // encryptUserPassword: require('./encryptUserPassword')(api),
        // ensureUserAuthenticated: require('./ensureUserAuthenticated')(api)

        tmpUpload: multer({ storage: tmpStorage }),
        profileImageUpload: multer({ storage: profileImageStorage }),
        isConnected: require('./isConnected')(api),
        encryptUserPassword: require('./encryptUserPassword')(api)
    };
};