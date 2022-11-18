const fs = require('fs');
//lee archivi con promesa
function promisifiedReadFile(filename) {
	return new Promise(function (resolve, reject) {
		fs.readFile(filename, 'utf8', function (err, data) {
			if (err) reject(err);
			else resolve(data);
		});
	});
};
//modo antiguo
// const readFilePromise = (archivo) => {
//   try {
//     // throw new Error("Error");
//     promisifiedReadFile(archivo)
//       .then(file => {
//         console.log("Log promise file: ", file);
//         //throw new Error("Error");
//         return "Lectura exitosa";
//       })
//       .catch(err => {//atrapa error en la ejecucion de la lectura del archivo
//         console.log("Error asíncrono: ", err);
//         return "Error en lectura";
//       });
//   } catch(err) {
//     console.log("Error sincrono: ", err);
//   }
// }

//  readFilePromise('archivo.txt');

const readFileAsync = async(archivo) => {
  try {
    //throw new Error("Error GEnerado por throw");
    console.log("Log async file: ", await promisifiedReadFile(archivo));
    return "Lectura exitosa";
  } catch (err) {
    console.log("Error unificado: ", err);
  }
}

readFileAsync('archivo.txt');
 //readFileAsync('archivos.txt'); // Para simular error asíncrono en async version
