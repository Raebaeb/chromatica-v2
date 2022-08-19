const sequelize = require("sequelize");
const db = require("../config/database");
const Color = require("./color");

const Palette = db.define("palette", {
  color_1: {
    type: sequelize.DataTypes.INTEGER,
    references: {
      model: Color,
      key: "id",
    },
  },
  color_2: {
    type: sequelize.DataTypes.INTEGER,
    references: {
      model: Color,
      key: "id",
    },
  },
  color_3: {
    type: sequelize.DataTypes.INTEGER,
    references: {
      model: Color,
      key: "id",
    },
  },
  accent_1: {
    type: sequelize.DataTypes.INTEGER,
    references: {
      model: Color,
      key: "id",
    },
  },
  accent_1: {
    type: sequelize.DataTypes.INTEGER,
    references: {
      model: Color,
      key: "id",
    },
  },
  name: sequelize.STRING,
  tags: sequelize.JSON,
});

module.exports = Palette;
