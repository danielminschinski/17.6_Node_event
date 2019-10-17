var os = require('os');
var colors = require('colors');
var calcTime = require('../modules/calcTime');

function getOSinfo(){
    var type = os.type();
    if(type === 'Darwin'){
        type = 'OSX';
    }else if(type === 'Windows_NT'){
        type = 'Windows';
    }
    var release = os.release();
    var cpu = os.cpus()[0].model;
    var uptime = calcTime.print();
    var userInfo = os.userInfo();
    console.log('System:'.green, type);
    console.log('Release:'.underline.red, release);
    console.log('CPU model:'.inverse, cpu);
    console.log('Uptime:'.rainbow, uptime);
    console.log('User name:'.zebra, userInfo.username);
    console.log('Home dir:'.yellow, userInfo.homedir);
}
exports.print = getOSinfo;