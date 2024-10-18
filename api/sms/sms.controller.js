const Service = require('./sms.service')


class sms_controller{
    service = new Service();
    create_sms = async(req,res)=>{
        try{
            const result = await this.service.create_sms(req.body);
            res.status(200).json({ status: 200, message: 'success', data: result })
        }catch(e){
            res.status(200).json({ status: 200, message: 'sever error', data: e.message })
        }
    }
}

module.exports = sms_controller;