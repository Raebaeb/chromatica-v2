const { Sequelize } = require("sequelize");
require("dotenv").config();

const sequelize = new Sequelize(
  "postgresql://postgres:postgres@localhost:54322/postgres"
);

module.exports = sequelize;
