//Crea un programa que cuente el número de caracteres en una cadena ingresada por el usuario.
function contarCaracteres(cadena) {
    return cadena.length;
  }
  
  // Leer la cadena ingresada por el usuario
  const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  readline.question('Ingrese una cadena: ', (cadena) => {
    const longitud = contarCaracteres(cadena);
    console.log(`La cadena "${cadena}" tiene ${longitud} caracteres.`);
    readline.close();
  });