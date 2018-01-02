function criaCartas(tamanhoCartaEmX, tamanhoCartaEmY) {
	cartas = new Array();
	var carta = undefined;
	var inicioNome = "images/";
	var numeroCarta = 1;
	var fimNome = ".jpg";
	var nomeCarta = undefined;

	
	for(var i = 0 ; i < (numeroLinhas * numeroLinhas) / 2; i++){
		nomeCarta = inicioNome + numeroCarta + fimNome;
		carta = criaCarta(nomeCarta, "images/back.jpg", true, tamanhoCartaEmX, tamanhoCartaEmY);
		cartas.push(carta);
		cartas.push(carta);
		numeroCarta++;
	}
	return cartas;
}

function mapeiaPosicaoDasCartas(tamanhoCartaX, tamanhoCartaY) {
	
	var posicaoCartas = new Map();

	var posicaoPrimeiraCarta = [2,2];
	var posicaoDaCartaAtual = posicaoPrimeiraCarta;
	var indexAtual = 1;

	for(var i = 0 ; i < numeroLinhas; i++){
		for(var j = 0; j < numeroLinhas; j++){

			posicaoCartas.set(indexAtual , posicaoDaCartaAtual);
			
			posicaoDaCartaAtual = [posicaoDaCartaAtual[0]+tamanhoCartaX,posicaoDaCartaAtual[1]];
			
			if(j == numeroLinhas-1){
				posicaoDaCartaAtual = [posicaoPrimeiraCarta[0], posicaoDaCartaAtual[1]];
			}
			indexAtual += 1;
		}
		posicaoDaCartaAtual = [posicaoDaCartaAtual[0] , posicaoDaCartaAtual[1] + tamanhoCartaY];
	}
	return posicaoCartas;
}