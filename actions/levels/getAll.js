module.exports = (api) => {
    const Level = api.models.Level;


    return(req,res) => {
        Level.findAll().then((result) => {

            if (result.lenght === 0) {
            
                res.status(204).send(result);
            } else {
            
                res.status(200).send(result);
            }

        }).catch((error) => {

            res.status(500).send({
                ErrorCode: 500, 
                message: JSON.stringify(error)
            });
        });
    }
}