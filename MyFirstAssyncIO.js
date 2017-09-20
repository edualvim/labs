var buffer = require('fs');

buffer.readFile(process.argv[2], 'utf8', function doneReading (err, fileContents) {
    if (err) return console.log(err);
    
    console.log(fileContents.split('\n').length - 1);
});

//console.log (fileSplits.length-1);