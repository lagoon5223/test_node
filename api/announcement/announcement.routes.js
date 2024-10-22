const express = require("express")
const {AdminAuth,UserAuth} = require('../../middleware/Auth')
const Controller = require('./announcement.controller');
const { Admin } = require("../../models");

const controller = new Controller();

const announcement_router = express.Router();
/**
 * @swagger
 * /api/announcement/:
 *   post:
 *     tags: [공지사항]
 *     summary: 공지사항 생성
 *     security:
 *       - api_key: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               subject:
 *                 type: string
 *               admin_id:
 *                 type: integer
 *               writing:
 *                 type: string
 *           examples:
 *             example1:
 *               summary: 예시 데이터
 *               value:
 *                 subject: "게시글 제목"
 *                 admin_id: 1
 *                 writing: "게시글 내용"
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
announcement_router.post('/',AdminAuth,controller.create);
/**
 * @swagger
 * /api/announcement/:
 *   get:
 *     tags: [공지사항]
 *     summary: 공지사항 전체 조회
 *     security:
 *       - api_key: []
 *     parameters:
 *       - name: admin_id
 *         in: query
 *         required: false
 *         description: admin_id
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
announcement_router.get('/',AdminAuth,controller.findAll);
/**
 * @swagger
 * /api/announcement/{announcement_id}:
 *   get:
 *     tags: [공지사항]
 *     summary: 공지사항 단일 조회
 *     security:
 *       - api_key: []
 *     parameters:
 *       - name: announcement_id
 *         in: path
 *         required: true
 *         description: 공지사항 번호
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
announcement_router.get('/:announcement_id',AdminAuth, controller.find)
/**
 * @swagger
 * /api/announcement/{announcement_id}:
 *   put:
 *     tags: [공지사항]
 *     summary: 공지사항 수정
 *     security:
 *       - api_key: []
 *     parameters:
 *       - name: announcement_id
 *         in: path
 *         required: true
 *         description: announcement_id
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
announcement_router.put('/:announcement_id',AdminAuth,controller.update)

/**
 * @swagger
 * /api/announcement/{announcement_id}:
 *   delete:
 *     tags: [공지사항]
 *     summary: 공지사항 삭제
 *     security:
 *       - api_key: []
 *     parameters:
 *       - name: announcement_id
 *         in: path
 *         required: true
 *         description: announcement_id
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
announcement_router.delete('/:announcement_id',AdminAuth,controller.delete)


module.exports = announcement_router;