const {Admin, Announcement} = require('../../models/index')


class announcement_service{
    
    /**
     * 공지사항 생성
     *  --
     * @returns 
     */
    create = async(Info)=>{
        try{
            const {admin_id} = Info
            const findAdmin = await Admin.findOne({where:{admin_id}})
            if(!findAdmin)throw new Error("관리자를 찾을 수 없음")
            const result = await Announcement.create(Info);
            return result;
        }catch(e){
            throw e;
        }
    }
    /**
     * 공지사항 전체 조회
     * @param admin_id : integer 
     * @returns 
     */
    findAll = async(Info)=>{
        try{
            const {admin_id} = Info;
            if(!admin_id)return await Announcement.findAll();
            const findAnnouncement = await Announcement.findAll(
                {
                    include:[{
                        model: Admin,
                        where: {admin_id},
                        required:false
                    }]
                }
            )
            console.log(findAnnouncement)
            return findAnnouncement;
        }catch(e){
            throw e;
        }
    }

    /**
     * 공지사항 단일 조회
     * @param announcement_id : integer
     * @returns 
     */
    find = async(Info)=>{
        try{
            const {announcement_id} = Info;
            const findAnnouncement = await findOne({where:{announcement_id}});
            if(!findAnnouncement)throw new Error("공지사항을 찾을 수 없습니다.")
            return findAnnouncement;
        }catch(e){
            throw e;
        }
    }

    /**
     * 공지사항 수정
     * @param announcement_id : integer 
     * @returns 
     */
    update = async(Info)=>{
        try{
            const {announcement_id,subject,admin_id,writing} = Info;
            const findAnnouncement = await Announcement.findOne({where:{announcement_id}})
            if(!findAnnouncement)throw new Error("공지사항을 찾을 수 없습니다.")
            await Announcement.update({subject,admin_id,writing},
        {
            where:{announcement_id},
        })
        return await Announcement.findOne({where:{announcement_id}})
        }catch(e){
            throw e;
        }
    }

    delete = async(Info)=>{
        try{
            const {announcement_id} = Info;
            const findAnnouncement = await Announcement.findOne({where:{announcement_id}})
            if(!findAnnouncement)throw new Error("공지사항을 찾을 수 없습니다.")
            const result = await Announcement.destroy({where:{announcement_id}})
            return result
        }catch(e){
            throw e;
        }
    }
}

module.exports = announcement_service;