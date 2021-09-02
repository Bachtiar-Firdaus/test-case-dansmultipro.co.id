const path = require("path");
const dotenv = require("dotenv");
dotenv.config();

module.exports = {
  secretKey: process.env.secretKey,
  serviceName: process.env.serviceName,
  //----- konfigurasi database ----//
  dbHost: process.env.dbHost,
  dbUser: process.env.dbUser,
  dbPass: process.env.dbPass,
  dbName: process.env.dbName,

  awsSecret: process.env.awsSecret,
  awsBucketName: process.env.awsBucketName,
  awsId: process.env.awsId,
  region: process.env.region,
};
