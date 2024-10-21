const { Admin } = require('../../models/index');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken'); // jwt 모듈 불러오기
const env = require('dotenv');
env.config();
const secretKey = process.env.JWT_SECRET_KEY;


class admin_service {//컨트롤러가 전해준 요청을 응답해줄 함수작성


    admin_login = async (userInfo) => {
        try {
            const { user_account, password } = userInfo;
            // console.log(userInfo)
            const finduser = await Admin.findOne({ where: { user_account } });
            // console.log(finduser);
            if (!finduser) {
                throw new Error('존재하지않는 아이디입니다.');
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
            const token = jwt.sign(finduser.dataValues, secretKey, { expiresIn: "1h" });
            // console.log(token);
            const verifyed = jwt.verify(token, secretKey);
            // console.log("verify : ", verifyed);

            console.log("어드민 로그인 서비스 도착")
            return token;
        } catch (e) {
            throw e;
        }

    }





    createAdmin = async (userInfo) => {
        try {
            const { email, user_account, password } = userInfo
            const findadmin = await Admin.findOne({ where: { user_account } });
            const findemail = await Admin.findOne({ where: { email } });
            // console.log(findadmin)

            if (findadmin) {
                throw new Error('이미 존재하는 아이디입니다.');
            }
            if (findemail) {
                throw new Error('이미 존재하는 이메일입니다.');
            }
            if (!password) {
                throw new Error('Not Password');
            }

            userInfo.password = bcrypt.hashSync(userInfo.password, 10);
            const result = await Admin.create(userInfo);
            return result


        } catch (e) {
            throw e
        }
    }

    find_all = async (Info) => {
        try {
            const result = await Admin.findAll();
            return result;
        } catch (e) {
            throw e;
        }
    }

    find = async (Info) => {
        try {
            const { admin_id } = Info;
            const findadmin = await Admin.findOne({ where: admin_id })
            return findadmin;
        } catch (e) {
            throw e;
        }
    }
    update = async (Info) => {
        try {
            const { admin_id, username, password, email } = Info;
            let {newpassword}=Info
            const findAdmin = await Admin.findOne({ where: { admin_id } });
            const checkpassword = bcrypt.compare(password,findAdmin.password)
            if (!checkpassword) {
                throw new Error("비밀번호가 일치하지 않습니다.")
            }
            
            newpassword = bcrypt.hashSync(newpassword,10)
            const updateAdmin = await Admin.update({username, password:newpassword,email},
                {
                    where: { admin_id },
                })
            return await Admin.findOne({ where: { admin_id }, })
        } catch (e) {
            throw e;
        }
    }

    delete = async (Info) => {
        try {
            const { admin_id } = Info;
            return await Admin.destroy({ where: admin_id })
        } catch (e) {
            throw e;
        }
    }

}

module.exports = admin_service;