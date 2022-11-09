const api='b18d932b'
const axios = require ('axios')
fetch('http://www.omdbapi.com/?i=tt3896198&apikey=b18d932b')
//Revolve
.then((result)=>{
    console.log(result.data);
})
//reject
.catch((error)=>{
    console.log(error)
})
