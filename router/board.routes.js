const express = require('express');
const board_router = express.Router();
const {AdminAuth} = require('../middleware/middleware1')
const {UserAuth} = require('../middleware/middleware1')


const Controller = require('../controller/board.controller');

const controller = new Controller();

board_router.post('/pushAlarm',controller.pushAlarm)
board_router.post('/create',controller.create);
board_router.get('/find',controller.find);
board_router.post('/admincreate',UserAuth,controller.admincreate)


module.exports = board_router;
