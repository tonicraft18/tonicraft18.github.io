function uwu(){
var frase = ["Puro entretenimiento :)","Dale en <a href=\"https://github.com/tonicraft18\" style=\"text-decoration: none\">mi GitHub :D"+
"</a>","Junior Programmer","S&iacute;gueme tambi&eacute;n en twitter uwu","Buena m&uacute;sica&nbsp;&iquest;no bro?","Web Deevelopeeer",
"Música: Casin - glue70","Ingeniero en camino :D","Periodic Hour?","uwu","Energy = Much * Coffe^2","idk what put here","git commit -m"+
"\"añadiendo bugs y novedades :P\"","Pulsa algún botón de aquí abajo :P","Frases random, no está mal eh?","¿Copia de Minecraft?, sip"]
var num = Math.random() * (frase.length+1) - 1;
num = parseInt(num)
for (var i = 0; i < frase.length; i++) {
  if(num == i){
    document.getElementById("rand").innerHTML = frase[i];
    break;
  }
}
console.log(num)
}
