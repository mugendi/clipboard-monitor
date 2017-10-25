## Monitor your clipboard
This module helps you monitor your clipboard by firing ('copy') events whenever something is copied onto the clipboard.

It wraps around the awesome [clipboardy](https://www.npmjs.com/package/clipboardy) module.

### Install

``` npm i --save clipboard-monitor```

### Use

```javascript 

const clipMonit = require('clipboard-monitor');

//initialize & optionally set the interval with which to monitor the clipboard

var monitor = clipMonit(500);

/*
NOTE: interval defaults to 500ms so you can simply initialize using:
    'monitor = clipMonit()';
*/


//now monitor your events...

//'copy. event is fired every time data is copied to the clipboard
monitor.on('copy', function (data) {
    //do something with the data
    console.log(data);
});


//Stop the monitoring the clipboard
monitor.end();

```

### ToDo
I would love to incorporate the ability to monitor file copies & dump/capture the file name/buffer data. Does anyone know how to do this? Or a module that achieves something similar?
