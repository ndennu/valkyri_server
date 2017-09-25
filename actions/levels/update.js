/**
 * Created by apple on 13/05/2017.
 */
module.exports = (api) => {
    const Level = api.models.Level;

    return (req, res) => {
        Level.update(req.body, {
            where: { id: req.params.id }

            }).then((result) => {
            if(result == 1){

                res.status(201).send("Update complet");
            } else {

                res.status(404).send({
                    ErrorCode: 404,
                    message: "Any modification apply (or level not found)"
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