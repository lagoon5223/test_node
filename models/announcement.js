const Sequelize = require('sequelize');
const {DataTypes} = require('sequelize');

module.exports = (sequelize, DataTypes)=>{
    const Announcement = sequelize.define('Announcement', { // MySQL에는 users라는 테이블 생성
        announcement_id:{
            type : DataTypes.INTEGER,
            primaryKey : true,
            autoIncrement : true
        },
        subject: {
          type:DataTypes.STRING(30),
          allowNull: false, //필수값
      },
        writing:{
            type:DataTypes.STRING(1000),
            allowNull : false,
        },
        
    },{
        // 한글을 쓸수 있게 해준다.(한글 저장)
        tableName: 'announcement',
        freezeTableName: false,
        charset: 'utf8',
        collate: 'utf8_general_ci' 
    });
    Announcement.associate = (db) => { //게시글을 N으로 정의
        Announcement.belongsTo(db.Admin, {foreignKey : "admin_id"});
    }
    return Announcement;
  }
  