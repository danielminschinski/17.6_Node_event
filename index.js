process.stdin.setEncoding('utf-8');
var OSinfo = require('./modules/OSinfo');


process.stdin.on('readable', function(){
    var input = process.stdin.read();
    if(input !== null){
        var instruction = input.toString().trim();
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
                process.stdout.write('Lang: ' + process.env.lang + '\n');
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
    }                
});

