const express = require('express');
const user_router = express.Router();
const {UserAuth} = require('../../middleware/middleware1');
const upload = require('../../middleware/multer')
const Controller = require('./user.controller');

const controller = new Controller();

user_router.post('/login',controller.login);
user_router.post('/signup',controller.post_signup);
user_router.put('/:id',controller.update);
user_router.delete('/delete',controller.delete);
user_router.get('/tokentest',UserAuth,controller.tokentest);
user_router.post('/test',controller.test);
user_router.get('/find',controller.find);
user_router.post('/upload',upload.single('image'),controller.test_image);
// router.post('/checkPW',controller.checkPW);


module.exports = user_router;
