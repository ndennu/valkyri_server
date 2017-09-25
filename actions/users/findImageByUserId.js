fileSystem = require('fs'),
path = require('path');


module.exports = (api) => {
    const User = api.models.User;

    return (req, res) => {
        let respond = (user) => {
            if(!user){
                res.status(404).send({ 
                    ErrorCode: 404,
                    Message: "User not found"
                });
            } else {
                if(user.image_path !== null && user.image_path !== "") {
                    var filePath = path.join(__dirname, "..\\..\\" + user.image_path);
                    var stat = fileSystem.statSync(filePath);

                    res.writeHead(200, {
                        'Content-Type': 'image/jpeg',
                        'Content-Length': stat.size
                    });

                    var readStream = fileSystem.createReadStream(filePath);
                    // To respond and send the stream
                    readStream.pipe(res);
                } else {
                    res.status(404).send({
                        ErrorCode: 404,
                        Message: "Image not found"
                    });
                }
            }
        };

        let returnError = (err) => {
            res.status(500).send({
                ErrorCode: 500,
                message: JSON.stringify(err)
            });
        };

        User.findById(req.params.id)
        .then(respond)
        .catch(returnError);
    };
};