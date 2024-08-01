const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Ingrese una cadena: ', (cadena) => {
  rl.question('Ingrese la posición inicial de la subcadena: ', (inicio) => {
    rl.question('Ingrese la longitud de la subcadena: ', (longitud) => {
      const subcadena =((inicio) +(longitud));
      if (subcadena.length > cadena.length) {
        console.log("La subcadena tiene que ser menor a la cadena");
      } else {
        console.log(`La subcadena extraída es: ${subcadena}`);
      }
      rl.close();
    });
  });
});
