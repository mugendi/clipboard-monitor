const clipMonit = require('.');

//initialize & optionally set the interval with which to monitor the clipboard

var monitor = clipMonit(500);

//now monitor your events...

//Event fired everytime data is copied to the clipboard
monitor.on('copy', function (data) {
    //do something with the data
    console.log(data);
});


//Stop the monitor
setTimeout(function () {
    monitor.end();
}, 10000)