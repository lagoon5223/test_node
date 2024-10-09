const { User } = require('../models/index');
const { Board } = require('../models/index');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken'); // jwt 모듈 불러오기
const env = require('dotenv');
const multer = require('multer');
const fs = require('fs');

env.config();
const secretKey = process.env.JWT_SECRET_KEY;

class user_service {//컨트롤러가 전해준 요청을 응답해줄 함수작성
    

    test = async (userInfo) => {
        try {

        } catch (e) {

        }
    }
    tokentest = async (userInfo) => {
        try {
            console.log('서비스');

        } catch (e) {
            throw e;
        }
    }


    find = async (qurey) => {
        try {
            const { user_id } = qurey;
            console.log(user_id)
            const result = await User.findAll({

                include: [{
                    model: Board,
                    where: { user_id },
                }]

            });
            console.log(result);
            return result;
        } catch (e) {
            throw e;
        }
    }


    login = async (userInfo) => {
        try {
            console.log('연결됨');
            const { user_account, password } = userInfo;
            const finduser = await User.findOne({ where: { user_account } });
             console.log(finduser.user_account);
            if (!finduser) {
                throw new Error("존재하지 않는 아이디입니다.")
            }

            const findpassword = finduser.dataValues.password;
            const matchPW = bcrypt.compareSync(password, findpassword);

            if (!matchPW) {
                throw new Error('비밀번호가 일치하지 않습니다.');
            }
            // console.log(findpassword);
            // console.log(matchPW);
            // const payload = await user_account;
            delete finduser.dataValues.password;
            // console.log(finduser.dataValues)
            const token = jwt.sign(finduser.dataValues, secretKey);
            console.log(token);
            // const verifyed = jwt.verify(token, secretKey);
            // console.log("verify : ", verifyed);
            return token;
        } catch (e) {
            throw e;
        }

    }

    delete = async (userInfo) => {
        try {
            const { user_account } = userInfo;
            const finduser = await User.findOne({ where: { user_account } });
            if (!finduser) {
                throw new Error('존재하는 아이디가 없습니다.');
            }
            // console.log(test);
            console.log('삭제되었습니다.')
            return await User.destroy({ where: { user_account } });

        } catch (e) {
            throw e;
        }

    }

    update = async (id, userInfo) => {
        try {
            const { password } = userInfo;
            console.log(password);
            const newpassword = password;
            // console.log(newpassword);
            return await User.update({
                password: newpassword,
            }, {
                where: id
            });
        } catch (e) {
            throw e;
        }

    }



    createUser = async (userInfo) => {
        try {
            const { email, user_account, password } = userInfo
            const finduser = await User.findOne({ where: { email, user_account } });
            // console.log(finduser)
            if (finduser) {
                throw new Error('이미 존재하는 아이디입니다.');
            }
            if (!password) {
                throw new Error('Not Password');
            }
            if (!email) {
                throw new Error('Not Email');
            }


            userInfo.password = bcrypt.hashSync(userInfo.password, 10);
            const result = await User.create(userInfo);
            return result


        } catch (e) {
            throw e
        }
    }
    
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



module.exports = user_service;