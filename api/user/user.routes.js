const express = require('express');
const user_router = express.Router();
const {UserAuth, AdminAuth} = require('../../middleware/Auth');
const upload = require('../../middleware/multer')
const Controller = require('./user.controller');

const controller = new Controller();


/**
 * @swagger
 * /api/user/:
 *   post:
 *     tags: [유저]
 *     summary: 유저 생성
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nickname:
 *                 type: string
 *               user_account:
 *                 type: string
 *               password:
 *                 type: string
 *               email:
 *                 type: string
 *               user_phone:
 *                 type: string
 *           examples:
 *             example1:
 *               summary: 예시 데이터
 *               value:
 *                 nickname: "testuser1"
 *                 user_account: "user1"
 *                 password: "password"
 *                 email: "tjrgh0403@gmail.com"
 *                 user_phone: "01084615223"
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
user_router.post('/',controller.post_signup);

/**
 * @swagger
 * /api/user/login:
 *   post:
 *     tags: [유저]
 *     summary: 로그인
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               user_account:
 *                 type: string
 *               password:
 *                 type: string
 *           examples:
 *             example1:
 *               summary: 예시 데이터
 *               value:
 *                 user_account: "user1"
 *                 password: "password"
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
user_router.post('/login',controller.login);
/**
 * @swagger
 * /api/user/:
 *   get:
 *     tags: [유저]
 *     summary: 유저 전체 조회
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
user_router.get('/',controller.find_all);
/**
 * @swagger
 * /api/user/{user_id}:
 *   get:
 *     tags: [유저]
 *     summary: 유저 단일 조회
 *     parameters:
 *       - name: user_id
 *         in: path
 *         required: true
 *         description: 유저 번호
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
user_router.get('/:user_id',controller.find);
/**
 * @swagger
 * /api/user/{user_id}:
 *   put:
 *     tags: [유저]
 *     summary: 유저 수정
 *     parameters:
 *       - name: user_id
 *         in: path
 *         required: true
 *         description: 유저 번호
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nickname:
 *                 type: string
 *               password:
 *                 type: string
 *               email:
 *                 type: string
 *               user_phone:
 *                 type: string
 *           examples:
 *             example1:
 *               summary: 예시 데이터
 *               value:
 *                 nickname: "testuser2"
 *                 password: "1234"
 *                 email : "example@gmail.com"
 *                 user_phone : "00000000000"
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
user_router.put('/:user_id',controller.update);
/**
 * @swagger
 * /api/user/{user_id}:
 *   delete:
 *     tags: [유저]
 *     summary: 유저 삭제
 *     parameters:
 *       - name: user_id
 *         in: path
 *         required: true
 *         description: 유저 번호
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
user_router.delete('/:user_id',controller.delete);

user_router.get('/tokentest',AdminAuth,controller.tokentest);

user_router.post('/test',controller.test);

user_router.post('/upload',upload.single('image'),controller.test_image);



module.exports = user_router;
