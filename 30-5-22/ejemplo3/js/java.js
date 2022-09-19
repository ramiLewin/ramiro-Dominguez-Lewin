
let edad;
let nombre;
let apellido;
/*funcion sin parametros */
function solicitud(){
    nombre=String(prompt("ingrese su nombre"));
    apellido=String(prompt("ingrese su apellido"));
    edad=Number(prompt("ingrese su edad"));
    //estructura de seleccion(if) a eleccion
    //segun la estructura impirmir un alert

}

//llamamos la funcion
//solicitud();

//utilizamos un cicloo para mas ingreso/no es necesario
for(let i=0;i<=2;1++){
    solicitud();
}