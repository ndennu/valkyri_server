/**
 * Created by apple on 13/05/2017.
 */
module.exports = (api) => {
    const Access = api.models.Access;

    return (req, res) => {
        Access.update(req.body,
            { where: { id: req.params.id }
            }).then((result) => {
            console.log(result)
            if(result == 1){
                res.status(200).send("Update complet");
            } else {
                res.status(404).send({
                    ErrorCode: 404,
                    message: "Any modification apply (or Access not found)"
                });
            }
        }).catch((error) => {
            res.status(500).send({
                ErrorCode: 500, 
                message: JSON.stringify(error)
            });
        });
    }
}