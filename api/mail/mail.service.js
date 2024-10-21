const env = require('dotenv');
const nodemailer = require('nodemailer');
const fs = require('fs');
const path = require('path');
const { Mail } = require('../../models/index')
const { User } = require('../../models/index')


env.config();
const { EMAIL_SERVICE, MY_EMAIL, PASSWORD } = process.env;


class mail_service {
    create_mail = async (info) => {
        try {
            const { subject, to_email, user_id } = info;
            // console.log(subject,to_email,user_id,writing)
            // console.log(typeof(EMAIL_SERVICE, USER, PASSWORD))
            const finduser = await User.findOne({ where: { user_id } })
            console.log(finduser)
            const htmlstyle = fs.readFileSync('./api/mail/mailstyle.html', 'utf-8');
            const transporter = nodemailer.createTransport({ // 보내는 이메일
                service: EMAIL_SERVICE,
                auth: {
                    user: MY_EMAIL,
                    pass: PASSWORD
                }
            });
            const mailOption = {
                from: MY_EMAIL,
                to: finduser.email,
                subject: subject,
                html: htmlstyle
            }
            // console.log(EMAIL_SERVICE, MY_EMAIL, PASSWORD )
            // console.log("?")
            // console.log(mailOption)
            const result = await transporter.sendMail(mailOption, (error, info) => {

                if (error) {
                    throw new Error("server error");
                } else {
                    console.log('발송되었음.')
                }

            });

            const memo_mail = await Mail.create(info)
            return { result, memo_mail };

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
    find_all_mail = async (info) => {
        try {
            const { user_id } = info;
            if (!user_id) {
                const result = await Mail.findAll({

                })
                return result;
            } else {
                const result = await Mail.findAll({
                    include: [{
                        model: User,
                        where: { user_id },
                        required : true
                    }]
                })
                return result;
            }
        } catch (e) {
            throw e;
        }
    }
    upload_mail = async (info) => {
        try {
            const { mail_number, subject, to_email, user_id } = info;
            if (!subject) throw new Error("제목이 없습니다");
            if (!to_email) throw new Error("수신 이메일이 없습니다.")
            // console.log(info)
            const update = await Mail.update({ subject, to_email, user_id }, {
                where: { mail_number },
            })
            const result = await Mail.findOne({
                where: { mail_number },
            })
            return result;
        } catch (e) {
            throw e;
        }
    }
    delete_mail = async (info) => {
        try {
            const { mail_number } = info;
            const result = await Mail.destroy({
                where: { mail_number },
            })
            return result;
        } catch (e) {
            throw e;
        }
    }

}
//메일 단일 조회



module.exports = mail_service;