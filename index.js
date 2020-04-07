var network = require('network');
 
network.get_public_ip(function(err, ip) {
  console.log(err || ip); // should return your public IP address
})


network.get_private_ip(function(err, ip) {
  console.log(err || ip); // err may be 'No active network interface found'.
})

network.get_gateway_ip(function(err, ip) {
  console.log(err || ip); // err may be 'No active network interface found.'
})

var express = require('express');
var app = express();
var fs = require('fs')

app.get('/', function (req, res) {
  res.send.app
});

app.listen(80,'192.168.1.4', function () {
  console.log('Example app listening on port 3000!');
});