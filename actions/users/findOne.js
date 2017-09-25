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
        .then(respond)
        .catch(returnError);
    };
};