#!/usr/bin/env node
// var argv = require('yargs').argv;
var color = require('bash-color');
var _ = require('lodash');
var program = require('commander');


program
    .version('0.0.1')
    .usage('check more at https://github.com/freestyleoj/terminaloj')
program
    .command('OnlineJudge <cmd>')
    .alias('OJ')
    .description('specifying an OnlineJudge')
    .option("-s, --set <aliasOfOJ>", "set an alias for an OnlineJudge")
    .option("-l, --list", "list the OnlineJudges with the aliases")
    .action(function(cmd, options){
        var md = typeof options.set == 'string' ? options.set : "";
        console.log('%s %s', cmd, md);
    }).on('--help', function() {
        console.log('  Examples:');
        console.log('    terminaloj -l');
        console.log('    terminaloj -s PKUOJ POJ');
        console.log();
    });

program.parse(process.argv);