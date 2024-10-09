const express = require('express');
const index = express.Router();
const usersroutes = require('./user.routes')
const adminroutes = require('./admin.routes')
const boardroutes = require('./board.routes')






/**
 * @swagger
 * tags:
 *   name: Admin
 *   description: 관리자 관련 API
 */
index.use('/admin',adminroutes);
index.use('/user',usersroutes);
index.use('/board',boardroutes);


module.exports = index;