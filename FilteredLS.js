/* List assyncronously all files from a given directory, filtered by a provided extension

 Arg1 = directory name
 Arg2 = file extension to filter

*/
var buffer = require('fs');

buffer.readdir(process.argv[2], function onDirectoryRead (err, filesList) {
    if (err) return console.log(err);
    var dotPosition;
    
    for (var i = 0; i < filesList.length-1; i++) {
        if ((dotPosition = filesList[i].lastIndexOf('.')) != -1 & filesList[i] != "")
            if (filesList[i].substring(dotPosition + 1) == process.argv[3])
                    console.log(filesList[i]);
        }
});