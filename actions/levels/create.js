module.exports = (api) => {
    const Level = api.models.Level;

    return (req, res) => {
        Level
            .build(req.body)
            .save()
            .then(isCreate)
            .catch(error);

        function isCreate(result) {
            if (result) {
                res.status(201).send(result);
            } else {
                    res.status(409).send({
                        ErrorCode: 409,
                        message: 'Level already existing'
                    });
            }
        }        

        function error(err) {
            res.status(500).send({
                ErrorCode:500, 
                message: JSON.stringify(err)
            });
        }
    };
};