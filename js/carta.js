function criaCarta(imgSrc, backImg, lado, tamanhoX, tamanhoY) {
	var imageFrente = set(imgSrc, tamanhoX , tamanhoY);
  var imageBack = set(backImg, tamanhoX, tamanhoY);
	var carta = {
		frente: imageFrente,
		fundo: imageBack,
		lado: lado
	}
	return carta;
}


function set(imgSrc, tamanhoX, tamanhoY) {

	var image = new Image();
	image.height = tamanhoY;
	image.width = tamanhoX;
	
	image.src = imgSrc;

	return image;
}

function criaCartas(tamanhoCartaEmX, tamanhoCartaEmY, qtdCartas) {
	cartas = new Array();
	var carta = undefined;
	var inicioNome = "images/";
	var numeroCarta = 1;
	var fimNome = ".jpg";
	var srcImg = undefined;
	for(var i = 0 ; i < qtdCartas; i++){
		srcImg = inicioNome + numeroCarta + fimNome;
		carta = criaCarta(srcImg, "images/back.jpg", false, tamanhoCartaEmX, tamanhoCartaEmY);
		cartas.push(carta);
		cartas.push(carta);
		numeroCarta++;
	}
	return cartas;
}
