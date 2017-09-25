const SHA512 = require("crypto-js/sha512");
const Hex = require("crypto-js/enc-hex");
const jwt = require('jsonwebtoken');

module.exports = (api) => {
    const User = api.models.User;
    const AuthToken = api.models.AuthToken;

    /// Authenticate user and generate 
    /// a token for current for the user (POST)
    /// --> Require middleware body-parser
    return function login(req, res, next) {
        let userId = 0;
        let userLevelNumber = 0;
        User.findOne({ 
            where: {
                email: req.body.email,
                password: SHA512(req.body.password).toString(Hex)
            }
        })
        .then((user) => {
            if(user) {
                let token = AuthToken.build({
                    id_user: user.id
                });
                userId = user.id;
                userLevelNumber = user.level_number;
                return token.save();
            } else {
                return res.status(401).send({
                    ErrorCode: 401,
                    message: 'invalid.credentials'
                });
            }
        }).then((token) => {
            jwt.sign({
                    exp: Math.floor(Date.now() / 1000) + (60 * 60) * 24, // 1 day.
                    tokenId: token.id.toString() // using the ID of the token has identifier.
                },
                api.settings.security.salt,
                {},
                (error, encryptedToken) => {
                    if (error) {
                        return res.status(500).send({
                            ErrorCode: 500,
                            message: JSON.stringify(error)
                        });
                    }

                    return res.status(200).send({
                        "token": encryptedToken,
                        "creationDate": Date.now(),
                        "userId": userId,
                        "userLevelNumber": userLevelNumber
                    });
                }
            );
        }).catch((error) => {
            return res.status(500).send({
                ErrorCode: 500,
                message: JSON.stringify(error)
            });
        });
    };
};