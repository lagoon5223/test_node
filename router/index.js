const express = require('express');
const index = express.Router();
const usersroutes = require('../api/user/user.routes')
const adminroutes = require('../api/admin/admin.routes')
const boardroutes = require('../api/board/board.routes')
const imageroutes = require('../api/image/image.routes')
const mailroutes = require('../api/mail/mail.routes')
const smsroutes = require('../api/sms/sms.routes');
const announcementroutes = require('../api/announcement/announcement.routes');







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
/**
 * @swagger
 * tags:
 *   name: 메일
 */
index.use('/mail',mailroutes);
/**
 * @swagger
 * tags:
 *   name: 공지사항
 */
index.use('/announcement',announcementroutes);
/**
 * @swagger
 * tags:
 *   name: SMS
 */
index.use('/sms',smsroutes)

module.exports = index;
