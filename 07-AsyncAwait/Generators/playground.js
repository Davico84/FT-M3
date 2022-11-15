//const ConsoleLogger = require("@11ty/eleventy/src/Util/ConsoleLogger");

const myName='batman'
const myPromise=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        if (myName ==='batman') return resolve('nnadada');
        reject('buuuu');
    },1000)
})
console.log(myPromise);
myPromise.then(res => console.log(res));

// axio.get('/')
// .then(res=>console.log(res))
// .cacth(err=>console.log(err));

// async function asyncCall2(){
//    try {
//         const result = await axio.get();
//         const result1 = await axio.get();
//         const result2= await axio.get();
//         console.log("AZYNC", result,result1,result2);
//    } catch (error) {
//         console.log("AZYNC, error");
//    }
// }

// asyncCall2()
// function generatorShowInstructor(){
//     console.log("iniciando la funcion generador");
//     yield "david";
//     yield "Rafa"    
// console.log("finaliznado la funcion")

// }

// var generadorObject=generatorShowInstructor()


// var yield1=generadorObject.next();
// console.log("yield1 ", yield1);
// var yield2=generadorObject.next();
// console.log("yield2 ", yield2);
// var yield2=generadorObject.next();