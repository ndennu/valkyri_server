/// Find all places (GET)
/// This methode is PUBLIC

module.exports = (api) => {
    const Place = api.models.Place;

    return (req, res) => {
        Place
            .findAll(req.params.id)
            .then(listing)
            .catch(error);


        function listing(place) {
            if (place) {
                res.status(200).send(place);
            }
            else {
                res.status(404).send('Not found');
            }
        }

        function error(err) {
            res.status(500).send(JSON.stringify(err));
        }
    };
};