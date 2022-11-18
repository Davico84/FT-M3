
/////////////////modo 1 /////////////////////
// function* generatorShowInstructors() {
//   console.log("Iniciando generator function");
//   yield "Franco";
//   yield "Toni"
//   console.log("Generator function terminada");
// }

// var generatorObject = generatorShowInstructors();

// console.log(generatorObject.next());//franco
// console.log(generatorObject.next());//toni
// console.log(generatorObject.next());//done =true

/////////////////modo 2 /////////////////////
/////////////////con parametros
function* generatorShowInstructorsWithParameter() {
  console.log("Iniciando generator function with parameter");
  console.log('yield 1', yield);
  console.log('yield 2', yield);
}

var generatorObjectParameter = generatorShowInstructorsWithParameter();

generatorObjectParameter.next();
generatorObjectParameter.next('Franco');
generatorObjectParameter.next('Toni');
