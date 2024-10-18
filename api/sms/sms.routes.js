const express= require('express')
const sms_router = express.Router()
const {mk_error} = require('../../middleware/mk_error')
const Controller = require('./sms.controller')

const controller = new Controller();



/**
 * @swagger
 * /api/sms/:
 *   post:
 *     tags: [SMS]
 *     summary: SMS 전송 (x)
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               subject:
 *                 type: string
 *               user_id:
 *                 type: integer
 *               writing:
 *                 type: string
 *           examples:
 *             example1:
 *               summary: 예시 데이터
 *               value:
 *                 subject: "문자제목"
 *                 user_id: 1
 *                 writing: "메세지 내용"
 *     responses:
 *       200:
 *         description: 성공 예시
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: integer
 *                 message:
 *                   type: string
 *             examples:
 *               example1:
 *                 value:
 *                   status: 200
 *                   message: "success"
 *       400:
 *         description: 실패 예시
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: integer
 *                 message:
 *                   type: string
 *             examples:
 *               example1:
 *                 value:
 *                   status: 400
 *                   message: "server error"
 */
sms_router.post('/',controller.create_sms)

module.exports = sms_router