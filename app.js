const express = require('express');
const getId = require('docker-container-id');
const app = express();

async function getContainerId () {
  return await getId();
}

app.get('/', function (req, res) {
  res.status(200).json({
    status: 200,
    containerId: getContainerId(),
    applicationVersion: '1.0', 
    message:'Hello from Nilesh Bhujbal.!'
  });
});
app.listen(8080, function () {
  console.log('Example app listening on port 8080.!');
});