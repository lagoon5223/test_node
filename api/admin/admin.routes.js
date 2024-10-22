const express = require('express');
const admin_router = express.Router();
const Controller = require('./admin.controller');
const {AdminAuth} = require('../../middleware/Auth')

const controller = new Controller();




/**
 * @swagger
 * /api/admin/:
 *   post:
 *     tags: [관리자]
 *     summary: 관리자 회원가입
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               admin_name:
 *                 type: string
 *               admin_account:
 *                 type: string
 *               password:
 *                 type: string
 *               email:
 *                 type: string
 *           example:
 *             admin_name: "admin"
 *             admin_account: "test2"
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
 *                 data:
 *                   type: object
 *                   properties:
 *                     user_id:
 *                       type: integer
 *                       example: 1
 *                     admin_name:
 *                       type: string
 *                       example: "admin"
 *                     admin_account:
 *                       type: string
 *                       example: "test2"
 *                     password:
 *                       type: string
 *                       example: "1234"
 *                     email:
 *                       type: string
 *                       example: "12345@gmail.com"
 *       400:
 *         description: 회원가입 실패
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: integer
 *                   example: 200
 *                 message:
 *                   type: string
 *                   example: "server error"
 */
admin_router.post('/', controller.admin_signup);

/**
 * @swagger
 * /api/admin/admin_login:
 *   post:
 *     tags: [관리자]
 *     summary: 관리자 로그인
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               admin_account:
 *                 type: string
 *               password:
 *                 type: string
 *           examples:
 *             example1:
 *               summary: 예시 로그인 데이터
 *               value:
 *                 admin_account: "test2"
 *                 password: "1234"
 *     responses:
 *       200:
 *         description: 로그인 성공
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: integer
 *                 message:
 *                   type: string
 *                 data:
 *                   type: string
 *             examples:
 *               example1:
 *                 summary: 성공적인 응답 예시
 *                 value:
 *                   status: 200
 *                   message: "success"
 *                   data: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
 *       400:
 *         description: 로그인 실패
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
 *                 summary: 실패 응답 예시
 *                 value:
 *                   status: 400
 *                   message: "server error"
 */
admin_router.post('/admin_login', controller.admin_login);


/**
 * @swagger
 * /api/admin/:
 *   get:
 *     tags: [관리자]
 *     summary: 관리자 전체 조회
 *     security:
 *       - api_key: []
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
admin_router.get('/',AdminAuth,controller.find_all)
/**
 * @swagger
 * /api/admin/{admin_id}:
 *   get:
 *     tags: [관리자]
 *     summary: 관리자 단일 조회
 *     security:
 *       - api_key: []
 *     parameters:
 *       - name: admin_id
 *         in: path
 *         required: true
 *         description: 어드민 번호
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
 *                 data:
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
admin_router.get('/:admin_id',AdminAuth,controller.find)


/**
 * @swagger
 * /api/admin/{admin_id}:
 *   put:
 *     tags: [관리자]
 *     summary: 관리자 수정
 *     security:
 *       - api_key: []
 *     parameters:
 *       - name: admin_id
 *         in: path
 *         required: true
 *         description: 관리자 번호
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               admin_name:
 *                 type: string
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *               newpassword:
 *                 type: string
 *           examples:
 *             example1:
 *               summary: 예시 데이터
 *               value:
 *                 admin_name: "adminname"
 *                 email: "email@gmail.com"
 *                 password : "1234"
 *                 newpassword : "12345"
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
admin_router.put('/:admin_id',AdminAuth,controller.update)

/**
 * @swagger
 * /api/admin/{admin_id}:
 *   delete:
 *     tags: [관리자]
 *     summary: 관리자 삭제
 *     security:
 *       - api_key: []
 *     parameters:
 *       - name: admin_id
 *         in: path
 *         required: true
 *         description: 관리자 번호
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
admin_router.delete('/:admin_id',AdminAuth,controller.delete)

module.exports = admin_router;