const env = require('dotenv')
env.config();

// const accountSid= process.env.TWILIO_SID
// const authToken = process.env.TWILIO_AT
// const twilioSms = require('twilio')
// const twilioClient = twilioSms(accountSid,authToken)

const {User} = require('../../models/index')
const {Sms} = require('../../models/index')

class sms_service{
    create_sms = async(info) =>{
        try{
            // console.log(process.env.TWILIO_FROM)
            // //유저 찾기
            // const {user_id} = info;
            // const finduser = await User.findOne({where:{user_id}})
            // // console.log(finduser.dataValues)
            // const C_user_phone = `+82${finduser.user_phone.slice(1)}`;

            // const result = await twilioClient.messages.create({
            //     body : '테스트용 문자 내용입니다.',
            //     from : process.env.TWILIO_FROM,
            //     to : C_user_phone,
            // })
            // console.log('Message sent :', result.sid)

            // return result;
            
        }catch(e){
            throw e;
        }
    }
}

module.exports = sms_service;