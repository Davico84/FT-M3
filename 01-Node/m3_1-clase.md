para ejecutar las app 
en el terminal > node y el nombre del archivo.js

para crear una app en consola
        
        > npm init

-----
en el archivo packack.json
podemos modificar el

  "start": "node archivo_inicio.js"

----
muestra el listado de app preinstaladas
    >npm - g list

----
  versiones
            
            1        . 2         .1
          major    .minor      .parche 
          cambios  .nuevas     .bugs  
          q rompn  .funcionali 


Hacemos require con('') no con './' , por que es un core

```js

      const util=require('util')  

```

como usar el core util y aplicarlo
    
    ejm:
```js
      const util=require('util') 
      var nombre='David'
      var saludo= "hola"
      var reve= "un gusto"
      console.log(util.format('%s, %s, %s',saludo, nombre,reve))
```