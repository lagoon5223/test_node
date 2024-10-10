const multer = require('multer');
const path = require('path');
const fs = require('fs');

const uploadDir = 'uploads';

// 업로드 디렉토리 확인 및 생성
if (!fs.existsSync(uploadDir)) {
    fs.mkdirSync(uploadDir);
}

const storage = multer.diskStorage({ //하드디스크에 업로드 파일을 저장한다는 것.
    destination(req, file, done) { //저장할 경로
        done(null, uploadDir);
    },
    filename(req, file, done) { //저장할 파일명
        const ext = path.extname(file.originalname);
        done(null, path.basename(file.originalname, ext) + Date.now() + ext);
    }
});

const upload = multer({
    storage: storage,//저장할 공간에 대한 정보
    limits: { fileSize: 5 * 1024 * 1024 } // 5MB 용량 제한
});


module.exports = upload;