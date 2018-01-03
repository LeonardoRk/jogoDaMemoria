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
  console.log("Array Embaralhado");
  return a;
}
