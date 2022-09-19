/*creamos una clase */
class usuario{
     constructor(nombre_completo, Email, Telefono, Direccion, CP){
        
        this.nombre_completo=nombre_completo;
        this.Email=Email;
        this.Telefono=Telefono;
        this.Direccion=Direccion;
        this.CP=CP;
    }
}

//creamos un arrays de productos
const productos=[
    {
        nombre: "Remera",
        categoria:"Vans",
        img:"img/1.jpeg",
        precio: 10000,
    },
    {
        nombre: "Remera",
        categoria:"Vans",
        img:"img/2.jpeg",
        precio: 1000,
    },
    {
        nombre: "Remera",
        categoria:"Vans",
        img:"img/3.jpeg",
        precio: 2000,
    },
    {
        nombre: "Remera",
        categoria:"Vans",
        img:"img/4.jpeg",
        precio: 1,
    },
    {
        nombre: "Remera",
        categoria:"Vans",
        img:"img/5.jpeg",
        precio: 2,
    },
    {
        nombre: "Remera",
        categoria:"Vans",
        img:"img/",
        precio: 23000,
    },
    {
        nombre: "Remera",
        categoria:"Vans",
        img:"img/",
        precio: 10040,
    },
    {
        nombre: "Remera",
        categoria:"Vans",
        img:"img/",
        precio: 1020,
    }

]
iniciar_aplicacion();
/*funcion general: llamada */
function inicar_aplicacion(){
    //llamamos a la funcion de acciones
    carga_funcionalidades();
    mostar_categoria();
    MostrarProductos();
}

//creacion de la funcion de acciones
function carga_funcionalidades(){
    //llamamos a la funcion de acciones
    cargar_categorias();
}

function cargar_categorias(){
    //creamos una funcion para extraer la "categoria" del arrays("productos")
    //map: se utilizar para filtrar datos, es decir, busca y extrae un dato en particular
    const categoria= productos.map(elemento => elemento.productos);

    //seleccionamos la cateogira a utilizar y la almacenamos en una variable
    const seleccionar_categorias= new Set(catetgorias);

    // __ spread operator __
    //extrae los items del array /jseon de forma independiente
    const categoriasunicas= [...seleccionar_categorias];

    //utilizamos el operador
    //utilizar para el carrito mas adelante
    categoriassistema = cateogoriasUnicas.map(elemento=>{
        return {
        nombre: elemento,
        descripcion: elemento,
        }
    
    });
} 

/*-->creación de DOOM<--*/
//creacion de etiquetas de HTML y JS

function mostar_categoria()
{
    //crear una variable que contenga el ID "categoriamenu"
    const divcategorias= document.getElementById("categoriamenu");
    //extraemos los elementos
    categoriassistema.forEach(elemento => {
        //creamos una etiqueta para un boton "btn"
        const btn=Document.createElement("button");
        //generamos una lista con una etiqueta
        btn.classList.add("catbtn");
        //generamos un innertext para mostar los datos
        btn.innerText=elemento.nombre;
        //creamos el evento "click"
        btn.addEvenListener("click",()=>{
            //pasamos por parametos a una funcion el nombre 
            MostrarProductos(elemento.nombre);
        })
        //cargamos los datos
        divcategorias.appendChild(btn);
    });
}
function MostrarProductos(MostrarProductos="")
{
    let listadeproductos=productos;
    //si hay un parametro lo filtra y busca dentro del array
    if(nombredecategoria!==""){
        listadeproductos=productos.filter(product=>product.categoria===nombredecategoria)

    }
    //creamos una variable que le asignamos un ID del HTML
    const nuevacategoria=document.getElementById("nombredecategoria")
    categoria.innerText=nombredecategoria.toUpperCase();
    //creamos la variable que contenga una nueva etiqueta
    const productlist=document.getElementById("listaproductos")//id de html
    productlist.innerHTML="";

    //recorremos la listaproductos la cual tiene el arrays
    listaproductos.forEach(producto=>{
        //extraemos los datos del arrays
        const{img, nombre, precio}=productos;
        //creamos una etiqueta "div" para gargar los productos
        const div=document.createElement("div");
        //le asignamos un id
        div.classList.add("productos");
        //plantilla
        div.innerHTML=`<img src="${img}">
                        <div class="infoproductos">
                            <div class="nombreproducto">
                                ${nombre}
                            </div>
                            <br>
                            <span class="">
                                precio:<b> $ ${precio}</b>
                            </span>
                        </div>
                        <buttom class="agregar">
                            agregar al carrito
                        </buttom>`
        productlist.appendChild(div);

    }) 




};