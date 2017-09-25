/**
 * Created by apple on 13/05/2017.
 */
module.exports = (api) => {
    const Level = api.models.Level;

    return (req, res) => {
        Level.destroy({
            where: { id: req.params.id }
            }).then((destroyedRowsCount) => {

            if(destroyedRowsCount === 1) {

                res.status(200).send("Delete complet");
            } else {

                res.status(404).send({
                    ErrorCode: 404,
                    message: "Level not found"
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