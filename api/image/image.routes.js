const express = require('express');
const image_router = express.Router();
const {UserAuth} = require('../../middleware/Auth');
const upload = require('../../middleware/multer')
const Controller = require('./image.controller');

const controller = new Controller();

/**
 * @swagger
 * /api/image/:
 *   post:
 *     tags: [이미지]
 *     summary: 이미지 업로드
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             properties:
 *               image:
 *                 type: string
 *                 format: binary
 *               user_id:
 *                 type: integer
 *             required:
 *               - image
 *               - user_id
 *     responses:
 *       200:
 *         description: 이미지 업로드 성공
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
 *         description: 이미지 업로드 실패
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
image_router.post('/',upload.single('image'),controller.test_image);
/**
 * @swagger
 * /api/image/:
 *   get:
 *     tags: [이미지]
 *     summary: 이미지 전체 조회
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

image_router.get('/',controller.find_all)
/**
 * @swagger
 * /api/image/{image_id}:
 *   get:
 *     tags: [이미지]
 *     summary: 이미지 찾기
 *     parameters:
 *       - name: image_id
 *         in: path
 *         required: true
 *         description: image_id
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: 이미지 업로드 성공
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
 *                     id:
 *                       type: integer
 *                     filename:
 *                       type: string
 *                     path:
 *                       type: string
 *                     title:
 *                       type: string
 *             examples:
 *               example1:
 *                 summary: 성공적인 응답 예시
 *                 value:
 *                   status: 200
 *                   message: "success"
 *       400:
 *         description: 이미지 업로드 실패
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
image_router.get('/:image_id', controller.get_image);

/**
 * @swagger
 * /api/image/{image_id}:
 *   put:
 *     tags: [이미지]
 *     summary: 이미지 수정
 *     parameters:
 *       - name: image_id
 *         in: path
 *         required: true
 *         description: 이미지 번호
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               user_id:
 *                 type: integer
 *           examples:
 *             example1:
 *               summary: 예시 데이터
 *               value:
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
image_router.put('/:image_id',controller.update);
/**
 * @swagger
 * /api/image/{image_id}:
 *   delete:
 *     tags: [이미지]
 *     summary: 이미지 삭제
 *     parameters:
 *       - name: image_id
 *         in: path
 *         required: true
 *         description: 이미지 번호
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
image_router.delete('/:image_id',controller.delete)

module.exports = image_router;
