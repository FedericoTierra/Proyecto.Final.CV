
document.getElementById("Boton_mail").onclick = function() {
  console.log ("capturar evento click")
  document.getElementById("titulo_usuario").innerHTML = "Mi e-mail es"
  document.getElementById("valor_del_usuario").innerHTML="yolanda_ramos@mail.com"
}

document.getElementById("Boton_Telefono").onclick = function() {
  console.log ("capturar evento click")
  document.getElementById("titulo_usuario").innerHTML = "Mi contacto es"
  document.getElementById("valor_del_usuario").innerHTML="133-3456-1234"
}

document.getElementById("Boton_Nacimiento").onclick = function() {
  console.log ("capturar evento click")
  document.getElementById("titulo_usuario").innerHTML = "Mi fecha de nacimiento es"
  document.getElementById("valor_del_usuario").innerHTML="04/11/1989"
}
document.getElementById("Boton_Lugar").onclick = function() {
  console.log ("capturar evento click")
  document.getElementById("titulo_usuario").innerHTML = "Mi dirección es"
  document.getElementById("valor_del_usuario").innerHTML="Suipacha 6789, Santa Fe. Argentina"
}
document.getElementById("boton_usuario").onclick = function() {
  console.log ("capturar evento click")
  document.getElementById("titulo_usuario").innerHTML = "Hola, mi nombre es"
  document.getElementById("valor_del_usuario").innerHTML="Yolanda Ramos"
}
