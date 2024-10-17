const env = require('dotenv');
const nodemailer = require('nodemailer');
const fs = require('fs');
const path = require('path');
const { Mail } = require('../../models/index')
const { User } = require('../../models/index')


env.config();
const { EMAIL_SERVICE, USER, PASSWORD } = process.env;


class mail_service {
    create_mail = async (info) => {
        try {
            const { subject, to_email, user_id } = info;
            // console.log(subject,to_email,user_id,writing)
            // console.log(typeof(EMAIL_SERVICE, USER, PASSWORD))
            const htmlstyle = fs.readFileSync('./api/mail/mailstyle.html', 'utf-8');
            const transporter = nodemailer.createTransport({ // 보내는 이메일
                service: EMAIL_SERVICE,
                auth: {
                    user: USER,
                    pass: PASSWORD
                }
            });
            const mailOption = {
                from: USER,
                to: to_email,
                subject: subject,
                html: htmlstyle
            }
            // console.log("?")
            // console.log(mailOption)
            const result = await transporter.sendMail(mailOption, (error, info) => {
                if (error) {
                    throw error;
                } else {
                    console.log('발송되었음.')
                }

            });
            const memo_mail = await Mail.create(info)
            return result, memo_mail;

        } catch (e) {
            throw e;
        }
    }

    find_mail = async (info) => {
        try {
            const { mail_number } = info;
            console.log(info, mail_number)
            const findmail = await Mail.findOne({
                where: { mail_number }
            })
            return findmail
        } catch (e) {
            throw e;
        }
    }
    find_all_mail = async (info)=>{
        try{
            const {user_id}= info;
            if(!user_id){
                const result = await Mail.findAll({

                })
                return result;
            }else{
                const result = await Mail.findAll({
                    include:[{
                        model : User,
                        where :{user_id}
                    }]                    
                })
                return result;
            }
        }catch(e){
            throw e;
        }
    }

}
//메일 단일 조회



module.exports = mail_service;