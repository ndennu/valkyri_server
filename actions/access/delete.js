/**
 * Created by apple on 13/05/2017.
 */
module.exports = (api) => {
    const Access = api.models.Access;

    return (req, res) => {
        Access.destroy(
            { where: { id: req.params.id }
            }).then((destroyedRowsCount) => {
            if(destroyedRowsCount === 1){
                res.status(201).send("Delete complet");
            } else {
                res.status(404).send({
                    ErrorCode:404,
                    message: "Access not found"
                });
            }
        }).catch((error) => {
            res.status(500).send({
                ErrorCode:500,
                message: JSON.stringify(error)
            });
        });
    }
}