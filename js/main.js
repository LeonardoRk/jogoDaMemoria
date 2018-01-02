function criaCarta(imgSrc, backImg, lado, tamanhoX, tamanhoY) {
	var imageFrente = render(imgSrc, tamanhoX , tamanhoY);
  var imageBack = render(backImg, tamanhoX, tamanhoY);
	var carta = {
		frente: imageFrente,
		fundo: imageBack,
		lado: lado
	}

	return carta;
}

function render(imgSrc, tamanhoX, tamanhoY) {

	
	var image = new Image();
	image.height = tamanhoY;
	image.width = tamanhoX;
	
	image.src = imgSrc;

	return image;
}