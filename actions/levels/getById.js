module.exports = (api) => {
    const Level = api.models.Level;


    return(req,res) => {
        Level.findById(req.params.id).then((result) => {

            if (result.lenght === 0) {

                res.status(204).send(result);
            } else {

                res.status(200).send(result);
            }

        }).catch((error) => {

            res.status(404).send({
                ErrorCode: 404, 
                message: "Any level for this id"
            });
        });
    }
}