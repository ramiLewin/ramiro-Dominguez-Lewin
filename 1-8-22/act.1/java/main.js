//llamamos a la función
cambiar_parrafo()
//creamos a la función
function cambiar_parrafo()
{
    //buscamos el id "informacipon" en html
    let parrafo=document.getElementById("informacion")
    //cambiamos el texto a: "Navarro the Best"
    parrafo.innerText="Navarro the Best";
}