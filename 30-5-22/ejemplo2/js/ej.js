/*realizar el promedio de 3 notar */

/*si la nota es superior a 7 se debera imprimir aprobado, si la nota es inferiorm se debera imprimir desaprobado */

let nota;
let promedio=0;
let acumulador=0;
for (let i=0; i<=3; i++){
    nota=Number(prompt("ingrese la nota del trimestre"));
   acumulador= acumulador+nota;
}
let promediofinal=acumulador/i;