var httpResponse = require('http'),
    httpStream = "";

httpResponse.get(process.argv[2], response); //As respostas do HttpGet são entregues como parâmetro para a funcao 'response'

function response (res) {
    res.setEncoding('utf8');

    res.on ('data', (thisData) => {httpStream+=thisData}); //cada evento de resposta ao HttpGet é entregue como parametro para ser adicionado ao 'httpStream'
    res.on ('error', console.error);
    res.on ('end', () => { //Quanto o HTTP Get termina, imprime o tamanho e a string de todos os retornos concatenados
        console.log(httpStream.length);
        console.log(httpStream);
    });
}