class Usuario{
    constructor(Nombre,Apellido,Rol){
    //clase=parametros
    this.Nombre=Nombre;
    this.Apellido=Apellido;
    this.Rol=Rol;
    }
}

//creamos una función
function carga(parametros){
    const Nuevo=document.createElement("div")
    Nuevo.innerHTML=`<b>Nombre: ${parametros.Nombre}</b>
                     <b>Apellido: ${parametros.Apellido}</b>
                     <b>Rol: ${parametros.Rol}</b>`;
    document.body.appendChild(Nuevo)
}

//asignación de datos
carga(new Usuario("Pablo","Gareis", "Profe"))