require("dotenv").config();

const { DB_PORT, DB_HOST, DB_USERNAME, DB_PASSWORD, DB_DATABASE } = process.env;

module.exports = {
  db: {
    username: DB_USERNAME,
    password: DB_PASSWORD,
    database: DB_DATABASE,
    host: DB_HOST,
    port: DB_PORT,
    dialect: "mysql",
  },
};
