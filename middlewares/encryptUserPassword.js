/// 
/// encryptUserPassword 
/// Encrypt User Password into SHA512 string
///

const SHA512 = require("crypto-js/sha512");
const Hex = require("crypto-js/enc-hex");

module.exports = (api) => {
    return (req, res, next) => {
        // SHA512("string") will return Object 
        // We have to encode it with Hex
        if(req.body.password){
            req.body.password = SHA512(req.body.password).toString(Hex);
        }
        next();
    };
};
