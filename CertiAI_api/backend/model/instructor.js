const sequelize = require("../config")
const { Sequelize, DataTypes } = require("sequelize");

const Instructor = sequelize.define("Instructor", {
 
    Name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    Email: {
      type: DataTypes.STRING,
      allowNull: false
    },
    Password: {
        type: DataTypes.STRING,
        allowNull: false
    },
    OTP: {
      type: DataTypes.STRING,
      allowNull: false
  },
  Isverified:{
    type:DataTypes.BOOLEAN,
    allowNull:false
  }
  
 });

 module.exports = Instructor