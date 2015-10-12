#!/usr/bin/env node
var argv = require('yargs').argv;
var color = require('bash-color')
if (argv.OJ){
  
  console.log('The OJ you selected is ' + color.green(argv.OJ));
}else {
  console.log('You ' + color.red('didn\'t') + ' select an OJ');
}
