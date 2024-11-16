const fs = require("fs");
const fileName = "estudiantes.json";

const estudiantes = [
  { nombre: "Nelson Rodriguez", edad: 17, carrera: "Veterinaria", año:'I' },
  { nombre: "Kevin Alvarez", edad: 21, carrera: "Ciencias Juridicas", año:'III' },
  { nombre: "Raphael Ventura", edad: 20, carrera: "Diseño grafico", año: 'II' },
];

fs.writeFile(fileName, JSON.stringify(estudiantes), (err) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log("El archivo JSON fue creado correctamente.");
});
