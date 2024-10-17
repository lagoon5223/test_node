const express = require('express');
const image_router = express.Router();
const {UserAuth} = require('../../middleware/middleware1');
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
 *               filename:
 *                 type: string
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
 *                   data:
 *                     id: 1
 *                     filename: "test_img1728529333389.png"
 *                     path: "uploads/test_img1728529333389.png"
 *                     title: "Sample Title"
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
 * /api/image/find:
 *   post:
 *     tags: [이미지]
 *     summary: 이미지 찾기
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
 *               filename:
 *                 type: string
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
 *                   data:
 *                     id: 1
 *                     filename: "test_img1728529333389.png"
 *                     path: "uploads/test_img1728529333389.png"
 *                     title: "Sample Title"
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
image_router.get('/find',controller.get_image)

module.exports = image_router;
