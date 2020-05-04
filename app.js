const AWS = require('aws-sdk');
const fs = require('fs');
const path = require('path');

const log4js = require('log4js');
app.logger = log4js.getLogger();
app.logger.level = 'debug';

AWS.config.update({
  accessKeyId: "<Access Key Here>",   // TODO: add valid access key
  secretAccessKey: "<Secret Access Key Here>"   // TODO: add valid secret key
});

const s3 = new AWS.S3();
const filePath = "./data/file.txt";

const params = {
  Bucket: '<Bucket Name Here>',    // TODO: add valid bucket name
  Body : fs.createReadStream(filePath),
  Key : "folder/" + Date.now() + "_" + path.basename(filePath)
};

s3.upload(params, function (err, data) {
  if (err) {
    app.logger.error(`Error: ${err}`)
  }

  //success
  if (data) {
    app.logger.info(`Uploaded in: ${data.Location}`);
  }
});
