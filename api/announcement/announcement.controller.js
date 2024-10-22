const Service = require('./announcement.service')

class announcement_controller{
    announcement_service = new Service();
    /**
     * 공지사항 생성
     */
    create = async(req,res)=>{
        try {
            const result = await this.announcement_service.create(req.body);
            res.status(200).json({ status: 200, message: 'success', data: result })
        } catch (e) {
            res.status(400).json({ status: 400, message: 'sever error', data: e.message })
        }
    }
    /**
     * 공지사항 전체 조회
     */
    findAll = async(req,res)=>{
        try{
            const result = await this.announcement_service.findAll(req.query);
            res.status(200).json({ status : 200, message: 'success', data : result})
        }catch(e){
            res.status(400).json({ status: 400, message: 'sever error', data: e.message })
        }
    }
    /**
     * 공지사항 단일 조회
     */
    find = async(req,res)=>{
        try{
            const result = await this.announcement_service.find(req.params);
            res.status(200).json({ status : 200, message: 'success', data : result})
        }catch(e){
            res.status(400).json({ status: 400, message: 'sever error', data: e.message })
        }
    }
    /**
     * 공지사항 수정
     */
    update = async(req,res)=>{
        try{
            const result = await this.announcement_service.update({...req.params,...req.body});
            res.status(200).json({ status : 200, message: 'success', data : result})
        }catch(e){
            res.status(400).json({ status: 400, message: 'sever error', data: e.message })
        }
    }
    /**
     * 공지사항 삭제
     */
    delete = async(req,res)=>{
        try{
            const result = await this.announcement_service.delete(req.params);
            res.status(200).json({ status : 200, message: 'success', data : result})
        }catch(e){
            res.status(400).json({ status: 400, message: 'sever error', data: e.message })
        }
    }
}

module.exports = announcement_controller