const { Sequelize, DataTypes } = require('sequelize');

const sequelize = new Sequelize('blog_db', 'root', '12345', {
    dialect: 'mysql',
    host: 'localhost'
});

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
    tags:{
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