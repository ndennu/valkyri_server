const router = require('express').Router();

module.exports = (api) => {
    /* ------------- POST ----------------*/
    // Login in
    router.post('/login',
        api.middlewares.bodyParser.json(),
        api.actions.auth.login);

    // Logout
    router.post('/logout',
        api.middlewares.isConnected,
        api.actions.auth.logout);

    // Logout from all instance
    // Remove all token
    router.post('/logoutAllInstance',
        api.middlewares.isConnected,
        api.actions.auth.logoutAllInstance);

    return router;
};