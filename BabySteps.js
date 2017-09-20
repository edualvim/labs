//console.log(process.argv);
var i = process.argv.length - 2,
soma=0;

//console.log("Parametros: " + i);

while (i>0) {
    //console.log("Parametro " + i + ": " + process.argv[i+1]);
    soma+= Number(process.argv[i+1]);
    i--;
}

console.log(soma);