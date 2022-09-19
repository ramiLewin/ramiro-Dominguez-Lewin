//recorrido del array
const numero=[10,9,8,7,6,6,200,100];
//posicion    0, 1,2,3,4,5,6,  7

//imprimir los primeros 5 numeros del array
//1°paso, iniciamos el ciclo de repetición

for(let i=0; i<5;i++/*el "++" le suma uno(1) a la variable*/ )
{
//impresion de los primeros 5 numero
console.log(numero[i]);//el numero entre [] es la posición de la variable
}

console.log("--------");

//length - determenta el total de elementos que tiene el array(igual que el len)
for(let i=0; i<numero.length; i++)
{
    console.log(numero[i]);
}

console.log("--------");

//agregar elemento al final del array
//          push

const num=[1,2,3,3,4];
num.push(5);//agrega el elemento al final
console.log(num);

console.log("--------")
//unshift
//agrega un elemento al comienzo del array
const nume=[0,1,2,3,4];
nume.unshift(1);
console.log(nume);