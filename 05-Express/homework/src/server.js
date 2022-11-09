const bodyParser = require("body-parser");
const express = require("express");

const STATUS_USER_ERROR = 422;

// This array of posts persists in memory across requests. Feel free
// to change this to a let binding if you need to reassign it.
const posts = [];

const server = express();
// to enable parsing of json bodies for post requests
 server.use(express.json());


server.get('/', function(req, res){
    var obj = {
     saludo: 'Hola' ,
   }
   res.json( obj );
 });
// TODO: your code to handle requests


server.post('/posts', function(req,res){

    //crear nuevo POST
    let post= req.body
    
    if (post.author && post.title && post.contents){
        let id= (posts.length)+1
        let itempost=Object.assign({"id":id}, post)
        //console.log(itempost)
        posts.push(itempost)
        res.status(200).json(itempost)
        //console.log(posts)
    }else {
        let msgerror={
            error: "No se recibieron los parámetros necesarios para crear el Post"}
        res.status(404).json(msgerror)
    }
   
})


server.post('/posts/author/:author/title/:title/contents/:contents', function(req,res){

    //crear nuevo POST
    let post= req.params
    
    if (post.author && post.title && post.contents){
        let id= (posts.length)+1
        let itempost=Object.assign({"id":id}, post)
        //console.log(itempost)
        posts.push(itempost)
        res.status(200).json(itempost)
        //console.log(posts)
    }else {
        let msgerror={
            error: "No se recibieron los parámetros necesarios para crear el Post"}
        res.status(404).json(msgerror)
    }
   
})

server.get('/posts', function(req,res){

        if(posts.length>0){//hay registros
            console.log(posts)
            let arrtmp=[]
            posts.map(post =>{
                //console.log(post.contents)
                if ((post.contents).search('term') != -1){//hay algun registro con term?
                    arrtmp.push(post)
        //           return post
                }
            })
                if(arrtmp.length>0)  {
                   // console.log("filtrado")
                    res.status(200).json(arrtmp)//si encontro registros
                }
                else {
                   // console.log("Sin Filtro")
                    res.status(200).json(posts)//todos los registros sin filtros
                }
             }
        else{ //no hay registros
            let msgerror={
            error: "No se encontraron datos"}
            res.status(404).json(msgerror)
        }
})

server.get('/posts/author/:author', function(req,res){

    //crear nuevo POST
    let postp= req.params
    
    if(postp){//si hay parametro busco
        if(posts.length>0){//si existen post grabados
            
            let fpost=posts.map(post=>{//lo buscamos
                console.log(post.author)
                console.log(postp.author)
                post.author===postp.author
            });
            console.log(fpost)
            res.status(200).json(fpost)
        }
    }else {
            let msgerror={
            error: "No existe ningun post del autor indicado"}
            res.status(404).json(msgerror)
    }
   
})


module.exports = { posts, server };
