const express = require('express');
const mail_router = express.Router();
const Controller = require('./mail.controller');

const controller = new Controller();

/**
 * @swagger
 * /api/mail/:
 *   post:
 *     tags: [메일]
 *     summary: 메일 전송
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
 *               to_email:
 *                 type: string
 *           examples:
 *             example1:
 *               summary: 예시 데이터
 *               value:
 *                 subject: "테스트 이메일 제목"
 *                 user_id: 1
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
mail_router.post('/', controller.create_mail);

/**
 * @swagger
 * /api/mail/:
 *   get:
 *     tags: [메일]
 *     summary: 전송 메일 전체 조회
 *     parameters:
 *       - name: user_id
 *         in: query
 *         required: false
 *         description: user_id
 *         schema:
 *           type: integer
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
mail_router.get('/', controller.find_all_mail);

/**
 * @swagger
 * /api/mail/{mail_number}:
 *   get:
 *     tags: [메일]
 *     summary: 전송 메일 단일 조회
 *     parameters:
 *       - name: mail_number
 *         in: path
 *         required: true
 *         description: 메일 번호
 *         schema:
 *           type: integer
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
mail_router.get('/:mail_number', controller.find_mail);

/**
 * @swagger
 * /api/mail/{mail_number}:
 *   put:
 *     tags: [메일]
 *     summary: 전송 메일 수정
 *     parameters:
 *       - name: mail_number
 *         in: path
 *         required: true
 *         description: 메일 번호
 *         schema:
 *           type: integer
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
 *               to_email:
 *                 type: string
 *           examples:
 *             example1:
 *               summary: 예시 데이터
 *               value:
 *                 subject: "수정된 이메일 제목"
 *                 to_email: "example@gmail.com"
 *                 user_id : 2
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
mail_router.put('/:mail_number', controller.upload_mail);

/**
 * @swagger
 * /api/mail/{mail_number}:
 *   delete:
 *     tags: [메일]
 *     summary: 전송 메일 삭제
 *     parameters:
 *       - name: mail_number
 *         in: path
 *         required: true
 *         description: 메일 번호
 *         schema:
 *           type: integer
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
mail_router.delete('/:mail_number', controller.delete_mail);

module.exports = mail_router;
