function validarEdad(edad) {
    return new Promise((resolve, reject) => {
      if (edad >= 18) {
        resolve("Edad es suficiente puede acceder al contenido");
      } else {
        reject("Edad insuficiente para acceder al contenido");
    }
    });
}

validarEdad(15)
.then(res => {
    console.log('Mensaje: ' + resolve);
})
.catch(error => {
    console.log('Error: ' + error);
});
  