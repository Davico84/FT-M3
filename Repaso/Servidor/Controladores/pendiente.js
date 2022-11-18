const pendientesDB=[{
    id:0,
    status:true,
    title:'Hacer la tarea'
}];

const createPendiente=(res,req)=>{};
const readPendiente=(res,req)=>{
    const {id}= req.params;
    const foundPendiente=pendientesDB.find((pen)=>{pen.id===parseInt(id)})
    if(!foundPendiente) return res.sendStatus(400)
    res.json({
        result:{
            message:'hola q haces'}})
};
const modifyPediente=(res,req)=>{};
const deletePendiente=(res,req)=>{};


module.exports ={
    createPendiente,readPendiente,
    modifyPediente,deletePendiente
}