//creamos el arrays
const Alumnos=["maletta", "zimmer", "lewinr", "villalba"]

//cambiamos el texto de la etiqueta h1
const nuevo= document.getElementsByTagName("h1")[0]
nuevo.innerText="navarro 7mo grupo 7.2 2023 :)"

//generamos una etiqueta nueva (html) -> la anexamos a html desde javascript
const ul=document.createElement("ul")

//metodo para extraer los datos
Alumnos.forEach((Alumnos)=>{
    //trabajar con elementos individuales
    //creamos una lista para impirmir los datos
    const lista= document.createElement("li");
    //innertext-> colocar como items los datos del arryas
    lista.innerText=Alumnos;
    //realizar el pasaje de datos
    //appendchild-> guarda los cambios
    ul.appendChild(lista);

})

document.body.appendChild(ul);
