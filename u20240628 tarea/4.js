//Crea un programa que tome una frase ingresada por el usuario y reemplace una palabra específica por otra.
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Ingrese la frase original: ', (fraseOriginal) => {
  rl.question('Ingrese la palabra a reemplazar: ', (palabraAReemplazar) => {
    rl.question('Ingrese la nueva palabra: ', (nuevaPalabra) => {
      const fraseReemplazada = fraseOriginal.replace(palabraAReemplazar, nuevaPalabra);
      console.log(`La frase con la palabra reemplazada es: ${fraseReemplazada}`);
      rl.close();
    });
  });
});