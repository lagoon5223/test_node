const { Board } = require('../models/index');
const { User } = require('../models/index');
const admin = require('firebase-admin');
const env = require('dotenv');
env.config();


class board_service {//컨트롤러가 전해준 요청을 응답해줄 함수작성

    create = async (Info) => {
        try {
            const { mainName, username, writing } = Info;
            const result = await Board.create(Info);
            return result;
        } catch (e) {
            throw e;
        }

    }



    find = async (query) => {//외래키 = user_id
        try {
            const { board_number } = query;
            // console.log(board_number);
            const userid = await Board.findOne({
                where: { board_number }
            })
            // console.log(userid.user_id);

            const result = await Board.findAll({
                where: { user_id: userid.user_id },
                include: [{
                    model: User,

                    // attributes: ["user_id"],
                }]
            })
            return result;
        } catch (e) {
            throw e;
        }

    }
    admincreate = async (adminInfo) => {
        try {
            const result = await Board.create(adminInfo);
            return result;
        } catch (e) {
            throw e;
        }
    }

    pushAlarm = async (Info) => {
        try {
            const target_token =Info.token;
            console.log(target_token)

            const message = {
                data: {
                    title: '푸시알림 테스트',
                    body: '푸시알림 테스트합니다.',
                    style: '테스트',
                },
                token: target_token,
            }

            const response = await admin.messaging().send(message);
            console.log('Successfully sent message: ', response);
            return response; // 서비스에서 결과를 반환
        } catch (e) {
            console.error('Error sending message: ', e);
            throw e;
        }
    }
}


module.exports = board_service;