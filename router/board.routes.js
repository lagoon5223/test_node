const express = require('express');
const board_router = express.Router();
const {AdminAuth} = require('../middleware/middleware1')
const {UserAuth} = require('../middleware/middleware1')


const Controller = require('../controller/board.controller');

const controller = new Controller();

board_router.post('/create',controller.create);
/**
 * @swagger
 * /admin/admin_signup:
 *   post:
 *     tags: [게시글]
 *     summary: 게시글 푸쉬 알림
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               username:
 *                 type: string
 *               password:
 *                 type: string
 *               email:
 *                 type: string
 *           example:
 *             token: "fu5veJQPiUHuEw2BQFN5IF:APA91bG2KAzfO9RrNdkHlDFim0husaK_ttxIKMWJXzcjPn36tuIdWQTOf6QS82pIW8AaxDlN32-ttk9_Ud9IxhFwHzxSjXrHy3i5RFRqCJCy5-zRV_PTV_vT90XHwJrFz25a8d-1CZci"
 * 
 *     responses:
 *       200:
 *         description: 푸쉬 알람 성공
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: 200
 *                 message:
 *                   type: "success"
 *                 data:
 *                   type: "projects/node-test-c0a04/messages/ae5b8915-8d7c-4147-8d95-ee9f912646da"
 *       400:
 *         description: 회원가입 실패
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: integer
 *                 message:
 *                   type: string
 */
board_router.post('/pushAlarm',controller.pushAlarm)
board_router.get('/find',controller.find);
board_router.post('/admincreate',UserAuth,controller.admincreate)


module.exports = board_router;
