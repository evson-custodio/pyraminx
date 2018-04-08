const router = require('express').Router();

module.exports = (app) => {
    const threeController = app.controllers.three;

    router.get('/:filename', threeController.getExampleByFilename);
    router.get('/controls/:filename', threeController.getConstrolByFilename);
    router.get('/libs/:filename', threeController.getLibsByFilename);
    
    return router;
}