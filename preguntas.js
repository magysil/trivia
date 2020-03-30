let nombre= prompt("Bienvenido, como te llamas");
document.write('<p class="estilo">' + "Hola " + nombre + '</p>');
let aciertos = 0;
let fails = 0;

//mostrar preguntas capitales y ocultar botones
function mostrar_capitales(){ 
    document.getElementById("ocultar_p1_ca").style.display="block";
    document.getElementById("btn").style.display="none";
 
}

//mostrar preguntas comida y ocultar botones
function mostrar_comidas(){
    document.getElementById("ocultar_p1_co").style.display="block";
    document.getElementById("btn").style.display="none";
}
// bloque de seccion donde se selecciona las respuesta del quiz capital y se suma respuesta correcta
function capital(elemento)
{
    
    if (elemento.value=="Respuesta1")
    {
        aciertos= aciertos + 1;
        document.getElementById("ocultar_p1_ca").style.display="none";
        document.getElementById("ocultar_p2_ca").style.display="block";
        
    }
    else{
        fails = fails + 1;
        document.getElementById("ocultar_p1_ca").style.display="none";
        document.getElementById("ocultar_p2_ca").style.display="block";
    }
    if (elemento.value=="Respuesta4")
    {
        aciertos= aciertos + 1;
    }
    else{
        fails = fails + 1;
        
    }
    if (elemento.value=="Respuesta7")
    {
        aciertos= aciertos + 1;
    }
    else{
        fails = fails + 1;
    }
    document.getElementById("ocultar_p3_ca").style.display="none";
    alert( "Acertastes " + aciertos + " y Fallastes " + fails);
    confirm("¿Quieres volver a Jugar?");
    document.getElementById("btn").style.display="flex";
    aciertos=0;
    fails=0;

}

function comidas(){
    if (document.getElementById("resp10").checked)
    {
        aciertos= aciertos + 1;
        
    }
    else{
        fails = fails + 1;
    }
    if (document.getElementById("resp13").checked)
    {
        aciertos= aciertos + 1;
    }
    else{
        fails = fails + 1;
    }
    if (document.getElementById("resp16").checked)
    {
        aciertos= aciertos + 1;
    }
    else{
        fails = fails + 1;
    }
    document.getElementById("sec_com").style.display="none";
    alert( "Acertastes " + aciertos + " y Fallastes " + fails);
    confirm("¿Quieres volver a Jugar?");
    document.getElementById("btn").style.display="flex";
    aciertos=0;
    fails=0;
    
   
    
}
