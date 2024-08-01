// Escribe un programa que solicite al usuario su nombre y apellido por separado//
//y luego muestre un mensaje de saludo concatenando ambos.//

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Ingrese su nombre: ', (nombre) => {
  rl.question('Ingrese su apellido: ', (apellido) => {
    const saludo = `Hola, ${nombre} ${apellido}!`;
    console.log(saludo);
    rl.close();
  });
});