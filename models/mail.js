const Sequelize = require('sequelize');
const {DataTypes} = require('sequelize');

module.exports = (sequelize, DataTypes)=>{
    const Mail = sequelize.define('Mail', {
        mail_number:{
            type : DataTypes.INTEGER,
            primaryKey : true,
            autoIncrement : true
        },
        subject: {
          type:DataTypes.STRING(20),
          allowNull: false, //필수값
      },
         to_email: { 
            type:DataTypes.STRING(30),
            allowNull: false,
        },
        writing:{
            type:DataTypes.STRING(1000),
            allowNull : true,
        }        
    },{
        // 한글을 쓸수 있게 해준다.(한글 저장)
        tableName: 'mail',
        freezeTableName: false,
        charset: 'utf8',
        collate: 'utf8_general_ci' 
    });
    Mail.associate = (db) => { //메일을 N으로 정의
        Mail.belongsTo(db.User, {foreignKey : "user_id"});
    }
    return Mail;
  }
  