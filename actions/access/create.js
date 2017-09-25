module.exports = (api) => {
    const Access = api.models.Access;

    return (req, res) => {
        Access
            .build(req.body)
            .save()
            .then(isCreate)
            .catch(error);

        function isCreate(access) {
            if (access) {
                res.status(201).send(access);
            }
            else {
                res.status(409).send({ 
                    ErrorCode: 409,
                    Message: 'Access already existing'
                });
            }
        }

        function error(err) {
            res.status(500).send({
                ErrorCode: 500,
                Message: JSON.stringify(err)
            });
        }


    };
};