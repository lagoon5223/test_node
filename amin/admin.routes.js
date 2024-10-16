const express = require('express');
const admin_router = express.Router();
const Controller = require('./admin.controller');

const controller = new Controller();


/**
 * @swagger
 * /admin/admin_login:
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
 *               username:
 *                 type: string
 *               password:
 *                 type: string
 *           examples:
 *             example1:
 *               summary: 예시 로그인 데이터
 *               value:
 *                 user_account: "test2"
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
 *                   data: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhZG1pbl9pZCI6MSwidXNlcm5hbWUiOiJhZG1pbiIsInVzZXJfYWNjb3VudCI6InRlc3QyIiwiZW1haWwiOiIxMjM0NUBnbWFpbC5jb20iLCJjcmVhdGVkQXQiOiIyMDI0LTEwLTEwVDAyOjQyOjQ0LjAwMFoiLCJ1cGRhdGVkQXQiOiIyMDI0LTEwLTEwVDAyOjQyOjQ0LjAwMFoiLCJpYXQiOjE3Mjg1MjgxNzF9.OV4_pgZS3usEb0lmdraEsFWo94YAV2OaRwyMw_1NwJE"
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
 * /admin/admin_signup:
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
 *                 data:
 *                   type: object
 *                   properties:
 *                     user_id:
 *                       type: integer
 *                       example: 1
 *                     username:
 *                       type: string
 *                       example: "admin"
 *                     user_account:
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
admin_router.post('/admin_signup', controller.admin_signup);

module.exports = admin_router;