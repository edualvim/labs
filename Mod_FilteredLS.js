/* List assyncronously all files from a given directory, filtered by a provided extension

 Arg1 = directory name
 Arg2 = file extension to filter

*/
module.exports = function (directory, fileExt, callback) {
    
    var buffer = require('fs');
    
    buffer.readdir(directory, function onDirRead (err, filesList) {
        if (err) return callback(err);
   
        var filteredList = [];
        
        
        for (var i = 0; i < filesList.length-1; i++) {
            var dotPosition;
            if (filesList[i] != "" & (dotPosition = filesList[i].lastIndexOf('.')) != -1)
                if (filesList[i].substring(dotPosition + 1) == fileExt)
                    filteredList.push(filesList[i]);
            }
            
        callback (null, filteredList);
    });
    
};