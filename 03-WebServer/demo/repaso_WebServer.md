VERBOS HTTP:

-  GET ->
        solicito info/data/recurso
- POST ->
        enviamos info--> crear/agregar algo nuevo

- PUT ->
        actualiza datos
- DELETE ->
        borra info

CRUD -->Create- Read - Update- Delete

Front END --> BACK END --> BASE DE DATOS
JSON      <-- JSON     <--  SQL


----------------------------------------
Infor que acompaña un reques:
-Query
-Params
-Body


installar NODEMON para poder correrlo
	npm -g i nodemon

	luego solo corres nodemon y el nombre del archivo.js

SERVIDOR TIPO CONTENT TYPE

```js
createServer( function(req, res){ 
//nota existen muchos tipos de content tipe hay q ver cual requieres
//https://developer.mozilla.org/es/docs/Web/HTTP/Basics_of_HTTP/MIME_types
	
    if( req.url === '/arcoiris_doge'){ //Si la URL es / devolvemos el HTML
		res.writeHead(200, { 'Content-Type':'image/jpg' })
		var img = fs.readFileSync(__dirname +'/images/arcoiris_doge.jpg');
		res.end(img);
	}
    
    if( req.url === '/sexy_doge'){ //Si la URL es / devolvemos el HTML
		res.writeHead(200, { 'Content-Type':'audio/mpeg' })
		var audio = fs.readFileSync(__dirname +'/audios/audio_prueba.mpeg');
		res.end(audio);
	}else{
		res.writeHead(404)//ponemos estatus del response a 404 : no found
		res.end();//no devolvemos nada mas q el estado
	} 


}).listen(1337, console.log("runing"));
```

ejemplo de TEMPLATE 
```js
	if( req.url === '/'){
      res.writeHead(200, { 'Content-Type':'text/html' })
      var html = fs.readFileSync(__dirname +'/index.html', 'utf8');
      res.end( html )
    
    }

    let beatlebuscado= req.url.split('/').pop();//Jhon%20Lennon
    let encontrobeatle= beatles.find(beatle=> beatlebuscado.toLowerCase()===encodeURI(beatle.name).toLocaleLowerCase())//encodeURI -> Jhon%20Lennon
    
    if(encontrobeatle){
      res.writeHead(200, { 'Content-Type':'text/html' })
      let html = fs.readFileSync(__dirname +'/beatle.html', 'utf8');
            
      html = html.replace(/{nombre}/g, encontrobeatle.  .name); //reemplaza todas las isntancias /{variable}/g
      html = html.replace('{fecnac}', encontrobeatle.birthdate); // Usamos el método replace es del objeto String
      html = html.replace('{img}', encontrobeatle.profilePic); 
      res.end(html )
    } else{
      res.writeHead(404); //Ponemos el status del response a 404: Not Found
		  res.end('No se encontro la pagina'); //No devolvemos nada más que el estado.
    }
  }
```