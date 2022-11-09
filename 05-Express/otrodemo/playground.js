//1
var express = require('express');
//creams el servidor
var app = express();
//aplicar a app el parser
app.use(express.json())

//midelware para poder usar json
//bodyparser===express.json()
//const jsonPaser= express.json() es el modo individual

//******* aqui estamos aplicando una funcion como middleware
app.use('/', function(req,res,next){
    console.log('entro a' + req.url)
    next()//da paso a la siguiente funcion
})


//EndPoints   / RUTAS
app.get('/',function(req,res){
    //cualquier logica
    res.send('ruta GET')
})

app.get('/users',function(req,res){
    //cualquier logica
    console.log(req.url)
    res.status(200).send('ruta USERs')
})
//post crea nueva data
//body      -->( name: 'juan , apellido: 'bosque')
//query     -->/home?id=1
//params    -->/home/:id

//aqui usamos el middelware jsonParser
app.post('/users', function(req,res){
    //crear nuevo usuario
    const user= req.body
    console.log(user)
    res.send('ok,llego el usuario')
})


app.get('/products',function(req,res){
    //cualquier logica
    let producto={
        producto: "remera",
        stick: 10
    }
    res.json(producto)
})

//PARAMS
app.put('/api/:id/:algo',(req, res)=>{
    const params= req.params;
    console.log(params);
   
    res.status(200).send('ok,se ingreso parametros PARAM')

})

//QUERY
app.put('/api',(req, res)=>{
    const {id}= req.query;
    console.log(id);
   
    res.status(200).send('ok,se ingreso parametros QUERY')

})


app.listen(3000, console.log('escuchando en el puerto 3000'));
//usamos middelware
// app.use('/', (req,res,next)=>{
//     console.log(('hicieronun reques a '+req.url));
//     next()
// })
// app.get('/')

