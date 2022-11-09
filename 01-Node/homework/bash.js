//console.log((process))
//console.log(Object.keys(process))


// process.stdout.write("\n....................");
// process.stdout.write("\nMenu de Inicio:");

// // Output un prompt
// process.stdout.write('\nprompt > ');
// // El evento stdin 'data' se dispara cuando el user escribe una línea
// process.stdin.on('data', function (data) {
//   var cmd = data.toString().trim(); // remueve la nueva línea
//   process.stdout.write('You typed: ' + cmd);
//   process.stdout.write('\nprompt > ');
// });



const commands= require('./commands')
// Output un prompt
process.stdout.write('prompt > ');
// El evento stdin 'data' se dispara cuando el user escribe una línea
process.stdin.on('data', function (data) {
  var cmd = data.toString().trim(); // remueve la nueva línea

  switch  (cmd){
  case 'date':
        commands.date()
        break;
  case 'pwd':
        commands.pwd()
        break;
  default :
        commands.dlft()
  }
});