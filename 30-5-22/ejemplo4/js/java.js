//funcion con parametros
function datos(nombre, edad){
//accion
    if(nombre=="raffo", nombre=="stegman"){
        alert("ausente en clase el Sr. Raffo Agustin Alberto")
        alert("ausente en clase el Sr. Stegman Ignacio Joel")
    }
    else{
        alert("Libre")
    }
}
let nombre;
let edad;
//metros /ciclo
for(let i=0; i<=2;i++){
    nombre =String(prompt("ingrese su nombre"));
    edad=Number(prompt("ingrese su edad"));//no es obligatorio el ";"
    datos(nombre, edad);
}