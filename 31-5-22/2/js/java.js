//funcion sin parametros(para obtener los datos por el usuario)
function carta(id, nombre, numero, color, tipo){
    //os datos ente parentesis son PARAMETROS
    this.id=id
    //"this.id" es una propiedad del objeto
    //id es una parametro ingresado en la funcion
    this.nombre=nombre
    this.numero=numero
    this.color=color
    this.tipo=tipo   
}

//asignar valor por parametro a la funcion
//creamos una variable la cual enviara los datos a la cion "carta"
                        //pasamos por parametros
const enviar=new carta(0,1,"rojo", "normal")
//imprimirnla variable que contiene los parametros
console.log(enviar)