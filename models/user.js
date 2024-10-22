const Sequelize = require('sequelize');
const { DataTypes } = require('sequelize');


module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('User', { // MySQL에는 users라는 테이블 생성
        user_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },

        nickname: {
            type: DataTypes.STRING(10),
            allowNull: false, //필수값
        },

        user_account: {
            type: DataTypes.STRING(16),
            allowNull: false,
            unique: true
        },

        password: {
            // 패스워드는 암호화를 하기 때문에 넉넉하게 잡아주는 것이 좋다. 
            type: DataTypes.STRING(100),
            allowNull: false, //필수값
        },

        email: {
            type: DataTypes.STRING(30),
            // 자주사용되는 자료형 STRING, TEXT, BOOLEAN, INTEGER, FLOAT, DATETIME
            allowNull: false, //필수값
            unique: true //고유값
        },
        user_phone: {
            type: DataTypes.STRING(15),
            allowNull: false,
            unique: true
        },
        refreshToken:{
            type: DataTypes.TEXT,
            allowNull : true,

        }
    }, {
        // 한글을 쓸수 있게 해준다.(한글 저장)
        tableName: 'user',
        freezeTableName: false,
        charset: 'utf8',
        collate: 'utf8_general_ci'
    });

    User.associate = (db) => { // 유저를 1로 정의
        User.hasMany(db.Board, { foreignKey: "user_id" });
        User.hasMany(db.Image, { foreignKey: "user_id" });
        User.hasMany(db.Mail, { foreignKey: "user_id" });
        User.hasMany(db.Sms, { foreignKey: "user_id" });
    };
    return User;
}
