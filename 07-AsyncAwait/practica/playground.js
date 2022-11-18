
//////////////////////////////////////////////////////
/////////////////Async/Await in Loops/////////////////
const instructores = ['Franco', 'Toni', 'Martu', 'Diego'];

const delay = 1000;

async function henryAwait() {
  console.log("¿Quienes son los intstructores de Henry?");
  for (let i = 0; i < instructores.length; i++) {
    const instructor = await new Promise(resolve => setTimeout(
        () => resolve(instructores[i]),//esta linea esta q agrega un retraso al loop de 1 sec
        delay
      )
    );
    console.log(instructor);
  }
  console.log("Gracias vuelvan pronto");
}

henryAwait();

////////////////////////////////////////////////3
//////////////// FUNCIONES ASINCRONAS  ////////////////////
// async function showInstructors() {
//   const instructor1 = await new Promise((resolve) => setTimeout(() => resolve('Franco')));
//   console.log(instructor1);
//   const instructor2 = await new Promise((resolve) => setTimeout(() => resolve('Toni')));
//   console.log(instructor2);
// }

// async function henryAwait() {
//   console.log("¿Quienes son los intstructores de Henry?");
//   await showInstructors();
//   console.log("Gracias vuelvan pronto");
// }
 
// await henryAwait()
// console.log("FIN");


////////funciones asyncontras y fx normales
// async function showInstructors() {
//   const instructor1 = await new Promise((resolve) => 
//             setTimeout(() => resolve('Franco')));
//   console.log(instructor1);
//   const instructor2 = await new Promise((resolve) => 
//             setTimeout(() => resolve('Toni')));
//   console.log(instructor2);
// }

// // function henryAwait() { //ASI NO FUNCIONA
// //   console.log("¿Quienes son los intstructores de Henry?");
// //   showInstructors();
// //   console.log("Gracias vuelvan pronto");
// // }
// async function henryAwait() {//ASI SI FUNCIONA pero jode el Clog dle FIN
//   console.log("¿Quienes son los intstructores de Henry?");
//   await showInstructors();
//   console.log("Gracias vuelvan pronto");
// }
 
// henryAwait()
// console.log("FIN");



////////4 llamadis disntintos/////////////
// function resolveAfter2Seconds() {
//   return new Promise(resolve => {
//     setTimeout(() => {
//       resolve('Promesa resuelta!');
//     }, 3000);
//   });
// }
// //llamado 1 
// async function asyncCallSuccessPromise() {//SIEMPRE RETORNA UNA PROMESA
//   console.log('Iniciando asyncCall Success Promise');
//   const result = await resolveAfter2Seconds();
//   return result;
// }
// //llamado 2
// async function asyncCallSuccesaNoPromise() {//SIEMPRE RETORNA UNA PROMESA
//   console.log('Iniciando asyncCallSuccess No Promise');//retorna una promesa.resolveed con el valor david
//   return 'David';
// }
// //llamado 3
// async function asyncCallError() {//SIEMPRE RETORNA UNA PROMESA
//   console.log('Iniciando asyncCall Error');
//   throw new Error(":(")
// }
// //llamado 4
// async function asyncCallNoResponse() {//SIEMPRE RETORNA UNA PROMESA
//   console.log('Iniciando asyncCall No Response');
//   const result=await resolveAfter2Seconds();
// }

// var p1 = asyncCallSuccessPromise(); // p1 --> Promise
//  console.log("P1:" ,p1)
// var p2 = asyncCallSuccesaNoPromise(); // p1 --> Promise
//  console.log("P2:" ,p2)
// var p3 = asyncCallError(); // p1 --> Promise
//  console.log("P3:" ,p3)
// var p4 = asyncCallNoResponse(); // p1 --> Promise
//  console.log("P4:" ,p4)

/////////////////////////////////
// function resolveAfter2Seconds() {
//   return new Promise(resolve => {
//     setTimeout(() => {
//       resolve('Promesa resuelta!');
//     }, 4000);
//   });
// }
// async function asyncCall() {//SIEMPRE RETORNA UNA PROMESA
//   console.log('Iniciando asyncCall');
//   const result = await resolveAfter2Seconds();
//   console.log(result);
// }

// var p1 = asyncCall(); // p1 --> Promise
// console.log("P1:" ,p1)

/////////// PROMESA BASIC CON ASYNC /AWAIT
// function resolveAfter2Seconds() {
//   return new Promise(resolve => {
//     setTimeout(() => {
//       resolve('Promise resolved');
//     }, 3000);//luego de 3 segundos la promesa se resuelve true
//   });
// }

// async function asyncCall() {
//   console.log('calling');
//   const result = await resolveAfter2Seconds();
//   console.log(result);
// }
// asyncCall()//lamo a la funcion asyncrona

//////////////////////////////////////////////////////
//funcion genradora de numeros
// function* naturalNumbers() {
//   let number = 1;
//   while(true) {
//     yield number;
//     number = number + 1;
//   }
// }

// var generatorObject = naturalNumbers();

// var yield1=generatorObject.next();
// console.log('yield1', yield1);
// var yield2=generatorObject.next();
// console.log('yield2', yield2);
// var yield3=generatorObject.next();
// console.log('yield3', yield3);
// var yield4=generatorObject.next();
// console.log('yield4', yield4);
///////*/// FUNCION GENERADORA ////////////////

// function* generatorShowInstructors() {
//     console.log("Iniciando generator function");
//     yield "David";//1er parada
//     yield ['hola', 'este','es un arreglo'] //2da parada
//     console.log("Generator function terminada");
//   }
//   //invocando a la funcion generadora y guardarla en 
//   var generatorObject = generatorShowInstructors();
  
//   let yield01=generatorObject.next();
//   console.log("yield1 :" ,yield01)
//   let yield02=generatorObject.next();
//   console.log("yield2 :",yield02)
//   let yield03=generatorObject.next();
//   console.log("yield3 :",yield03)
