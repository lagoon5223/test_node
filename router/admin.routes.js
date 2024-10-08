const express = require('express');
const admin_router = express.Router();
const {AdminAuth} = require('../middleware/middleware1')

const Controller = require('../controller/admin.controller');

const controller = new Controller();



//메인 페이지
// router.get('/', controller.main);
//회원가입 페이지
admin_router.post('/admin_login',controller.admin_login);
admin_router.post('/admin_signup',controller.admin_signup);


module.exports = admin_router;