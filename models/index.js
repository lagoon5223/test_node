//models/index.js
const Sequelize = require('sequelize');
const process = require('process');
const env = process.env.NODE_ENV || 'development';
const config = require('../config/config.json')[env];
const Board = require('./board')
const Admin =  require('./admin')
const User =  require('./user')
const Image = require('./image')
const db = {};

//아래 설정을 통해 sequelize 가 노드랑 sql을 연결해준다.
//연결에 성공하면 sequelize에 연결정보가 담기게 된다. 
const sequelize = new Sequelize(config.database, config.username, config.password, config);
db.User = User(sequelize, Sequelize)
db.Admin = Admin(sequelize, Sequelize)
db.Board = Board(sequelize, Sequelize)//테이블을 만들어 줄 수 있다.
db.Image = Image(sequelize,Sequelize)

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;
module.exports = db;