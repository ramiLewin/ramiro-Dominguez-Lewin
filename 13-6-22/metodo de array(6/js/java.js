//act de repaso
//solicitar al usuario el ingreso de un numero entero y cargarlo en un array
//usar metodo push y prompt
numero=[];
num=Number(prompt("ingrese un numero"));
numero.push(num);
console.log(numero);

//metodo splice
//este metodo se utiliza para eliminar elementos del array segun un indice y la cantidad(indice, cantidad_de_elementos)

//ej, creamos el array
const nume=[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
//quiero eliminar dos datos desde el indice 1
nume.splice(1,2);//elimina los datos desde el dato 1 borre dos datos
console.log(nume);

//metodo IndexOf
//se utiliza para indicar la posicion de un elemento array
const nombre=["Maletta","Elizalde","Navarro"];
//buscamos la posicion del elemento 3 del array
console.log(nombre.indexOf("Navarro"))
//console.log(nombre)