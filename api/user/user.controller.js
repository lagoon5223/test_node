
const Service = require('./user.service.js');

class user_controller {//클라이언트의 요청을 가공해 서비스에 전달
    userservice = new Service();


    test = async (req,res) => {
        try{
            const result = await this.userservice.test(req.body);
            res.status(200).json({status : 200, message :'success', data : result})
        }catch(e){
            res.status(200).json({status : 200, message :'sever error', data : e.message})
        }
    }
    tokentest = async (req, res) => {
        try{
            const result = await this.userservice.tokentest(req.body);
            res.status(200).json({status : 200, message :'success', data : result})
        }catch(e){
            res.status(200).json({status : 200, message :'sever error', data : e.message})
        }
    }

    find_all = async (req,res)=> {
        try {
            const result = await this.userservice.find_all(req.query);
            res.status(200).json({status : 200, message :'success', data : result})
        }catch(e){
            res.status(200).json({status : 200, message :'sever error', data : e.message})        
        }
    }

    find = async(req,res)=>{
        try {
            const result = await this.userservice.find(req.params);
            res.status(200).json({status : 200, message :'success', data : result})
        }catch(e){
            res.status(200).json({status : 200, message :'sever error', data : e.message})        
        }
    }

    

    login = async (req, res) => {
        try{
            const result = await this.userservice.login(req.body);
            res.status(200).json({status : 200, message :'success', data : result})
        }catch(e){
            res.status(200).json({status : 200, message :'sever error', data : e.message})
        }
    }
    delete = async (req, res) => {
        try {
            const result = await this.userservice.delete(req.body);
            res.status(200).json({ status: 200, message: 'success', data: result });
        } catch (e) {
            res.status(200).json({ status: 404, message: 'server error', data: e.message })
        }

    }

    update = async (req, res) => {
        try {
            const result = await this.userservice.update(...req.params,...req.body);
            // const password = await this.service.password;
            res.status(200).json({ status: 200, message: 'success', data: result })
        }
        catch (e) {
            res.status(200).json({ status: 404, message: 'server error', data: e.message })
        }


    }
    admin_signup = async (req,res) => {
        try {

            const result = await this.userservice.createAdmin(req.body);

            res.status(200).json({ status: 200, message: 'success', data: result })
        } catch (e) {
            res.status(200).json({ status: 404, message: 'server error', data: e.message })
        }
    }
    post_signup = async (req, res) => {
        try {

            const result = await this.userservice.createUser(req.body);

            res.status(200).json({ status: 200, message: 'success', data: result })
        } catch (e) {
            res.status(200).json({ status: 404, message: 'server error', data: e.message })
        }
    }
    test_image = async(req,res)=>{
        try {

            const result = await this.userservice.test_image(req.file);
            console.log(result)

            res.status(200).json({ status: 200, message: 'success', data: result })
        } catch (e) {
            res.status(200).json({ status: 404, message: 'server error', data: e.message })
        }
    }
    // checkPW = async (req,res)=>{
    //     try{
    //         const result = await this.service.checkpassword(req.body);
    //         res.status(200).json({status : 200, message: 'success',data : result})
    //     }catch(e){
    //         res.status(200).json({status : 404, message :'server error',data : e.message})
    //     }
    // }
}

module.exports = user_controller;
