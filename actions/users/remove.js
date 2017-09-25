module.exports = (api) => {
    const User = api.models.User;
    const fs = require('fs');

    return (req, res) => {
        let respond = (destroyedRowsCount) => {
                    if(destroyedRowsCount === 1){
                        res.status(201).send("Delete complet");
                    } else {
                        res.status(404).send({
                            ErrorCode: 404,
                            message: "User not found"
                        });
                    }
                }

        let destroy = (user) => {
            if(!user){
                res.status(404).send({ 
                    ErrorCode: 404,
                    Message: "User not found"
                });
            } else {
                let spawn = require("child_process").spawn;
                let process = spawn('python3',["modules/valkyri_face_py", "-r", user.id]);
                
                fs.unlink(user.image_path, (err) => {
                    
                }); // Arrow function de gestion d'erreur obligatoire

                let userId = user.id;
                User.destroy(
                    { where: { id: userId } 
                }).then(respond).catch((error) => {
                    res.status(500).send(error.message);
                });

                res.status(200).send(user);
            }
        };

        let returnError = (err) => {
            res.status(500).send({
                ErrorCode: 500,
                message: JSON.stringify(err)
            });
        };

        User.findById(req.params.id)
        .then(destroy)
        .catch(returnError);
    };
};