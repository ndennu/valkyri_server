module.exports = (api) => {
    const User = api.models.User;

    return (req, res) => {
        let respond = (result) => {
            res.sendStatus(201);
        };

        let returnError = (err) => {
            res.status(500).send({
                ErrorCode: 500,
                message: JSON.stringify(err)
            });
        };

        User.update(req.body,
            { where: { id: req.params.id } 
        }).then(respond)
        .catch(returnError);
    };
};
