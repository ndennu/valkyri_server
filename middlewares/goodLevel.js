module.exports = (api) => {
    const user = api.models.User;

    return (req, res, next) => {
        user.findById(req.params.id).then((result) => {
            if(result.level_number > 0) {
                next();
            } else {
                res.sendStatus(401);
            }
        }).catch((error) => {
            res.status(500).send(error);
        });
    };
};
