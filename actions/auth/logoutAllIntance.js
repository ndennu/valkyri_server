module.exports = (api) => {
    const AuthToken = api.models.AuthToken;

    /// Logout from all instance (Get)
    /// Remove all token for logged in user
    return function logoutAllInstance(req, res, next) {
        AuthToken.destroy(
            { where: { id_user: req.id_user } 
        }).then((destroyedRowsCount) => {
            if(destroyedRowsCount > 0){
                res.status(201).send("Succesfully logged out");
            } else {
                res.status(404).send({
                    ErrorCode: 404,
                    message: "Not logged in"
                });
            }
        }).catch((error) => {
            res.status(500).send({
                ErrorCode: 500,
                message: JSON.stringify(error)
            });
        });
    };
};