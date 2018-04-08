const router = require('express').Router();

module.exports = (app) => {
    const libsController = app.controllers.libs;

    router.get('/three', libsController.getThreeJS);
    
    return router;
}