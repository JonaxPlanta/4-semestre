function traduzir() {
  var traduzido = document.getElementById("traduzindo");
  traduzido.innerHTML="Hello!";
}

function ligaDesliga() {
  var elemento = document.getElementById("imagem");
  if (elemento.src.match("bulbon")) {
    elemento.src="pic_bulboff.png";
  } else {
    elemento.src="pic_bulbon.png"
  }
}