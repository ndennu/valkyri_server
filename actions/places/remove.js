module.exports = (api) => {
    const Place = api.models.Place;

    return (req, res) => {

        Place
            .destroy({
            where: { id: req.params.id }
        })
            .then(isRemove)
            .catch(error);

        function isRemove(destroyedRowsCount) {
            if(destroyedRowsCount === 1){
                res.status(200).send("Delete complet");
            }
            else{
                res.status(404).send({
                    ErrorCode: 404,
                    message: "Place not found"
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