module.exports = (api) => {
    const History = api.models.History;

    return (req, res) => {
        let respond = (result) => {
            // result[0] = affectedCount
            // result[1] = affectedRows
            let affectedRows = result[1];
            if(affectedRows === 1){
                res.status(200).send("Update complet");
            } else {
                res.status(404).send({
                    ErrorCode: 404,
                    message: "Any modification apply (or History not found)"
                });
            }
        };

        let returnError = (err) => {
            res.status(500).send({
                ErrorCode: 500,
                message: JSON.stringify(err)
            });
        };

        User.update(req.body,
            { where: { id: req.params.id } 
        }).then(respond)
        .catch(returnError);
    };
};