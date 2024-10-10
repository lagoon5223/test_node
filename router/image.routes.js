const express = require('express');
const image_router = express.Router();
const {UserAuth} = require('../middleware/middleware1');
const upload = require('../middleware/multer')
const Controller = require('../controller/image.controller');

const controller = new Controller();

/**
 * @swagger
 * /image/upload:
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
 *                 url:
 *                   type: string
 *             examples:
 *               example1:
 *                 summary: 성공적인 응답 예시
 *                 value:
 *                   status: 200
 *                   message: "Image uploaded successfully"
 *                   url: "https://example.com/images/uploaded_image.jpg"
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
 *                   message: "Invalid image format"
 */
image_router.post('/upload',upload.single('image'),controller.test_image);
// router.post('/checkPW',controller.checkPW);


module.exports = image_router;