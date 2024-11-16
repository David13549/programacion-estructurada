const readline = require('readline');
const { exec } = require('child_process');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const menu = `
Seleccione una opción:
1. Crear archivo JSON con estudiantes
2. Leer archivo JSON de estudiantes
3. Agregar nuevo estudiante
4. Actualizar información de estudiantes
5. Eliminar un estudiante
6. Contar estudiantes
7. Salir
`;

const ejecutarOpcion = (opcion) => {
  switch (opcion) {
    case '1':
      exec('node crear.js', (err, stdout, stderr) => {
        if (err) {
          console.error(`Error: ${stderr}`);
          return;
        }
        console.log(stdout);
      });
      break;
    case '2':
      exec('node leer.js', (err, stdout, stderr) => {
        if (err) {
          console.error(`Error: ${stderr}`);
          return;
        }
        console.log(stdout);
      });
      break;
    case '3':
      exec('node agregar.js', (err, stdout, stderr) => {
        if (err) {
          console.error(`Error: ${stderr}`);
          return;
        }
        console.log(stdout);
      });
      break;
    case '4':
      exec('node actualizar.js', (err, stdout, stderr) => {
        if (err) {
          console.error(`Error: ${stderr}`);
          return;
        }
        console.log(stdout);
      });
      break;
    case '5':
      exec('node eliminar.js', (err, stdout, stderr) => {
        if (err) {
          console.error(`Error: ${stderr}`);
          return;
        }
        console.log(stdout);
      });
      break;
    case '6':
      exec('node contar.js', (err, stdout, stderr) => {
        if (err) {
          console.error(`Error: ${stderr}`);
          return;
        }
        console.log(stdout);
      });
      break;
    case '7':
      console.log('Saliendo...');
      rl.close();
      break;
    default:
      console.log('Opción no válida. Intente de nuevo.');
      mostrarMenu();
      break;
  }
};

const mostrarMenu = () => {
  rl.question(menu, (opcion) => {
    ejecutarOpcion(opcion);
  });
};

mostrarMenu();
