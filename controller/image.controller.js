const Service = require('../service/image.service.js')

class image_controller {
    imageservice = new Service();

    test_image = async(req,res)=>{
        try {
        
            const result = await this.imageservice.test_image(req.file);

            res.status(200).json({ status: 200, message: 'success', data: result })
        } catch (e) {
            res.status(200).json({ status: 404, message: 'server error', data: e.message })
        }
    }

    get_image = async(req,res)=>{
        try {
            
            const result = await this.imageservice.get_image(req.query);
            console.log("결과값 : ",result)
            res.status(200).json({ status: 200, message: 'success', data : result})
        } catch (e) {
            res.status(200).json({ status: 404, message: 'server error', data: e.message })
        }
    }
    all_image = async(req,res)=>{
        try {
            
            const result = await this.imageservice.all_image();
            console.log("결과값 : ",result)
            res.status(200).json({ status: 200, message: 'success', data : result})
        } catch (e) {
            res.status(200).json({ status: 404, message: 'server error', data: e.message })
        }
    }
    
}

module.exports = image_controller;