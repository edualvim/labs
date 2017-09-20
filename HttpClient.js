var httpResponse = require('http');

/*httpResponse.get(process.argv[2], function response (res) {
    res.setEncoding('utf8');
    res.on ('data', console.log);
    res.on ('error', console.error);
});*/

httpResponse.get(process.argv[2], response);

function response (res) {
    res.setEncoding('utf8');
    res.on ('data', console.log);
    res.on ('error', console.error);
};