module.exports = (api) => {
    const User = api.models.User;

    return (req, res) => {
        let isCreate = (user) => {
            if (user) {
                res.status(201).send(user);
            }
            else {
                res.status(409).send({
                    ErrorCode: 409,
                    message: 'User already existing'
                })
            }
        }
        
        User
            .build(req.body)
            .save()
            .then(isCreate)
            .catch(error);

        function error(err) {
            res.status(500).send({
                ErrorCode: 500, 
                message: JSON.stringify(err)
            });
        }
    };
};