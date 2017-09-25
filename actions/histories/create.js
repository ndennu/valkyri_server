module.exports = (api) => {
    const History = api.models.History;

    return (req, res) => {
        History
            .build(req.body)
            .save()
            .then(isCreate)
            .catch(error);

        let isCreate = (history) => {
            if (history) {
                res.status(201).send(history);
            }
            else {
                res.status(409).send({
                    ErrorCode: 409,
                    message: 'History already existing'
                });
            }
        }

        function error(err) {
            res.status(500).send({
                ErrorCode: 500, 
                message: JSON.stringify(err)
            });
        }
    };
};