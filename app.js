const lambda = require("./index");
var express = require('express');

var app = express();

app.get('/_healthz', function (req, res) {
  res.send('1');
});


app.get('/init', function (req, res) {
  console.log(req.query)
  const tempFileName = require('tmp').tmpNameSync()
  console.log("tempFileName: ",tempFileName)
    lambda.init(
      {
        queryStringParameters: req.query,
        tempFileName: tempFileName,
      },         null,
        async function (something, callback){
            console.log("callback: ", callback)
            res.status(callback.statusCode).header(callback.headers).send(callback.body)
        }
    )
  });

app.get('/convert', function (req, res) {
  console.log(req.query)
  const tempFile = require('tmp').tmpNameSync()
  console.log("tempFile: ",tempFile)
  lambda.convert(
      {
        queryStringParameters: req.query,
        tempFile: tempFile,
      }, 
      null,
      async function (something, callback){
          console.log("callback: ", callback)
          res.status(callback.statusCode).header(callback.headers).send(callback.body)
      }
  )
});

  app.listen(5000, function () {
    console.log('listening on :5000');
  });