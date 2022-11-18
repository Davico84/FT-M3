
function Pendiente(id,title){
    this.id=0;
    this.status=true;    
    this.title=this.title;
}

Pendiente.prototype.toggleStatus=()=>{
    this.status=!this.status;
}
let IdCounter=-1;
const IdCreator=()=>{
    IdCounter++;
    return IdCounter;
}

module.exports= Pendiente;