const express = require('express');
const index = express.Router();
const usersroutes = require('./user.routes')
const adminroutes = require('./admin.routes')
const boardroutes = require('./board.routes')
const imageroutes = require('./image.routes')







/**
 * @swagger
 * tags:
 *   name: 관리자
 */
index.use('/admin',adminroutes);
/**
 * @swagger
 * tags:
 *   name: 유저
 */
index.use('/user',usersroutes);
/**
 * @swagger
 * tags:
 *   name: 게시글
 */
index.use('/board',boardroutes);
/**
 * @swagger
 * tags:
 *   name: 이미지
 */
index.use('/image',imageroutes);


module.exports = index;
