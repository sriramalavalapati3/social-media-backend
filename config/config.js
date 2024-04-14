const mongoose=require("mongoose");
const {logger} = require('../middlewares/logger')
require('dotenv').config()
const connection=mongoose.connect(process.env.mongolink);
connection.then(() => {
    logger.info('Data Base is connected','config.js')
  }).catch((error) => {
    logger.error("Error connecting to database:", error);
  });
module.exports={connection};
