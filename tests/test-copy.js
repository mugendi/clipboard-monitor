const clipboardy = require('clipboardy'),
    Chance = require('chance'),
    chance = new Chance(),
    clipMonit = require('../'),
    expect = require('chai').expect;


//start monit with an interval of 500 ms
var monitor = clipMonit(500);


//on copy
monitor.on('copy', function (data) {

    if (dataToCopy) {

        //expect copied string
        expect(data).to.be.a('string');
        //check that what we copied is what was reported by monitor
        expect(data).to.equal(dataToCopy);

        console.log(
            'Test ' + tests + ' passed'
        );
    }

});


//generate random testing data
var randomTypes = ['character', 'letter', 'sentence', 'paragraph', 'word', 'name'],
randType, dataToCopy, tests = 0,
maxTests = 10;

var interval = setInterval(function () {

randType = randomTypes[Math.floor(Math.random() * randomTypes.length)],
    dataToCopy = chance[randType]();

clipboardy.writeSync(dataToCopy);

tests++;
// console.log(tests);

if (tests >= maxTests) {
    clearInterval(interval);
}


}, 1000)