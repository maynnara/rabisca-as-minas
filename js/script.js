// BOTAO AMEI TATUADORAS
var botoesAmei = document.querySelectorAll(".botao.amei");

function amar () {
	
	if (this.className == "botao amei") {
		this.className = "botao amei vermelho";
	} else {
		this.className = "botao amei";
	}
}

for (var i = 0; i < botoesAmei.length; i++) {
	botoesAmei[i].onclick = amar;
}

// FIM BOTAO AMEI TATUADORAS