module.exports = (api) => {
    const History = api.models.History;

    return (req, res) => {
        let respond = (history) => {
            if(!history){
                res.status(404).send({ 
                    ErrorCode: 404,
                    Message: "History not found"
                });
            } else {
                res.status(200).send('Delete complet');
            }
        };

        let returnError = (err) => {
            res.status(500).send({
                ErrorCode: 500,
                message: JSON.stringify(err)
            });
        };

        History.findById(req.params.id)
        .then(respond)
        .catch(returnError);
    };
};