const { Sequelize, DataTypes } = require("sequelize");

const sequelizee = new Sequelize("CERTIAI", "postgres", "123", {
  host: "localhost",
  dialect: "postgres",
});

sequelizee
  .authenticate()
  .then(() => {
    console.log("Connection!!! has been established successfully.");
  })
  .catch((error) => {
    console.error("Unable to connect to the database: ", error);
  });

module.exports = sequelizee;