function agregarEventos(){
  var btn_registro = document.getElementById("btn-regristrate");
btn_registro.addEventListener("click",mostrarRegistro);

var btnCerrarRegistro = document.getElementById("cerrarRegistro")
btnCerrarRegistro.addEventListener("click",cerrarModal);

var btnConductor = document.getElementById("btn-Conductor");
btnConductor.addEventListener("click", mostrarConductor)

var btnConductor2 = document.getElementById("btn-Conductor2");
btnConductor2.addEventListener("click", mostrarConductor)

var btnCerrarConductor = document.getElementById("cerrarConductor");
btnCerrarConductor.addEventListener("click", cerrarConductorsin)  
    
var btnIniciarSesion = document.getElementById("iniciarSecionBoton");
btnIniciarSesion.addEventListener("click",mostrarInicioSecion)
    
var contenidoInicio = document.getElementById("cerrarInicioSesion");
contenidoInicio.addEventListener("click",cerrarInicioSesion)
}

agregarEventos();

function mostrarRegistro(){
    var registro = document.getElementById("modalRegistro");
    
    registro.style.display = "block";
}

function cerrarModal(){
    var registro = document.getElementById("modalRegistro");
    
    registro.style.display = "none";
}

function mostrarConductor(){
    var conductor = document.getElementById("modalConductor");
    
    conductor.style.display="block"
}

function cerrarConductorsin(){
    var conductor = document.getElementById("modalConductor");
    
    conductor.style.display="none"
}

function mostrarInicioSecion(){
    var conductor = document.getElementById("iniciarSesion");
    
    conductor.style.display="block"
}
function cerrarInicioSesion(){
    var conductor = document.getElementById("iniciarSesion");
    
    conductor.style.display="none"
}


