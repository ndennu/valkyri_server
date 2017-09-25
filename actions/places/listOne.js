/// Find one place with an id_Place (GET)
/// This methode is PUBLIC


module.exports = (api) => {
    const Place = api.models.Place;

    return (req, res) => {
        Place
            .findById(req.params.id)
            .then(listing)
            .catch(error);


        function listing(place) {
            if (place) {
                res.status(200).send(place);
            }
            else {
                res.status(404).send({
                    ErrorCode:404, 
                    message: 'Any place for this id'
                });
            }
        }

        function error(err) {
            res.status(500).send({
                ErrorCode:500,
                message: JSON.stringify(err)});
        }
    };
};