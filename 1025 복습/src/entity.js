const { db } = require("../constants");
const Sequelize = require("sequelize");

const { database, username, password } = db;
const sequelize = new Sequelize(database, username, password, db);

require("./user/user.entity")(sequelize, Sequelize.DataTypes, Sequelize.model);

const { User } = sequelize.models;
module.exports = {
  sequelize,
  User,
};
