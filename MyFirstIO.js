var buffer = require('fs');

//console.log("File name = " + process.argv[2]);

//console.log ("File content: " + (buffer.readFileSync(process.argv[2])).toString());

var fileSplits = buffer.readFileSync(process.argv[2],'utf8').split('\n');
console.log (fileSplits.length-1);