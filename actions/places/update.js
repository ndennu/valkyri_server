module.exports = (api) => {
    const Place = api.models.Place;

    return (req, res) => {
        Place
            .update(req.body, {
                where: {id: req.params.id}
            })
            .then(isUpdated)
            .catch(error);

        function isUpdated(Updated) {
            if (Updated[0] === 1) {
                res.status(200).send("Update complet");
            }
            else {
                res.status(404).send({
                    ErrorCode : 404, 
                    message: "Any modification apply (or Place not found)"
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

