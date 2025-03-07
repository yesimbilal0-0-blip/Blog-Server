const { DataTypes } = require('sequelize');
const sequelize = require('../config/dbConnection');
const Plan = require('./planModel');

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
    },
    role: {
        type: DataTypes.STRING,
        allowNull:false
    }
}, {
    tableName: 'User',
    freezeTableName: true,
    timestamps: false,
});

User.hasMany(Plan, { foreignKey: 'username', sourceKey: 'username' });

sequelize.sync()
    .then(() => {
        console.log('User table has been created.');
    })
    .catch(error => {
        console.error('Unable to create table:', error);
    });


module.exports = User;