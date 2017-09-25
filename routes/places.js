const router = require('express').Router();

module.exports = (api) => {
    /* ------------- POST ----------------*/
    // Create
    router.post('/',
        api.middlewares.bodyParser.json(),
        api.actions.places.create);

    /* --------------- GET ------------ */
    router.get('/:id',
        api.actions.places.listOne);

    router.get('/',
        api.actions.places.listAll);

    /* -------------- PUT -------------- */
    router.put('/:id',
        api.middlewares.bodyParser.json(),
        api.actions.places.update);

    /* ------------ DELETE --------------- */
    router.delete('/:id',
        api.actions.places.remove);


    return router;
};