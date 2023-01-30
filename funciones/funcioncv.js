
/**  LOS VERDADERO Y FALSO CORRESPONDEN A : VERDADERO SI ESTA COMPRIMIDO EL CONTENIDO Y FALSO SI ESTA DESPLEGADO */


var cursos = false
var formacion = false
var experiencia = false
var referencias = false
var informatica = false
console.log(cursos)
console.log(formacion)





document.getElementById("botoncursos").onclick = function botoncursos() {

    if (cursos == false) {

        console.log("se escucho el click de comprimir");
        document.getElementById("contenidocursos").classList.add("hidden")
        document.getElementById("botoncursos").innerHTML = "Desplegar"

        cursos = true;

    } else {

        console.log("se escucho el click de desplegar")
        document.getElementById("contenidocursos").style.display = "inline"
        document.getElementById("botoncursos").innerHTML = "Comprimir"

        cursos = false



    }
}


document.getElementById("botonformacion").onclick = function botonformacion() {

    if (formacion == false) {

        console.log("se escucho el click de comprimir de formacion")
        document.getElementById("contenidoformacion1").style.display = "none"
        document.getElementById("contenidoformacion2").style.display = "none"
        document.getElementById("botonformacion").innerHTML = "Desplegar"
        formacion = true

    } else {

        console.log("se escucho el click de desplegar")
        document.getElementById("contenidoformacion1").style.display = "inline"
        document.getElementById("contenidoformacion2").style.display = "inline"
        document.getElementById("botonformacion").innerHTML = "Comprimir"

        formacion = false

    }
}


document.getElementById("botonexperiencia").onclick = function botonexperiencia() {

    if (experiencia == false) {

        console.log("se escucho el click de comprimir de experiencia")
        document.getElementById("contenidoexperiencia1").style.display = "none"
        document.getElementById("contenidoexperiencia2").style.display = "none"
        document.getElementById("contenidoexperiencia3").style.display = "none"
        document.getElementById("contenidoexperiencia4").style.display = "none"
        document.getElementById("contenidoexperiencia5").style.display = "none"
        document.getElementById("contenidoexperiencia6").style.display = "none"
        document.getElementById("botonexperiencia").innerHTML = "Desplegar"
        experiencia = true

    } else {

        console.log("se escucho el click de desplegar experiencia")
        document.getElementById("contenidoexperiencia1").style.display = "inline"
        document.getElementById("contenidoexperiencia2").style.display = "inline"
        document.getElementById("contenidoexperiencia3").style.display = "inline"
        document.getElementById("contenidoexperiencia4").style.display = "inline"
        document.getElementById("contenidoexperiencia5").style.display = "inline"
        document.getElementById("contenidoexperiencia6").style.display = "inline"
        document.getElementById("botonexperiencia").innerHTML = "Comprimir"

        experiencia = false

    }
}





document.getElementById("botonreferencias").onclick = function botonreferencias() {

    if (referencias == false) {

        console.log("se escucho el click de comprimir de formacion")
        document.getElementById("contenidoreferencias1").style.display = "none"
        document.getElementById("contenidoreferencias2").style.display = "none"
        document.getElementById("botonreferencias").innerHTML = "Desplegar"
        referencias = true

    } else {

        console.log("se escucho el click de desplegar")
        document.getElementById("contenidoreferencias1").style.display = "inline"
        document.getElementById("contenidoreferencias2").style.display = "inline"
        document.getElementById("botonreferencias").innerHTML = "Comprimir"

        referencias = false

    }
}



document.getElementById("botoninformatica").onclick = function botoninformatica() {

    if (informatica == false) {

        console.log("se escucho el click de comprimir");
        document.getElementById("contenidoinformatica").style.display = "none"
        document.getElementById("botoninformatica").innerHTML = "Desplegar"

        informatica = true;

    } else {

        console.log("se escucho el click de desplegar")
        document.getElementById("contenidoinformatica").style.display = "inline"
        document.getElementById("botoninformatica").innerHTML = "Comprimir"

        informatica = false



    }
}









/** PARA LOS BOTONES RESUMEN Y DESPLIEGUE SE REUTILIZO EL MISMO CODIGO QUE PARA LOS BOTONES DE SECCIONES NORMALES */

document.getElementById("botonresumen").onclick = function botonresumen(botoninformatica) {

    console.log("se reconocio el activar el boton resumen de todo el cv")

    var cursos = false
    var formacion = false
    var experiencia = false
    var referencias = false
    var informatica = false


    document.getElementById("contenidocursos").style.display = "none"
    document.getElementById("botoncursos").innerHTML = "Desplegar"
    cursos = true;
    document.getElementById("contenidoformacion1").style.display = "none"
    document.getElementById("contenidoformacion2").style.display = "none"
    document.getElementById("botonformacion").innerHTML = "Desplegar"
    formacion = true
    document.getElementById("contenidoexperiencia1").style.display = "none"
    document.getElementById("contenidoexperiencia2").style.display = "none"
    document.getElementById("contenidoexperiencia3").style.display = "none"
    document.getElementById("contenidoexperiencia4").style.display = "none"
    document.getElementById("contenidoexperiencia5").style.display = "none"
    document.getElementById("contenidoexperiencia6").style.display = "none"
    document.getElementById("botonexperiencia").innerHTML = "Desplegar"
    experiencia = true
    document.getElementById("contenidoreferencias1").style.display = "none"
    document.getElementById("contenidoreferencias2").style.display = "none"
    document.getElementById("botonreferencias").innerHTML = "Desplegar"
    referencias = true
    document.getElementById("contenidoinformatica").style.display = "none"
    document.getElementById("botoninformatica").innerHTML = "Desplegar"
    informatica = true;



}


document.getElementById("botondespliegue").onclick = function botondespliegue() {


    var cursos = true
    var formacion = true
    var experiencia = true
    var referencias = true
    var informatica = true

    document.getElementById("contenidocursos").style.display = "inline"
    document.getElementById("botoncursos").innerHTML = "Comprimir"
    cursos = false
    document.getElementById("contenidoformacion1").style.display = "inline"
    document.getElementById("contenidoformacion2").style.display = "inline"
    document.getElementById("botonformacion").innerHTML = "Comprimir"
    formacion = false
    document.getElementById("contenidoexperiencia1").style.display = "inline"
    document.getElementById("contenidoexperiencia2").style.display = "inline"
    document.getElementById("contenidoexperiencia3").style.display = "inline"
    document.getElementById("contenidoexperiencia4").style.display = "inline"
    document.getElementById("contenidoexperiencia5").style.display = "inline"
    document.getElementById("contenidoexperiencia6").style.display = "inline"
    document.getElementById("botonexperiencia").innerHTML = "Comprimir"
    experiencia = false
    document.getElementById("contenidoreferencias1").style.display = "inline"
    document.getElementById("contenidoreferencias2").style.display = "inline"
    document.getElementById("botonreferencias").innerHTML = "Comprimir"
    referencias = false
    document.getElementById("contenidoinformatica").style.display = "inline"
    document.getElementById("botoninformatica").innerHTML = "Comprimir"
    informatica = false



}