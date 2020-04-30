const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

const log4js = require('log4js');
app.logger = log4js.getLogger();
app.logger.level = 'debug';

app.listen(port);
app.logger.info(`Party started on ${port} port.`);
