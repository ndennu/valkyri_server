const router = require('express').Router();

module.exports = (api) => {
    /* ------------- POST ----------------*/
    // Create
    router.post('/:id',
        api.middlewares.tmpUpload.single('face'),
        api.actions.faces.create);

    // Identifie
    router.post('/identify/:idPlace',
        api.middlewares.tmpUpload.single('face'),
        api.actions.faces.identify);

    // findAll
    /* ------------- GET ----------------*/
    router.get('/',
        api.actions.faces.findAll);

    // findOne
    router.get('/:id',
        api.actions.faces.findOne);

    /* ------------- UPDATE ----------------*/

    router.put('/:id',
        api.middlewares.tmpUpload.single('face'),
        api.actions.faces.update);


    router.delete('/:id',
        api.actions.faces.remove);

    return router;
};
