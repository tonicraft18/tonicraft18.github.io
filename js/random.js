var frase = ["Puro entretenimiento :)","Dale en <a href=\"https://github.com/tonicraft18\" style=\"text-decoration: none\">mi GitHub :D"+
"</a>","Junior Programmer","S&iacute;gueme tambi&eacute;n en twitter uwu","Buena m&uacute;sica&nbsp;¿no bro?"]
var num = Math.random() * (5+1) - 1
var rand = document.getElementById('rand')
num = parseInt(num)
for (var i = 0; i < frase.length; i++) {
  if(num == i){
    rand.innerHTML = "random";
    break;
  }
}
console.log(num)
