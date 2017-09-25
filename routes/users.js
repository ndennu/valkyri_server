const router = require('express').Router();

module.exports = (api) => {

    /* --------------- GET ------------ */
	// FindAll
    router.get('/',
        api.actions.users.findAll);


    // FindOne
    router.get('/:id',
        api.actions.users.findOne);
    
    // FindOne
    router.get('/image/:id',
        api.actions.users.findImageByUserId);

    // FindOne by role
    router.get('/role/:idRole',
        api.middlewares.isConnected,
        api.actions.users.findAllWithRole);
    
    /* ------------- POST ----------------*/
    // Create
    router.post('/',
        api.middlewares.bodyParser.json(),
        api.middlewares.encryptUserPassword,
        api.actions.users.create);

    /* -------------- PUT -------------- */
    // Update image path (addFace)
    router.put('/image/:id',
        api.middlewares.isConnected,
        api.middlewares.profileImageUpload.single('face'),
        api.actions.users.addProfileImage);
    // Update
    router.put('/:id',
        api.middlewares.bodyParser.json(),
        api.middlewares.isConnected,
        api.middlewares.encryptUserPassword,
        api.actions.users.update);

    /* ------------ DELETE --------------- */
    // Delete
    router.delete('/:id',
        api.middlewares.isConnected,
        api.actions.users.remove);

    return router;
};