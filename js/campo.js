function desenhaColunas() {
	pincel.strokeStyle = '#cccccc';
	var acumulateDPlaceToDraw = 0;
	for(var i = 0 ; i < numeroLinhas - 1; i++){
		
		var placeToDraw = width/numeroLinhas;
		var acumulateDPlaceToDraw = acumulateDPlaceToDraw + placeToDraw;
		pincel.beginPath();
		pincel.moveTo(acumulateDPlaceToDraw,0);
		pincel.lineTo(acumulateDPlaceToDraw, height);
		pincel.stroke();
	}
}

function desenhaLinhas() {
	pincel.strokeStyle = '#cccccc';
	var acumulateDPlaceToDraw = 0;
	for(var i = 0 ; i < numeroLinhas - 1; i++){
		
		var placeToDraw = height/numeroLinhas;
		var acumulateDPlaceToDraw = acumulateDPlaceToDraw + placeToDraw;
		pincel.beginPath();
		pincel.moveTo(0, acumulateDPlaceToDraw);
		pincel.lineTo(width, acumulateDPlaceToDraw);
		pincel.stroke();
	}
}