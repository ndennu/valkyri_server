module.exports = (api) => {
    fs = require('fs');
    const User = api.models.User;

    return (req, res) => {
        let respond = (result) => {
            var spawn = require("child_process").spawn;
            var process = spawn('python3',["modules/valkyri_face_py", "-a", req.params.id, req.file.path]);

            process.stdout.on('data', function (data){
                // data is a buffer
                res.status(200).send(data.toString('utf8'));
            });
        };
        console.log(1);
        let update = (user) => {
            console.log(2);
            if(user.image_path !== "") {
                console.log(fs.unlinkSync(user.image_path));
                fs.unlink(user.image_path, (err) => {
                    // Callback obligatoire 
                });
            }
            return User.update(
                { image_path: req.file.path },
                { where: { id: req.params.id }
            })
        }

        let returnError = (err) => {
            res.status(500).send({
                ErrorCode: 500,
                message: JSON.stringify(err)
            });
        };

        User.findById(req.params.id)
        .then(update)
        .then(respond)
        .catch(returnError);
    };
};
