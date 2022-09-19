/**declaracion de variable */
let nombre;
let edad;
/*solicitar dato, el prompt funciona como un input del python*/
nombre=String(prompt("ingrese su nombre"));
edad=Number(prompt("ingrese su edad"));

/*alert, es un mensaje para el usuario, usando "+" puede anclar variables*/
alert("usted es: " + String(nombre) + ", y su edad es: "+ Number(edad));
/*operadores
== igual
=== estrictamente igual(si o si se ) */

/*ejemplo 2 */

/**ciclos de repeticion */
/**for */
for (let i=0; i<=10; i++ )/*inicia en 0, se repetira mientras sea menor a 10, y da un salto por ciclo(tambien se puede escribir como i=i+1) */
{
    apellido=String(prompt("ingrese su apellido"));
    localidad=Number(prompt("ingrese su localidad"));
    if(apellido=="maletta")
    {
        alert("Bienvenido")
    }
    else{
        alert("Fuera-")
    }
} 