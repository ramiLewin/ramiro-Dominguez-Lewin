function login_acceso()
{
    var usu= document.getElementById("usuario").value;
    var usu= document.getElementById("contraseña").value; //var crea una variable
    if(usu=="pablo" && clave=="1")
    {
        window.location="inicio.html";
    }
    else
    {
        alert("error en la clave o en el usuario");//pantalla de error
    }
}