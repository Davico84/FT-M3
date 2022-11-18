
//modo no recomendado xq corta 
///////////////////////////////////
 const instructores = ['Franco', 'Toni', 'Martu', 'Diego'];

 const delay = 1000;

// async function henryAwait() {
//   console.log("¿Quienes son los intstructores de Henry?");
//   for (let i = 0; i < instructores.length; i++) {
//     const instructor = await new Promise(resolve => setTimeout(
//         () => resolve(instructores[i]),
//         delay
//       )
//     );
//     console.log(instructor);
//   }
//   console.log("Gracias vuelvan pronto");
// }

// henryAwait();

////////////////////////////////////////////////////////////////
// Alternative with .map for parallel promises
////////////////////////////////////////////////////////////////
const promises = instructores.map(instructor => new Promise(resolve => setTimeout(
  () => resolve(instructor), delay
)));

console.log(promises);

Promise.all(promises)//espera todos los valores de las promesas y los devuelve con un then
  .then(values => {
    console.log(values);
  })

