const express = require('express');
const admin_router = express.Router();
const Controller = require('../controller/admin.controller');

const controller = new Controller();

/**
 * @swagger
 * /admin/admin_login:
 *   post:
 *     tags: [Admin]
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
 *     responses:
 *       200:
 *         description: 로그인 성공
 *       401:
 *         description: 로그인 실패
 */
admin_router.post('/admin_login', controller.admin_login);

/**
 * @swagger
 * /admin/admin_signup:
 *   post:
 *     tags: [Admin]
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
 *     responses:
 *       200:
 *         description: 회원가입 성공
 *       400:
 *         description: 회원가입 실패
 */
admin_router.post('/admin_signup', controller.admin_signup);

module.exports = admin_router;