const Sequelize = require('sequelize');
const {DataTypes} = require('sequelize');

module.exports = (sequelize, DataTypes)=>{
    const Comment = sequelize.define('Comment', { // MySQL에는 users라는 테이블 생성
        comment_id:{
            type : DataTypes.INTEGER,
            primaryKey : true,
            autoIncrement : true
        },
        mainName: {
          type:DataTypes.STRING(30),
          allowNull: false, //필수값
      },
         username: { 
            type:DataTypes.STRING(20),
            allowNull: false,
        },
        writing:{
            type:DataTypes.STRING(1000),
            allowNull : false,
        }
        
    },{
        // 한글을 쓸수 있게 해준다.(한글 저장)
        tableName: 'comment',
        freezeTableName: false,
        charset: 'utf8',
        collate: 'utf8_general_ci' 
    });
    Comment.associate = (db) => { //게시글을 N으로 정의
        Comment.belongsTo(db.User, {foreignKey : "user_id"});
    }
    return Comment;
  }
  