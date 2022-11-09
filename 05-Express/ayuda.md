1) en el terminal instalamos
    npm init
    npm install express 
    npm install nodemon

    -> en el archivo json
    agregar el "scripts": {
    "start": "nodemon playground.js",

2 ) invocamos a exprexss
```js
    var express = require('express');
    var app= express();
```
3) ponemos a escuchar els erver

```js
   app.listen(3000);
```
4) responder las rutas

```js
   app.get('/', function(req,res){

   };
``` 
APLICANDO PARSERJSON INDIVIDUAL Y A LA APP
```js
//aplicar a app el parser
app.use(express.json())

//midelware para poder usar json
bodyparser===express.json()
const jsonPaser= express.json() es el modo individual
```

CORS 
Se utlizar para poder enviar y recibir peticiones a otro servidor desde el nuestro
 existen 3 formas de usarlo

Primera forma
```js

const cors = require('cors');

//Habilito todas las solicitudes CORS
app.use(cors());


//Configuro opciones para el middleware del módulo 'cors'. Si no cambio nada, estas son las opciones que toma por default:
var corsOptions = {
    origin: "*",//autorizo todas las solicitudes
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    preflightContinue: false,
    optionsSuccessStatus: 204 // some legacy browsers (IE11, various SmartTVs) choke on 204
}
```


segunda forma
```js
//Seteamos headers para la respuesta que le enviamos al cliente
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', 'http://localhost:3001'); //Autorizo recibir solicitudes de este dominio
    res.header('Access-Control-Allow-Credentials', true); //Autorizo recibir solicitudes que incluyan el encabezado con credenciales
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept'); //Autorizo recibir solicitudes con dichos hedears
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE'); //Autorizo las solicitudes tipo GET, POST, OPTIONS, PUT y DELETE.
    next();
});
```

tercera forma
```js

//Habilito CORS para una ruta en particular
app.get('/example-route', cors(),  (req, res, next) => {
    res.sendStatus(200)
})


//Habilito CORS para una ruta en particular pasándole las opciones que definí
app.get('/example-route', cors(corsOptions),  (req, res, next) => {
    res.sendStatus(200)
})
```