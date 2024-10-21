const { Image } = require('../../models/index');
const { User } = require('../../models/index');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken'); // jwt 모듈 불러오기
const env = require('dotenv');
const multer = require('multer');
const fs = require('fs');
const path = require('path');
const cors = require('cors');
env.config();
const secretKey = process.env.JWT_SECRET_KEY;

class image_service {//컨트롤러가 전해준 요청을 응답해줄 함수작성


    test_image = async (file) => {
        try {
            // 파일 이름과 확장자 분리
            console.log(file)
            const {user_id} = file;
            const ext = path.extname(file.originalname); // 확장자 추출
            const baseName = path.basename(file.originalname, ext); // 파일 이름 (확장자 제외)
            const timeset = Math.floor(Date.now() / 10000);
            // 새로운 파일 이름 생성
            const newFileName = `${baseName}${timeset}${ext}`; // 예: test_img_1634748000000.png
            // console.log(newFileName)

            // DB에 저장할 데이터
            const imageData = {
                filename: newFileName, // 확장자가 포함된 새로운 파일 이름
                user_id : user_id,
            };
            console.log(imageData)
            const result = await Image.create(imageData)
            return result; // 데이터베이스에 저장;
        } catch (error) {
            throw error; // 에러를 상위로 전달
        }
    }

    find_all = async (query) => {
        try {
            const { user_id } = query;
            if(!user_id)return await Image.findAll();
            const result = Image.findAll({
                include: [
                    {
                        model: User,
                        where: {user_id},
                        required:true
                    }]
            })
            return result;
        } catch (e) {
            throw e;
        }
    }

    get_image = async (Info) => {
        try {
            const { image_id } = Info;

            const findimage = await Image.findOne({
                where: { image_id }
            })
            console.log(findimage.filename)
            const imageUrl = `${findimage.filename}`;
            return imageUrl; // URL 반환
        } catch (e) {
            throw e;
        }

    }

    update = async(Info) =>{
        try{
            const { image_id,user_id } = Info;
            const updateImage = await Image.update({user_id},
                {
                    where:{image_id},
                }
            )
            return await Image.findOne({where:{image_id}})
        }catch(e){
            throw e;
        }
    }

    delete = async(Info)=>{
        try{
            const { image_id } = Info;
            const findImage = await Image.findOne({where:{image_id}});
            if(!findImage){
                throw new Error("이미지를 찾을 수 없음.")
            }
            const filePath = path.join(__dirname,'..', '..', 'uploads',findImage.filename);

           fs.unlink(filePath, (err) => {
            if (err) {
                throw new Error('파일 삭제 중 오류 발생: ' + err.message);
            }
        });
            const result = await Image.destroy({where:{image_id}});
            return result;
        }catch(e){
            throw e;
        }
    }
}



module.exports = image_service;