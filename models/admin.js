const Sequelize = require('sequelize');
const {DataTypes} = require('sequelize');


module.exports = (sequelize, DataTypes)=>{
    const Admin = sequelize.define('Admin', { // MySQL에는 admins라는 테이블 생성
        admin_id:{
            type : DataTypes.INTEGER,
            primaryKey : true,
            autoIncrement : true
        },
        
        admin_name: {
          type:DataTypes.STRING(30),
          allowNull: false, //필수값
      },
         admin_account: { 
            type:DataTypes.STRING(20),
            allowNull: false,
            unique : true
        },
        password: {
            // 패스워드는 암호화를 하기 때문에 넉넉하게 잡아주는 것이 좋다. 
            type:DataTypes.STRING(100),
            allowNull: false, //필수값
        },
       
        email: {
            type:DataTypes.STRING(30), 
           // 자주사용되는 자료형 STRING, TEXT, BOOLEAN, INTEGER, FLOAT, DATETIME
            allowNull: false, //필수값
            unique: true //고유값
        },
    },{
        // 한글을 쓸수 있게 해준다.(한글 저장)
        tableName: 'admin',
        charset: 'utf8',
        collate: 'utf8_general_ci' 
    });
    Admin.associate = (db) => {}
    return Admin;
  }
  
