/*crear la funcion que le permmita al usuario contruir un objeto para modelar un empleado con:
    *apellido-nombre-edad
pedir al usaurio de que ingrese los datos para un empleado e emprima la nformacion ingresada-->*/
function empleado(ape, nombre, edad){
    this.ape=ape;
    this.nombre=nombre;//al declarar la variable es necesario poner ";"
    this.edad=edad;
}
//solicitud al usuario
const nombre=String(prompt("ingrese el nombre del empleado"));
const ape =String(prompt("ingrese el apellido del empleado"));
const edad=Number(prompt("ingrese la edad del empleado"));

//asignar una variable a los parametros
const datos=new empleado(nombre, ape, edad);
console.log(datos);
