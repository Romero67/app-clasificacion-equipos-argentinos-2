require("dotenv").config();

const configurations = {
  PORT: process.env.PORT || 5000,
  MONGODB_URI: process.env.DATABASE_MONGO || 'mongodb:localhost/testApi',
  TIME_GET_TEAMS: process.env.TIME_GET_TEAMS  || 10000//10 segundos, expresado en milisegundos
};

module.exports = configurations;
