function limpaTela() {
	pincel.fillStyle = '#ffffff';
	pincel.fillRect(0,0,width,height);
}

function getParameter(paramName, parametros) {
  var val, params = parametros.split("&");

  for (var i=0;i<params.length;i++) {
    val = params[i].split("=");
   
    if (val[0] == paramName) {
      return val[1];
    }
  }
  return null;
}

function desenhaFiguras(cartas, posicoesCartas){
	pincel.fillStyle = '#000000';


	cartas = shuffle(cartas);
	var posicaoDaImagem = undefined, posicaoDaCopia = undefined;

	console.log("quantidade de cartas: " + cartas.length);
	var img = undefined;

	for(var i = 0 ; i < cartas.length; i++){
		img = cartas[i].fundo;
		img.onload = function(img) {
			return function(){
				posicaoDaImagem = encontraUmaPosicaoAleatoria(posicoesCartas);
				pincel.drawImage(img, posicaoDaImagem[0], posicaoDaImagem[1], img.width -4, img.height -4);

				posicaoDaCopia = encontraUmaPosicaoAleatoria(posicoesCartas);
				pincel.drawImage(img, posicaoDaCopia[0], posicaoDaCopia[1], img.width -4, img.height -4);
				
			};
		}(img);
	}

}

function encontraUmaPosicaoAleatoria(posicoesCartas){

	var numeroAleatorio = parseInt(Math.random() * 16) + 1; // pode ser constante
	var posicaoDaImagem = 0;

	while(posicoesCartas.get(numeroAleatorio) == undefined){
		numeroAleatorio = parseInt(Math.random() * 16) + 1;
	}
	
	posicaoDaImagem = posicoesCartas.get(numeroAleatorio);
	posicoesCartas.delete(numeroAleatorio);
	
	return posicaoDaImagem;
}

function shuffle(a) {
  var j, x, i;
  for (i = a.length - 1; i > 0; i--) {
      j = Math.floor(Math.random() * (i + 1));
      x = a[i];
      a[i] = a[j];
      a[j] = x;
  }
  return a;
}
