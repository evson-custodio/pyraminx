const router = require('express').Router();

module.exports = (app) => {
    const objectsController = app.controllers.objects;

    router.get('/:filename', objectsController.getObjectByFilename);

    return router;
}