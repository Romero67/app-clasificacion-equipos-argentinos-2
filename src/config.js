require("dotenv").config();

const configurations = {
  PORT: process.env.PORT || 5000,
  MONGODB_URI: process.env.DATABASE_MONGO,
  TIME_GET_TEAMS: process.env.TIME_GET_TEAMS //10 segundos, expresado en milisegundos
};

module.exports = configurations;
