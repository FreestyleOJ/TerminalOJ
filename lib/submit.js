var fs = require('fs');
var path = require('path');
var color = require('bash-color');
var request = require('request');

var submit = function(cmd){
  if (cmd == '')console.log('no input ?');
}

submit.getContent = function(name){
  //console.log('name is %s',name);
  var result = {};
  try{
    fs.accessSync(name);
  } catch (err) {
    console.log(color.red('file not found!'));
    result = {status:"FILE_NOT_FOUND", content:''};
    return result;
  }
  var s = fs.readFileSync(name, 'utf8', function (err, data) {
    if (err) throw err;
  });
  result = {status:"YES", content:s};
  return result;
}

module.exports = submit