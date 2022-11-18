const fs = require('fs');
//esta funcion comun lee un archivo mediante promesa
function promisifiedReadFile(filename) {
	return new Promise(function (resolve, reject) {
		fs.readFile(filename, 'utf8', function (err, data) {
			if (err) reject(err);
			else resolve(data);
		});
	});
};
//codigo antiguo mas complicado
const readFilePromise = (archivo) => {
  promisifiedReadFile(archivo)
    .then(file => {
      console.log("Log promise file: ", file);
      return "Lectura exitosa";
    });
}
readFilePromise('archivo.txt'); //

//////////////////////////////////////////
////////////////codigo eficiente

const readFileAsync = async(archivo) => {
  console.log("Log async file: ", await promisifiedReadFile(archivo));
  return "Lectura exitosa";
}
readFileAsync('archivo.txt');
