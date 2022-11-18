
const { application } = require('express');
const express = require('express');
const server= express();
const {
    createPendiente,readPendiente,
    modifyPediente,deletePendiente
}=require('../Controladores/pendiente')
const {     readPendientes}=require('../Controladores/pendientes')
//middler ware
server.use(express.json());
//APIS DE ENDPOINTS
//listas de pendientes
//pendientes CRUD
//POST (CREAR UN PENDIENTE)
//get (lee un pendiente)
//delete (elimina un pendiente)
//put (actualiza un pendiente)


//haciendo RUTAS

server.route('/pendiente')//para rutas repetidas
    .post(createPendiente)
    .get(readPendiente)
    .pust(modifyPediente)
    .delete(deletePendiente);

server.route('/pendientes')//para rutas repetidas
    .get(readPendiente)
  
module.exports= server;