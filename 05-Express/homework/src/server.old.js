const ConsoleLogger = require("@11ty/eleventy/src/Util/ConsoleLogger");
const bodyParser = require("body-parser");
const express = require("express");

const STATUS_USER_ERROR = 422;

// This array of posts persists in memory across requests. Feel free
// to change this to a let binding if you need to reassign it.
let posts = [];
let IdCounter = 0;
const server = express();
// to enable parsing of json bodies for post requests
 server.use(express.json());


 function Post(author, title, contents){
    this.id = 0;
    this.author = author;
    this.title = title;
    this.contents = contents;
    this.autoID();
}

Post.prototype.autoID = function (){
    IdCounter++;
    this.id = IdCounter;
}
// TODO: your code to handle requests

server.post('/posts', function(req,res){
    //crear nuevo POST
    const {  author, title, contents } = req.body
    // console.log(body);
    if (!author || !title || !contents) {
        return res.status(STATUS_USER_ERROR)
            .json({ error: 'No se recibieron los parámetros necesarios para crear el Post'});
    }
    let newPost = new Post(author, title, contents);
    posts.push(newPost);
    res.status(200).json(newPost);
   
})
server.post('/posts/:author', function(req,res){
   
    const { body } = req;
    const { author } = req.params;
    //let itempost=Object.assign({"id":id}, author,body)//agregar campo a un objeto
    if (!body.hasOwnProperty('title') || !body.hasOwnProperty('contents')) {
        return res.status(422)
            .json({ error: 'No se recibieron los parámetros necesarios para crear el Post'});
    }
    const newPost = new Post(author, body.title, body.contents);
    posts.push(newPost);
    res.status(200).json(newPost);
  
})
//GET /posts
server.get('/posts', function(req,res){
    let {query}= req

        
           if (query.hasOwnProperty('term')) {
                console.log(posts.filter((post)=> post.title.includes(query.term) || post.contents.includes(query.term)))
                return res.status(200)
                .json(posts.filter((post)=> post.title.includes(query.term) || post.contents.includes(query.term)));
                //.json(posts.filter((post)=> post.title.search(query.term) || post.contents.search(query.term)));  
           }
           res.status(200).json(posts);//si no hay parametros term mostra todos
           console.log(posts)
           
})
//GET /posts/:author
server.get('/posts/:author', function(req,res){ 

    //author a buscar
    let body= req.params
    
    if(body){//si hay parametro busco
        if(posts.length>0){//si existen post grabados
            
            let findPost=posts.find(post=>post.author===body.author)
            if(!findPost){
                let msgerror={
                    error: "No existe ningun post del autor indicado"}
                res.status(422)
                res.json(msgerror)
            }//si lo encontro
            posts=posts.filter(post=>post.author===body.author);
            res.status(200)
            res.json(posts)
        }else {
            let msgerror={ error: "No existen Posts para eliminar"}
            res.status(422).json(msgerror)
        }
    }else {
            let msgerror={
            error: "No existe ningun post del autor indicado"}
            res.status(422)
            res.json(msgerror)
    }
   
})
//GET /posts/:author/:title
server.get('/posts/:author/:title', function(req,res){

    //author a buscar
    let body= req.params
    
    if(body){//si hay parametro busco
        if(posts.length>0){//si existen post grabados
            
            let findPost=posts.find(post=>(post.author===body.author && post.title===body.title));
            if(!findPost){
                let msgerror={
                    error: "No existe ningun post con dicho titulo y autor indicado"}
                res.status(422)
                res.json(msgerror)
            }//si lo encontro
            posts=posts.filter(post=>(post.author===body.author && post.title===body.title));
            res.status(200)
            res.json(posts)
        }
    }else {
            let msgerror={
            error: "No existe existen posts"}
            res.status(422)
            res.json(msgerror)
    }
   
})
//PUT /posts
server.put('/posts', function(req,res){
    const { body } = req
    // console.log(body);
    if (!body.hasOwnProperty('title') || !body.hasOwnProperty('contents') || !body.hasOwnProperty('id')) {
        return res.status(STATUS_USER_ERROR)
            .json({ error: 'No se recibieron los parámetros necesarios para modificar el Post'});
    }
    let postFound = posts.find((post)=> post.id === parseInt(body.id));
    if (!postFound) {
        return res.status(STATUS_USER_ERROR)
            .json({ error: 'No se recibio un ID valido'});
    }
    postFound.title = body.title;
    postFound.contents = body.contents;
    res.status(200).json(postFound);
          //posts.map((post) =>{
            //             if (post.id===body.id){//lo encontro
            //                     post.author=body.author;
            //                     post.title=body.title;
            //                     post.contents=body.contents;
            //                 res.status(200)
            //                 res.json(post)     
            //             }
            //          })    

   
})
//DELETE /posts
server.delete('/posts', function(req,res){

    const { body } = req
    // console.log(body);
    if (!body.hasOwnProperty('id')) {
        return res.status(STATUS_USER_ERROR)
            .json({ error: 'No se recibio parametro ID'});
    }
    let postFound = posts.find((post)=> post.id === parseInt(body.id));
    if (!postFound) {
        return res.status(STATUS_USER_ERROR)
            .json({ error: 'No se recibio un ID valido'});
    }
    posts = posts.filter((post)=> post.id !== body.id);
    res.status(200).json({ success: true});
})

//DELETE /author
server.delete('/author', function(req,res){

    let body= req.body
    
    if (body.author){//tengo parametrosBODY?
        if(posts.length>0){//tengo registros
            let postfound= posts.filter(post=>  post.author=== body.author)//devuelve el objeto buscado
            console.log(postfound)
            if(postfound.length>0){
                posts= posts.filter(post=>post.author!==body.author)  
                res.status(200).json(postfound)           
            }
            let msgerror={ error: "No existe el autor indicado"}
            res.status(422).json(msgerror)
            
        }else {
            let msgerror={ error: "No existen Posts para eliminar"}
            res.status(422).json(msgerror)
        }
    }else {//no serecibio id por param
        let msgerror={ 
                        error: "No se recibieron los parámetros necesarios para eliminar el Post"
                     }
        res.status(422).json(msgerror)
    }
   
})
module.exports = { posts, server };
