function* generatorShowInstructors() {
    console.log("Iniciando generator function");
    yield "Franco";
    yield "Toni"
    console.log("Generator function terminada");
  }
  
  var generatorObject = generatorShowInstructors();
  
  generatorObject.next();