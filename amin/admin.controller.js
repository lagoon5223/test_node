const Service = require('./admin.service.js')

class admin_controller {
    adminservice = new Service();


    admin_login = async (req, res) => {
        try {
            const result = await this.adminservice.admin_login(req.body);
            res.status(200).json({ status: 200, message: 'success', data: result })
        } catch (e) {
            res.status(200).json({ status: 200, message: 'sever error', data: e.message })
        }
    }

    admin_signup = async (req,res) => {
        try {

            const result = await this.adminservice.createAdmin(req.body);

            res.status(200).json({ status: 200, message: 'success', data: result })
        } catch (e) {
            res.status(200).json({ status: 404, message: 'server error', data: e.message })
        }
    }
}

module.exports = admin_controller;
