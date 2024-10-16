const express = require('express');
const index = express.Router();
const usersroutes = require('../user/user.routes')
const adminroutes = require('../amin/admin.routes')
const boardroutes = require('../board/board.routes')
const imageroutes = require('../image/image.routes')







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
