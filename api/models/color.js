const sequelize = require("sequelize");
const db = require("../config/database");

const Color = db.define("color", {
  rgb_hex: sequelize.STRING,
});
