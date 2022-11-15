

const express = require('express');
const app = express();

app.use(express.json()); // for parsing application/json

app.get('/', (req, res) => {
  res.send({
    message: 'hola',
  });
});

app.get('/test', (req, res) => {

  res.send({
    message:  'test', 
      });
});
app.post('/product', (req, res) => {
   let {a,b}= req.body
  res.send({
    result: a * b,
  });
});

app.post('/sum', (req, res) => {
  let {a,b}= req.body
    res.send({
              result: a + b,
  });
});

app.post('/sumArray', (req, res) => {
  let {array, num}=req.body
  res.send({//si ahy errroe en la falta de req body sym array manda error y corta la ejecucion de la linea send
        result:  sumArray(array, num), 
        });
});

app.post('/numString',(req,res)=>{
  //extraigo el body -->{string:'hola'}
  const {string }= req.body;//hola
  if(typeof string!== 'string') 
      return res.sendStatus(400)

  return res.send({result:string.length})//hola.lenght ===4
})

app.post('/pluck',(req,res)=>{
    const {array, prop}= req.body//{[{},{},{}], ¿edad'}
    if(!Array.isArray(array) || prop === '')
      return res.sendStatus(400)
      
    //la resuesta es un array con todos los valores de la propiedad sumados
    return res.send({result: pluck(array,prop)})
})

function pluck(array,prop){
  return array.map(e => e[prop])
  
}

const sumArray=(arr,n)=>{
  if(!Array.isArray(arr)|| typeof n !=='number')throw new TypeErr('arr')//retorna el error y coa la fc
  for (let i = 0; i < arr.length; i++) {
      for (let x = 1; x < arr.length-1; x++) {
        if (arr[i]+arr[x]===n) return true
      }
  }
  return false
}



module.exports = app; // Exportamos app para que supertest session la pueda ejecutar