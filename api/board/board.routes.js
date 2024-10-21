const express = require('express');
const board_router = express.Router();
const {AdminAuth} = require('../../middleware/Auth')
const {UserAuth} = require('../../middleware/Auth')


const Controller = require('./board.controller');

const controller = new Controller();
/**
 * @swagger
 * /api/board/:
 *   post:
 *     tags: [게시글]
 *     summary: 게시글 생성
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               mainName:
 *                 type: string
 *               user_id:
 *                 type: integer
 *               username:
 *                 type: string
 *               writing:
 *                 type: string
 *           examples:
 *             example1:
 *               summary: 예시 데이터
 *               value:
 *                 mainName: "게시글 제목"
 *                 user_id: 1
 *                 username: "test1234"
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
board_router.post('/', controller.create);

/**
 * @swagger
 * /api/board/:
 *   get:
 *     tags: [게시글]
 *     summary: 게시글 전체 조회
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
board_router.get('/',controller.find_all);

/**
 * @swagger
 * /api/board/{board_number}:
 *   get:
 *     tags: [게시글]
 *     summary: 게시글 단일 조회
 *     parameters:
 *       - name: board_number
 *         in: path
 *         required: true
 *         description: 게시글 번호
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
 *                   data: [
 *                     {
 *                       "board_number": 2,
 *                       "mainName": "Test Table",
 *                       "username": "test1234",
 *                       "writing": "Test Post",
 *                       "createdAt": "2024-10-15T08:39:58.000Z",
 *                       "updatedAt": "2024-10-15T08:39:58.000Z",
 *                       "user_id": 1,
 *                       "User": {
 *                         "user_id": 1,
 *                         "username": "DD",
 *                         "user_account": "test1234",
 *                         "password": "$2b$10$GkD043nnKUaGeGuVzSE7wuiSqA6fL5VIxQzvXB/ylKzLtnlOetxda",
 *                         "email": "test123@gmail.com",
 *                         "createdAt": "2024-10-15T08:39:14.000Z",
 *                         "updatedAt": "2024-10-15T08:39:14.000Z"
 *                       }
 *                     }
 *                   ]
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
board_router.get('/:board_number',controller.find);

/**
 * @swagger
 * /api/board/{board_number}:
 *   put:
 *     tags: [게시글]
 *     summary: 게시글 수정
 *     parameters:
 *       - name: board_number
 *         in: path
 *         required: true
 *         description: 게시글 번호
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               mainName:
 *                 type: string
 *               username:
 *                 type: string
 *               writing:
 *                 type: string
 *           examples:
 *             example1:
 *               summary: 예시 데이터
 *               value:
 *                 mainName: "boardname"
 *                 username: "test1"
 *                 writing : "게시글 내용"
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
board_router.put('/:board_number',controller.upload)

/**
 * @swagger
 * /api/board/{board_number}:
 *   delete:
 *     tags: [게시글]
 *     summary: 게시글 삭제
 *     parameters:
 *       - name: board_number
 *         in: path
 *         required: true
 *         description: 게시글 번호
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
board_router.delete('/:board_number',controller.delete)


/**
 * @swagger
 * /api/board/admincreate:
 *   post:
 *     tags: [게시글]
 *     summary: 공지사항 생성
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               mainName:
 *                 type: string
 *               user_id:
 *                 type: integer
 *               username:
 *                 type: string
 *               writing:
 *                 type: string
 *           examples:
 *             example1:
 *               summary: 예시 데이터
 *               value:
 *                 mainName: "게시글 제목"
 *                 user_id: 1
 *                 username: "test1234"
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
board_router.post('/admincreate', AdminAuth, controller.admincreate);

/**
 * @swagger
 * /api/board/pushAlarm:
 *   post:
 *     tags: [게시글]
 *     summary: 게시글 알림 푸쉬
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               token:
 *                 type: string
 *           examples:
 *             example1:
 *               summary: 예시 알람 푸쉬 데이터
 *               value:
 *                 token: "firebase 토큰 값"
 *     responses:
 *       200:
 *         description: 알람 푸쉬 성공
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
 *                 summary: 성공적인 응답 예시
 *                 value:
 *                   status: 200
 *                   message: "success"
 *       400:
 *         description: 알람 푸쉬 실패
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
board_router.post('/pushAlarm', controller.pushAlarm)

module.exports = board_router;
