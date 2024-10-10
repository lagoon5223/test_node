const express = require('express');
const index = express.Router();
const usersroutes = require('./user.routes')
const adminroutes = require('./admin.routes')
const boardroutes = require('./board.routes')
const imageroutes = require('./image.routes')






/**
 * @swagger
 * tags:
 *   name: Admin
 *   description: 관리자 관련 API
 */
index.use('/admin',adminroutes);
/**
 * @swagger
 * tags:
 *   name: User
 *   description: 유저 관련 API
 */
index.use('/user',usersroutes);
index.use('/board',boardroutes);
index.use('/image',imageroutes);


module.exports = index;
