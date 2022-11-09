'use strict';
/*----------------------------------------------------------------
Promises Workshop: construye la libreria de ES6 promises, pledge.js
----------------------------------------------------------------*/
// // TU CÓDIGO AQUÍ:
function $Promise(executor){
    this._state='pending';
    this._value=undefined;
    this._handlerGroups=[];
    if(typeof executor !== "function") throw new TypeError('executor is not a function');
        executor(this._interalResolve.bind(this), this._interalReject.bind(this))
}
$Promise.prototype._interalResolve=function(value){
    if(this._state=== 'pending'){
        this._state="fulfilled"
        this._value=value
    }
}
$Promise.prototype._interalReject=function(value){
    if(this._state=== 'pending'){
        this._state="fulfirejected"
        this._value=value
    }
const newPromise= new $Promise(()=>{
    this._handlerGroups.push({
        successCb,
        errorCb,
        newPromise
    })
})

}

$Promise.prototype._callHandlers=function(){
    while(this._handlerGroups.length>0){
        const cb= this._handlerGroups.shift();
        //ya fu resulesta?
        if(this._state==='fulfilled'){
            //tiene un succes?
            if(cb.successCb){
                try {
                    //guardamos la resolucion del CB
                    const result = cb.successCb(this._value)
                    //aseguarnos q una nueva promesa se retorno
                    //este resultado fue crado con esta promesa?
                    if(result instanceof $Promise){
                        return result.then(
                            //CB Resolve
                            (value)=>{
                                return cb.downstreamPromise._interalResolve(value)
                            }
                            //CB Reject
                            (error)=>{
                                return cb.downstreamPromise._interalReject(value)
                            }
                        )
                    }else {//si no es una promesa
                        cb.downstreamPromise._interalResolve(result) 
                    }
                    
                } catch (error) {
                        cb.downstreamPromise._interalReject(error)
                  }    
                
            }else
        }else if(this._state='rejected'){
            //tiene un succes?
            if(cb.successCb){
                try {
                    //guardamos la resolucion del CB
                    const result = cb.successCb(this._value)
                    //aseguarnos q una nueva promesa se retorno
                    //este resultado fue crado con esta promesa?
                    if(result instanceof $Promise){
                        return result.then(
                            //CB Resolve
                            (value)=>{
                                return cb.downstreamPromise._interalResolve(value)
                            }
                            //CB Reject
                            (error)=>{
                                return cb.downstreamPromise._interalReject(value)
                            }
                        )
                    }else {//si no es una promesa
                        cb.downstreamPromise._interalResolve(result) 
                    }
                    
                } catch (error) {
                        cb.downstreamPromise._interalReject(error)
                  }    
                
            }
        } 

    }
}

$Promise.prototype.then= function(successCb,errorCb){
    if(typeof successCb!=='function') successCb=false;
    if(typeof errorCb!=='function') errorCb=false;

    const downstreamPromise= new $Promise(()=>{  
        this._handlerGroups.push({
            successCb,
            errorCb,
            newPromise
    });
    })
     //Si el estado ya se resolvio
     if(this._state !=='pending') this._callHandlers();
     return downstreamPromise;
   
}


module.exports = $Promise;
/*-------------------------------------------------------
El spec fue diseñado para funcionar con Test'Em, por lo tanto no necesitamos
realmente usar module.exports. Pero aquí está para referencia:

module.exports = $Promise;

Entonces en proyectos Node podemos esribir cosas como estas:

var Promise = require('pledge');
…
var promise = new Promise(function (resolve, reject) { … });
--------------------------------------------------------*/
