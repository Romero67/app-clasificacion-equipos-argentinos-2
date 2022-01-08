require("dotenv").config();

const configurations = {
  PORT: process.env.PORT || 5000,
  MONGODB_HOST: process.env.MONGODB_HOST || "localhost",
  MONGODB_DATABASE: process.env.MONGODB_DB || "dbTest",
  MONGODB_URI: `mongodb://${process.env.MONGODB_HOST || "localhost"}/${
    process.env.MONGODB_DATABASE || "dbTest"
  }`,
  DATABASE_AGENDA: process.env.DATABASE_AGENDA || 'mongodb://localhost/testAgenda',
  TIME_GET_TEAMS: '20 seconds'
};

module.exports = configurations;
