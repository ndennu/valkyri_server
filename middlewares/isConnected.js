const jwt = require('jsonwebtoken');
module.exports = (api) => {

    const AuthToken = api.models.AuthToken;

    return (req, res, next) => {
        if (!req.headers || !req.headers.authorization) {
            return res.status(401).send('authentication.required');
        }

        const encryptedToken = req.headers.authorization;

        jwt.verify(encryptedToken, api.settings.security.salt, null, (err, decryptedToken) => {
            if (err) {
                return res.status(401).send('invalid.token');
            }

            AuthToken.findById(decryptedToken.tokenId).then((token) => {
                if(!token){
                    res.status(401).send("authentication.expired");
                } else {
                    req.tokenId = token.id;
                    req.id_user = token.id_user;
                    next();
                }
            }).catch((error) => {
                res.status(500).send(error);
            });
        });
    };
};