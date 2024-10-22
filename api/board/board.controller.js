const Service = require('./board.service.js')

class board_controller {
    boardservice = new Service();


    create = async (req, res) => {
        try {
            const result = await this.boardservice.create(req.body);
            res.status(200).json({ status: 200, message: 'success', data: result })
        } catch (e) {
            res.status(200).json({ status: 200, message: 'sever error', data: e.message })
        }
    }

    find_all = async (req, res) => {
        try {
            const result = await this.boardservice.find_all(req.query);
            res.status(200).json({ status: 200, message: 'success', data: result })
        } catch (e) {
            res.status(200).json({ status: 200, message: 'sever error', data: e.message })
        }
    }

    find = async (req, res) => {
        try {
            const result = await this.boardservice.find(req.params);

            res.status(200).json({ status: 200, message: 'success', data: result })
        } catch (e) {
            res.status(200).json({ status: 404, message: 'server error', data: e.message })
        }
    }

    upload = async (req, res) => {
        try {

            const result = await this.boardservice.upload({...req.params,...req.body});

            res.status(200).json({ status: 200, message: 'success', data: result })
        } catch (e) {
            res.status(200).json({ status: 404, message: 'server error', data: e.message })
        }

    }

    delete = async (req,res)=>{
        try {

            const result = await this.boardservice.delete(req.params);

            res.status(200).json({ status: 200, message: 'success', data: result })
        } catch (e) {
            res.status(200).json({ status: 404, message: 'server error', data: e.message })
        }

    }
    admincreate = async (req, res) => {
        try {
            const result = await this.boardservice.admincreate(req.body);

            res.status(200).json({ status: 200, message: 'success', data: result })
        } catch (e) {
            res.status(200).json({ status: 404, message: 'server error', data: e.message })
        }
    }

    pushAlarm = async (req, res) => {
        try {
            const result = await this.boardservice.pushAlarm(req.body);

            res.status(200).json({ status: 200, message: 'success', data: result })
        } catch (e) {
            res.status(200).json({ status: 404, message: 'server error', data: e.message })
        }

    }
}

module.exports = board_controller;
