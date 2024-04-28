const taxaUSD = 5.50;
const taxaEUR = 6.50;
const taxaGBP = 7.50;

var valor = parseFloat(prompt('Digite o valor a ser convertido:'));
var moedaOrigem = prompt('Digite a moeda de origem:');
var moedaDestino = prompt('Digite a moeda de destino:');

let valorConvertido;
if(moedaOrigem === 'BRL'){
    if(moedaDestino === 'USD'){
        valorConvertido = valor / taxaUSD;
    }else if (moeadaDestino === 'EUR'){
        valorConvertido = valor / taxaEUR;
    }else if (moedaDestino === 'GBP'){
        valorConvertido = valor / taxaGBP;
    }else{
        valorConvertido = valor;
    }
}else if (moedaOrigem === 'USD'){
    valorConvertido = valor * taxaUSD;
}else if (moedaOrigem === 'EUR'){
    valorConvertido = valor * taxaEUR;
}else if (moedaOrigem === 'GBP'){
    valorConvertido = valor * taxaGBP;
}else{
    alert('Moeda de origem não encontrada!');
}

alert('Valor convertido: ' + valorConvertido.toFixed(2) + ' ' + moedaDestino);

