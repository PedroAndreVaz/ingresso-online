function comprar() {
    let tipoIngresso = document.getElementById('tipo-ingresso').value;
    let qtd = parseInt(document.getElementById('qtd').value);
    
    if (qtd<= 0 ) {
       return alert ('erro! verifique se preencheu os campos correntamente')
    }

    if(tipoIngresso == 'pista') {
        comprarPista(qtd);
    } else if (tipoIngresso.value == 'superior'){
        comprarSuperior(qtd)
    } else{
        comprarInferior(qtd)
    }

}

function comprarPista (qtd) {
    let qtdPista = parseInt(document.getElementById('qtd-pista').textContent);
    if (qtd > qtdPista) {
        alert ('quantidade indisponivel para tipo pista');
    } else {
        qtdPista = qtdPista - qtd;
        document.getElementById('qtd-pista').textContent = qtdPista;
        alert ('Compra realizada!')
    }
}



function comprarSuperior (qtd) {
    let qtdSuperior = parseInt(document.getElementById('qtd-superior').textContent);
    if (qtd > qtdSuperior) {
        alert ('quantidade indisponivel para tipo superior');
    } else {
        qtdSuperior = qtdSuperior - qtd;
        document.getElementById('qtd-superior').textContent = qtdSuperior;
        alert ('Compra realizada!')
    }
}


function comprarInferior (qtd) {
    let qtdInferior = parseInt(document.getElementById('qtd-inferior').textContent);
    if (qtd > qtdInferior) {
        alert ('quantidade indisponivel para tipo inferior');
    } else {
        qtdInferior = qtdInferior - qtd;
        document.getElementById('qtd-inferior').textContent = qtdInferior;
        alert ('Compra realizada!')
    }
}


