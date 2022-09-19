//objeto constructor
class usuarios{//clase usuarios
    consrtructor (id,nombre,apellido,edad)
    {
                //elementos del objeto=parametros
                this.id=id;
                this.nombre=nombre;
                this.apellido=apellido;
                this.edad=edad;
        
    }

}

//registramos los usuarios en el objeto
const usuario1= new usuarios(1, "Pablo","Gareis", 27);
//variable ---> objeto
const usuario2= new usuarios(2, "Luis","Leiva", 17);


//almacenado de usuarios
//array->objeto-objeto
const usuario=[usuario1, usuario2]

//impresion de array
console,log("array", user)

//fincion sin parametros -->llamamos la funcion
menuselectivo();

//creamos la funcion
function menuselectivo(){
    //variable de corte de control
    let opcion=0;
    //ciclo while con condicion
    while(opcion!==2)
        {
        //menu selectivo
        opcion=prompt(`bienvenido
                    ingrese un numero para continuar
                    ingrese 2 para salir`);
                
        //estructura de seleccion multible: "case"
        switch(opcion){
            case 1:
                //llamar a la funcion
            break
            case 2:
                alert("gracias, vuelva pronto!")
                break
            default://==else
                alert("has ingresado mal la clave")
                break;
            }
        }
}

function agregarusuario(){
    let nombre=prompt("ingrese un nombre")
    let apellido=prompt("Ingrese un apellido")
    let edad=Number(prompt("ingrese su edad"))
    let usurio= new usuarios(getid(),nombre, apellido,edad)
    //utilizamos el metodo push
    usuario.push(usu);
    //mensaje en pantalla
    console.log("te has registrado como un nuevo usuario")
    //se genera una vista de la tabka con el ".table" 
    console.table(usuarios);

}

//creamos el metodo de verificacion de id
function getid()
{
    //comprobamos si hay datos en el array con el metodo
    if(usuario.length===0){
        return 1;        
    }else{
        //asignacion
        const ultimo=usuario[usuario.length-1]
        //suma una posicion em el array
        return ultimo.id+1;

    }
}