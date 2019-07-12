module.exports.handler = async function handler(event, context, callback) {
  return callback(null, {
    statusCode: 200,
    body: "OK",
    isBase64Encoded: false
  });
};
