const express = require('express');
const app = express();
require('dotenv').config();
const {logger} = require('../middlewares/logger');
const {connection} = require('../config/config')


app.listen(process.env.PORT || 8080, async () => {
    try {
        await connection; // Waiting for the database connection to establish
        logger.info(`server running at port ${process.env.PORT}`,'index.js')
    } catch (error) {
        logger.error('Failed to run server',error.message);
    }
});

exports.default = {app}