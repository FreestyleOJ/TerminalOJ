"use strict";
var color = require('bash-color');
var _ = require('lodash');
var program = require('commander');
var submit = require('./lib/submit');

program
    .version('0.1.0')
    .usage('check more at https://github.com/freestyleoj/terminaloj');
program
    .command('OnlineJudge <cmd>')
    .alias('OJ')
    .description('specifying an OnlineJudge')
    .option('-s, --set <aliasOfOJ>', 'set an alias for an OnlineJudge')
    .option('-l, --list', 'list the OnlineJudges with the aliases')
    .action(function(cmd, options){
        var md = typeof options.set == 'string' ? options.set : '';
        console.log('%s %s', cmd, md);
    }).on('--help', function() {
        console.log('  Examples:');
        console.log('    terminaloj OJ -l');
        console.log('    terminaloj OJ -s PKUOJ POJ');
        console.log();
    });
program
    .command('submit <file>')
    // .alias('submit')
    .description('submit a file')
    .option('-f --file <name>', 'select a file to submit')
    .action(function(cmd, options){
        var fl = typeof options.file == 'string' ? options.file : '';
        console.log(fl);
        console.log(submit.getContent(fl));
    }).on('--help', function(){
        console.log('  Examples:');
        console.log('    terminaloj submit -f a.cpp');
        console.log();
    });

program
    .command('list')
    .description('list files in current working directory')
    .option('-a, --all', 'Whether to display hidden files')
    .action(function(options) {
        var fs = require('fs');
        fs.readdir(process.cwd(), function(err, files) {
            var list = files;
            if (!options.all) {
                list = files.filter(function(file) {
                    return file.indexOf('.') !== 0;
                });
            }
            console.log(list.join(', '));
        });
    });

program.parse(process.argv);

// var fileContent = submit.getContent(__dirname + '/app.js');
// if (fileContent.status == 'YES'){
    // console.log(color.green('File read successfully!'));
    // 
    //console.log(JSON.stringify(fileContent.content));
    //console.log(fileContent.content);
    //
// }

// exports.module = {

// }