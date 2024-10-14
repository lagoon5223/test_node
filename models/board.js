const Sequelize = require('sequelize');
const {DataTypes} = require('sequelize');

module.exports = (sequelize, DataTypes)=>{
    const Board = sequelize.define('Board', { // MySQL에는 users라는 테이블 생성
        board_number:{
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
        },
        
    },{
        // 한글을 쓸수 있게 해준다.(한글 저장)
        tableName: 'board',
        freezeTableName: false,
        charset: 'utf8',
        collate: 'utf8_general_ci' 
    });
    Board.associate = (db) => { //게시글을 N으로 정의
        Board.belongsTo(db.User, {foreignKey : "user_id"});
    }
    return Board;
  }
  