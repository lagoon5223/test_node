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
 *             username: "admin"
 *             user_account: "test2"
 *             password: "1234"
 *             email: "12345@gmail.com"
 *     responses:
 *       200:
 *         description: 회원가입 성공
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: integer
 *                 message:
 *                   type: string
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
