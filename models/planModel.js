const sequelize = require("../config/dbConnection");
const { DataTypes } = require("sequelize");
const User = require('./userModel');

const Plan = sequelize.define('Plan', {
    id:{
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    username:{
        type: DataTypes.STRING,
        allowNull: false,
        references: {
            model: User,
            key: 'username'
        }
    },
    plan:{
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: "basic"
    },
    count:{
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 5
    }
}, {
    tableName: "plan",
    timestamps: false,
    freezeTableName: true
});

sequelize.sync()
    .then(() => {
        console.log("Plan table has been created.");
    })
    .catch(error => {
        console.error("Unable to create table:", error);
    });

module.exports = Plan;