'use strict';

module.exports.hello = async (event) => {
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: 'Hello from your friendly neighbor, spiderman! I was born in darkness!!',
        input: event,
      },
      null,
      2
    ),
  };
};
