const Sequilize = require('sequelize');


const connection = new Sequilize("company_db", "Mastadon", "pp95eMLJ", {
    host: "localhost",
    port: 3306,
    dialect: "mysql",
    pool: {
      max: 5,
      min: 0,
      idle: 10000
    }
  });

  module.exports = connection;