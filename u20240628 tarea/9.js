const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Ingrese una palabra: ', (palabra) => {
  let vocales = 0;
  for (let i = 0; i < palabra.length; i++) {
    const char = palabra[i].toLowerCase();
    if (char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u') {
      vocales++;
    }
  }
  console.log(`La palabra "${palabra}" tiene ${vocales} vocales.`);
  rl.close();
});