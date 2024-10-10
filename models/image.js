const Sequelize = require('sequelize');
const {DataTypes} = require('sequelize');

module.exports = (sequelize, DataTypes)=>{
    const Image = sequelize.define('Image', { // MySQL에는 users라는 테이블 생성
        
        get_image:{
            type:DataTypes.STRING(200),
            allowNull: true,
        }
    },{
        // 한글을 쓸수 있게 해준다.(한글 저장)
        tableName: 'image',
        freezeTableName: false,
        charset: 'utf8',
        collate: 'utf8_general_ci' 
    });
    Image.associate = (db) => {
    }
    return Image;
  }