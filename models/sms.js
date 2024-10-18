const Sequelize = require('sequelize');
const {DataTypes} = require('sequelize');

module.exports = (sequelize, DataTypes)=>{
    const Mail = sequelize.define('Sms', {
        sms_id:{
            type : DataTypes.INTEGER,
            primaryKey : true,
            autoIncrement : true
        },
        subject: {
          type:DataTypes.STRING(20),
          allowNull: false, //필수값
      },
        writing:{
            type:DataTypes.STRING(1000),
            allowNull : true,
        }        
    },{
        // 한글을 쓸수 있게 해준다.(한글 저장)
        tableName: 'sms',
        freezeTableName: false,
        charset: 'utf8',
        collate: 'utf8_general_ci' 
    });
    Mail.associate = (db) => { //메일을 N으로 정의
        Mail.belongsTo(db.User, {foreignKey : "user_id"});
        Mail.belongsTo(db.User, {foreignKey : "user_id"})
    }
    return Mail;
  }
  