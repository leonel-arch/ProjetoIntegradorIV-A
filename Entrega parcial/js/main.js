
var myIndex = 0; // declara uma variavel para primeira foto
carousel(); //declara a função

function carousel() {
  var i;
  var x = document.getElementsByClassName("imgSlide");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  myIndex++;
  if (myIndex > x.length) {myIndex = 1}    
  x[myIndex-1].style.display = "block";  
  setTimeout(carousel, 3000); // troca de imagem em 3 segundos
}