module.exports = (api) => {
    const AuthToken = api.models.AuthToken;

    /// Logout (Get)
    /// Remove the current token for logged in user
    return (req, res, next) => {
        AuthToken.destroy(
            { where: { id_user: req.id_user } 
        }).then((destroyedRowsCount) => {
            next();
        }).catch((error) => {
            res.status(500).send({
                ErrorCode: 500,
                message: JSON.stringify(error)});
        });
    };
};