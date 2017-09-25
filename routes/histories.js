const router = require('express').Router();

module.exports = (api) => {
    /* ------------- POST ----------------*/
    // Create
    router.post('/',
        api.middlewares.bodyParser.json(),
        api.actions.histories.create);

    /* -------------- GET ----------------*/
    // FindAll
    router.get('/',
        api.actions.histories.findAll);
    // FindAllByMonth
    router.get('/month/:month',
        api.actions.histories.findAllByMonth);

    // FindOne
    router.get('/:id',
        api.actions.histories.findOne);

    /* ------------- POST ----------------*/
    // Create
    router.post('/',
        api.middlewares.bodyParser.json(),
        api.actions.histories.create);

    /* -------------- PUT -------------- */
    // Update
    router.put('/:id',
        api.middlewares.bodyParser.json(),
        api.actions.histories.update);

    return router;
};