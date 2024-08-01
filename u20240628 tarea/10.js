const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Ingrese una frase: ', (frase) => {
  const palabras = frase.split(' ');
  const fraseCapitalizada = palabras.map(palabra => {
    return palabra.charAt(0).toUpperCase() + palabra.slice(1);
  }).join(' ');
  console.log(`La frase capitalizada es: ${fraseCapitalizada}`);
  rl.close();
});