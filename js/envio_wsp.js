var a_msj_wsp = document.getElementById('enviar')
console.log(a_msj_wsp);

function mensaje_wsp(){
  var nombre = document.getElementById("nombre")
  var apellido = document.getElementById("apellido")
  var email = document.getElementById("email")
  var pais = document.getElementById("pais")
  var mensaje = document.getElementById("comentario")

  var mensaje_final


  mensaje_final ="Hola!,%20Mi%20Nombre%20es:%20" + nombre.value +",%20 y mi apellido es:%20" + apellido.value
  mensaje_final = mensaje_final + "%20Mi%20Mail%20es:%20" + email.value
  mensaje_final = mensaje_final + ",%20Soy%20de:%20" + pais.value + ",%20"
  mensaje_final = mensaje_final + "%20mensaje:%20" + comentario.value

  console.log(mensaje_final);
  var mensaje = "https://api.whatsapp.com/send?phone=+5491160545323&text="+mensaje_final 

 window.open(mensaje,'_blank');

}

a_msj_wsp.addEventListener('click', mensaje_wsp)