const router = require('express').Router();

module.exports = (api) => {
    /* ------------- POST ----------------*/
    // Create
    router.post('/',
        api.middlewares.bodyParser.json(),
        api.middlewares.goodLevel,
        api.actions.levels.create);

    /* ------------- GET ----------------*/
    // GetALL
    router.get('/',
        api.actions.levels.getAll);

    // getById
    router.get('/:id',
        api.actions.levels.getById);

    /* ------------- UPDATE ----------------*/

    router.put('/:id',
        api.middlewares.bodyParser.json(),
        api.actions.levels.update);


    router.delete('/:id',
        api.actions.levels.delete);

    return router;
};