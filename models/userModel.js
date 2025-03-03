const { Sequelize, DataTypes } = require('sequelize');

const sequelize = new Sequelize('blog_db', 'root', '12345', {
    dialect: 'mysql',
    host: 'localhost'
});

const User = sequelize.define('User', {
    id:{
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    username: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
            isEmail: true
        }
    }
}, {
    tableName: 'User',
    freezeTableName: true,
    timestamps: false,


} );


sequelize.sync()
    .then(() => {
        console.log('User table has been created.');
    })
    .catch(error => {
        console.error('Unable to create table:', error);
    });


module.exports = User;