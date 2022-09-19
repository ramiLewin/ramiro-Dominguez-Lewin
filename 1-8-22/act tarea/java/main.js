
class Usuario{
    constructor(Nombre,Apellido, SegundoApe, Rol, Edad, ){
    //clase=parametros
    this.Nombre=Nombre;
    this.Apellido=Apellido;
    this.SegundoApe=SegundoApe;
    this.Rol=Rol;
    this.Edad=Edad;
    }
}

//creamos una función
function carga(parametros){
    const Nuevo=document.createElement("div")
    Nuevo.innerHTML=`<b>Nombre: ${parametros.Nombre}</b>
                     <b>Apellido: ${parametros.Apellido}</b>
                     <b>Segundo apellido ${parametros.SegundoApe}</b>
                     <b>Rol: ${parametros.Rol}</b>
                     <b>Edad: ${parametros.Edad=Text(prompt(""))}</b>`;
    document.body.appendChild(Nuevo)
}

//asignación de datos
carga(new Usuario(parametros.Nombre=Text(prompt("ingrese su nombre")),parametros.Apellido=Text(prompt("ingrese su apellido")),parametros.SegundoApe=Text(prompt("ingrese su segundo apellido")),parametros.Rol=Text(prompt("ingrese su rol")),parametros.Edad=Number(prompt("ingrese su edad"))))