//Escribe un programa que tome una cadena ingresada por el usuario y la muestre completamente en mayúsculas.
//#Ejemplo: si el usuario ingresa "hola mundo", el programa debe mostrar "HOLA MUNDO""
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Ingrese una cadena: ', (cadena) => {
  const mayusculas = cadena.toUpperCase();
  console.log(mayusculas);
  rl.close();
});