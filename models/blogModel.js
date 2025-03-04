const { DataTypes } = require('sequelize');
const sequelize = require('../config/dbConnection');

const Blog = sequelize.define('Blog', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    description: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    tags: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    tableName: 'blog',
    timestamps: false,
    freezeTableName: true,
});

sequelize.sync()
    .then(() => {
        console.log('Blog table has been created.');
    })
    .catch(error => {
        console.error('Unable to create table:', error);
    });

module.exports = Blog;