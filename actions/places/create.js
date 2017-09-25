module.exports = (api) => {
    const Place = api.models.Place;

    return (req, res) => {
        Place
            .build(req.body)
            .save()
            .then(isCreate)
            .catch(error);

        function isCreate(place) {
            if (place) {
                res.status(201).send(place);
            }
            else {
                res.status(409).send({
                    ErrorCode:409,
                    message: 'Place already existing'
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