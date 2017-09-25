module.exports = (api) => {
    const Access = api.models.Access;


    return(req,res) => {
        Access.findAll().then((access) => {
            if (access.lenght === 0) {
                res.status(204).send(access);
            } else {
                res.status(200).send(access);
            }
        }).catch((error) => {
            res.status(500).send({
                ErrorCode: 500, 
                message: JSON.stringify(error)
            });
        });
    }
}