process.stdin.setEncoding('utf-8');
var EventEmitter = require('events').EventEmitter;
var OSinfo = require('./modules/OSinfo');

var emitter = new EventEmitter();
emitter.on('beforeCommand', function(instruction){
    console.log('You wrote: ' + instruction + ' trying to run command.')
});
emitter.on('afterCommand', function(){
    console.log('Finished command');
});

process.stdin.on('readable', function(){
    var input = process.stdin.read();
    if(input !== null){
        var instruction = input.toString().trim();
        emitter.emit('beforeCommand', instruction);
        switch(instruction){
            case '/exit':
                process.stdout.write('Quitting app!\n');
                process.exit();
                break;
            case '/version_Node':
                process.stdout.write('Version: ' + process.versions.node + '\n');
                process.stdin.resume();
                break;
            case '/lang_Node':
                process.stdout.write('Lang: ' + process.env.LANG + '\n');
                process.stdin.resume();
                break;
            case '/getOSinfo':
                OSinfo.print();
                process.stdin.resume();
                break;
            default:
                process.stderr.write('Wrong instruction!\n');
                process.stdin.resume();
        };
        emitter.emit('afterCommand');
    }                
});

