const { Image } = require('../models/index');
const { Board } = require('../models/index');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken'); // jwt 모듈 불러오기
const env = require('dotenv');
const multer = require('multer');
const fs = require('fs');

env.config();
const secretKey = process.env.JWT_SECRET_KEY;

class image_service {//컨트롤러가 전해준 요청을 응답해줄 함수작성
    
    test_image = async (file) => {
        try {
            if (!file) {
                throw new Error('파일이 없습니다.');
            }
            return {
                filename: file.filename,
                path: file.path,
            };
        } catch (error) {
            throw error; // 에러를 상위로 전달
        }
    }
}



module.exports = image_service;