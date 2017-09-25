module.exports = (api) => {
    const Access = api.models.Access;


    return(req,res) => {
        Access.findById(req.params.id).then((access) => {
            if (access.lenght === 0) {
                res.status(204).send(access);
            } else {
                res.status(200).send(access);
            }
        }).catch((error) => {
            res.status(404).send({
                ErrorCode: 404,
                message: "Any access for this id"
            });
        });
    }
}