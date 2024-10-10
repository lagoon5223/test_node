const express = require('express');
const image_router = express.Router();
const {UserAuth} = require('../middleware/middleware1');
const upload = require('../middleware/multer')
const Controller = require('../controller/image.controller');

const controller = new Controller();


image_router.post('/upload',upload.single('image'),controller.test_image);
// router.post('/checkPW',controller.checkPW);


module.exports = image_router;