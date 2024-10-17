const Service = require('./mail.service');



class mail_controller{
    service = new Service();
    create_mail = async(req,res)=>{
        try{
            const result = await this.service.create_mail(req.body);
            res.status(200).json({ status: 200, message: 'success', data: result })
        }catch(e){
            res.status(200).json({ status: 200, message: 'sever error', data: e.message })
        }
    }
    find_mail = async(req,res)=>{
        try{
            const result = await this.service.find_mail(req.params);
            res.status(200).json({ status: 200, message: 'success', data: result })
        }catch(e){
            res.status(200).json({ status: 200, message: 'sever error', data: e.message })
        }
    }
    find_all_mail = async(req,res)=>{
        try{
            const result = await this.service.find_all_mail(req.query);
            res.status(200).json({ status: 200, message: 'success', data: result })
        }catch(e){
            res.status(200).json({ status: 200, message: 'sever error', data: e.message })
        }
    }
}


module.exports = mail_controller;