var peso = parseFloat(prompt('Digite o peso em kg:'));
var altura = parseFloat(prompt('Digite a altura em metros:'));
var imc = peso / (altura * altura);

var classificacao;
if (imc < 18.5){
    classificacao = 'Abaixo do peso normal';
} else if (imc >= 18.5 && imc < 25){
    classificacao = 'Peso normal';
} else if (imc >= 25 && imc < 30){
    classificacao = 'Excesso de peso';
} else if (imc >= 30 && imc < 35){
    classificacao = 'Obesidade classe I';
}else if (imc >= 35 && imc < 40){
    classificacao = 'Obesidade classe II';
}else {
    classificacao = 'Obesidade classe III';
}

var resultado = 'Seu IMC é: ' + imc.toFixed(2) + '\nClassificação: ' + classificacao;
alert(resultado);


