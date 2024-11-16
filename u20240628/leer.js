const fs = require("fs");
const fileName = "estudiantes.json";

fs.readFile(fileName, "utf8", (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  const estudiantes = JSON.parse(data);
  console.log(estudiantes);
});
