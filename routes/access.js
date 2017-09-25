const router = require('express').Router();

module.exports = (api) => {
    /* ------------- POST ----------------*/
    // Create
    router.post('/',
        api.middlewares.bodyParser.json(),
        api.actions.access.create);

    /* ------------- GET ----------------*/
    // GetALL
    router.get('/',
        api.actions.access.getAll);

    // getById
    router.get('/:id',
        api.actions.access.getById);

    /* ------------- UPDATE ----------------*/

    router.put('/:id',
        api.middlewares.bodyParser.json(),
        api.actions.access.update);


    router.delete('/:id',
        api.actions.access.delete);

    return router;
};