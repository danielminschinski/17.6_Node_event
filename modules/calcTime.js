var os = require('os');


function calcTime(){
	var time = os.uptime();

	var h = (time / 3600).toFixed(0);
	var m = (time % 3600 / 60).toFixed(0);
	var s = (time % 3600 % 60).toFixed(0);

	if(time > 3600){
		return h + 'h ' + m + 'min ' + s + 'sec';
	}else if(time > 60 && time < 3600){
		return m + 'min ' + s + 'sec';
	}else {
		return s + 'sec';
	}
}
exports.print = calcTime;