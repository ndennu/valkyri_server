module.exports = (api) => {
    const User = api.models.User;

    return (req, res) => {
        let respond = (users) => {
            if(users.lenght === 0){
                res.status(204).send(users);
            } else {
                res.status(200).send(users);
            }
        };

        let returnError = (err) => {
            res.status(500).send({ErrorCode: 500,
                message: JSON.stringify(err)
            });
        };

        User.findAll()
        .then(respond)
        .catch(returnError);
    };
};