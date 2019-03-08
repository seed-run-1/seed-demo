'use strict';

module.exports.main = (event, context, callback) => {
  const response = {
    statusCode: 200,
    body: `This is the Kinesis job!\n`
  };

  callback(null, response);
};

