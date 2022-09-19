/*crear la funcion que le permmita al usuario contruir un objeto para modelar un empleado con:
    *apellido-nombre-edad-localida-dni-direccion
pedir al usaurio de que ingrese los datos para un empleado e emprima la nformacion ingresada
si la edad es mayor a 21, imprirmir el objeto
pedir al usuario que ingrese los datos para un empleado e imprima*/
function empleado(ape, nombre, edad, loc, dni, dire){
    this.ape=ape;
    this.nombre=nombre;//al declarar la variable es necesario poner ";"
    this.edad=edad;
    this.loc=loc;
    this.dni=dni;
    this.dire=dire;
}
//solicitud al usuario
const nombre=String(prompt("ingrese el nombre del empleado"));
const ape =String(prompt("ingrese el apellido del empleado"));
const edad=Number(prompt("ingrese la edad del empleado"));
const dni=Number(prompt("ingrese el DNI del empleado"));
const loc=Number(prompt("ingrese la localidad del empleado"));
const dire=Number(prompt("ingrese la direccion del empleado"));
//asignar una variable a los parametros

if(edad=>21){
    const datos=new empleado(nombre, ape, edad, dni, loc, dire);
    console.log(datos);
}