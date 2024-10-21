const express = require('express');
const image_router = express.Router();
const {UserAuth} = require('../../middleware/Auth');
const upload = require('../../middleware/multer')
const Controller = require('./image.controller');

const controller = new Controller();

/**
 * @swagger
 * /api/image/upload:
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
 *             required:
 *               - image
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
image_router.post('/upload',upload.single('image'),controller.test_image);
/**
 * @swagger
 * /api/image/{image_id}:
 *   get:
 *     tags: [이미지]
 *     summary: 이미지 찾기
 *     parameters:
 *       - name: image_id
 *         in: path
 *         required: false
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

module.exports = image_router;
