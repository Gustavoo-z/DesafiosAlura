/* Desafio DETRAN
alert('Boas vindas ao nosso site!');

let nome = prompt('Qual seu nome?');
let idade = prompt('Qual sua idade?');

    if (idade >= 18) {
        alert("Pode tirar a habilitação!")
    }
    else {
        alert("Você precisa ter 18 anos ou mais para tirar a habilitação.")
    };*/

/* Desafio DiaDaSemana
alert('Boas vindas ao nosso site!');

let diaDaSemana = prompt('Qual é o dia de hoje?');

    if (diaDaSemana === 'sabado' || diaDaSemana === 'domingo') {
        alert("Bom fim de semana!");
    }
    else {
        alert("Boa semana!");
    };*/

/*Desafio número positivo ou negativo
    alert('Boas vindas ao nosso site!');

let numero = prompt("Digite qualquer número");

    if (numero > 0) {
        alert('Esse numero é positivo!')
    }
    else {
        alert('Esse número é negativo!')
    };*/

/*Desafio sistema de pontuação
    alert('Boas vindas ao nosso site!');

let pontos = prompt("Qual foi sua pontuação");

    if(pontos >= 100) {
        alert('Parabéns você antingiu a pontuação necessária!')
    }
    else {
        alert('Você precisa atingir 100 pontos para vencer, tente novamente!')
    };*/

/*Desafio mensagem saldo
    alert('Boas vindas ao nosso site!');

let saldoconta = 2175.04

    alert(`O seu saldo é de R$ ${saldoconta}`);*/

/*Desafio Boas vindas

let nome = prompt('Qual seu nome?');
let sobrenome = prompt('Qual seu sobrenome?');

    alert(`Bem vindo ao nosso site ${nome} ${sobrenome}!`);*/

/*Contador até 10 que mostra cada número
    alert('Boas vindas ao nosso site!');

let contador = 1;

    while (contador <= 10) {
        alert(`Número ${contador}`);
        contador++;
    };*/

/*Contador regressivo 
    alert('Boas vindas ao nosso site!');

let contador = 10;

    while (contador >= 0) {
        alert(`Número ${contador}`);
        contador--;
    };*/

/*Contador regressivo intuitivo
    alert('Boas vindas ao nosso site!');

let numero = prompt("Digite um número para ser contado regressivamente");
    
    alert("Verifique o console!");

    while (numero >= 0) {
        console.log(`Número atual: [${numero}]`);
        numero--;
    };*/

/*Contador progressivo
    alert('Boas vindas ao nosso site!');

let numero = prompt("Digite um número para contarmos até ele!");
let inicial = 0

    alert('Verifique o console!');

    while (inicial <= numero) {
        console.log(`Número atual [${inicial}]`);
        inicial++;
    };*/

/*Desafio soma de valores
    alert('Boas vindas ao nosso site de somas');

let valor1 = parseFloat(prompt('Digite um número'));
let valor2 = parseFloat(prompt('Digite mais um número'));

let resultado = (valor1 + valor2);
    alert(`A soma dos valores ${valor1} e ${valor2} é igual a ${resultado}!`);*/

/*Desafio nota de 0 a 10
    alert('Boas vindas ao site de médias');

let nota = prompt('Digite a nota que você tirou');

    if(nota >= 7) {
        alert('Você foi aprovado!')
    } else alert('Você foi reprovado!');*/

/*Gerador de número aleatório até 1000
    alert('Bem vindo ao jogo do número premiado!');

let numero = parseInt(Math.random() * 1000 + 1);

    alert(`O seu número da sorte é ${numero}!`);*/

/*Função que recebe nome como parâmetro
function exibirNome(nome) {
    console.log(`Olá, ${nome}!`);
}

exibirNome(prompt('Qual o seu nome?'));*/

/*Função que recebe um número como parâmetro e retorna o dobro
function dobrarValor(valor) {
    let valorDobro = valor * 2;
    console.log(`O dobro de ${valor} é ${valorDobro}!`);
}

dobrarValor(prompt('Digite um número para duplicarmos!'));*/

/*Função que retorna média de três números como parâmetro
function mediaValor(valor1, valor2, valor3) {
    let soma = valor1 + valor2 + valor3;
    let media = soma / 3;
    return media;
}

let valor1 = parseInt(prompt('Digite o primeiro número'));
let valor2 = parseInt(prompt('Digite o segundo número'));
let valor3 = parseInt(prompt('Digite o terceiro número'));
let media = mediaValor(valor1, valor2, valor3);

console.log(`A média dos valores ${valor1}, ${valor2} e ${valor3} é ${media}!`);*/

/*Função que compara e retorna maior número
function compararValor(valor1, valor2) {
    if (valor1 > valor2) {
        return valor1;
    } else {
        return valor2;
    }
}

let valor1 = parseInt(prompt('Digite um número.'));
let valor2 = parseInt(prompt('Digite outro número.'));
let resultado = compararValor(valor1, valor2);

console.log(`O maior número entre ${valor1} e ${valor2} é ${resultado}!`);*/

/*Função que retorna a multiplicação do próprio número
function multiplicarNumero(valor1) {
    let resultado = valor1 * valor1;
    return resultado;
}

let valor1 = parseInt(prompt('Digite um número para multiplicarmos.'));
let resultado = multiplicarNumero(valor1);
console.log(`O número ${valor1} multiplicado por ele mesmo é: ${resultado}!`)*/

/*Função para calcular IMC
function calcularImc(peso, altura) {
    let alturaImc = altura * altura;
    let imc = peso / alturaImc;
    let imcReal = imc * 10000;
    return imcReal;
}
    alert('Bem vindo a calculadora de IMC');

let peso = parseInt(prompt('Qual seu peso? Separe as gramas com virgula'));
let altura = parseInt(prompt('Qual sua altura? Preencha sem pontuação.'));
let resultado = calcularImc(peso, altura);

    console.log(`Seu IMC é ${resultado}!`);*/

/*Função para calcular o valor fatorial de um número
function calcularFatorial(valor) {
    let fatorial = valor;
    let multiplicador = fatorial - 1;
        while(multiplicador > 0) {
            fatorial = fatorial * multiplicador;
            multiplicador --;
        }
    return fatorial;
}

let valor = parseInt(prompt('Digite um número para descobrir o valor fatorial dele!'));
let resultado = calcularFatorial(valor);
console.log(`O fatorial do ${valor} é ${resultado}!`);*/

/*Função para conversão em dólar
function conversaoDolar(valor) {
    let dolar = 4.80;
    valor = valor * dolar;
    return valor;
}

let valor = parseInt(prompt('Digite um valor para conversão de reais para dólares.'));
let dolar = conversaoDolar(valor);
let escritaValor = valor > 1 ? 'reais' : 'real';
console.log(`${valor} ${escritaValor} equivale a ${dolar} em dólar!`);*/

/*Função para calcular área e o perímetro de uma sala retangular
function calcularArea(altura, largura) {
    let area = altura * largura;
    return area;
}
function calcularPerimetro(altura, largura) {
    let perimetro = altura + largura;
    perimetro = perimetro * 2;
    return perimetro;
}

let altura = parseInt(prompt('Qual a altura da sala?'));
let largura = parseInt(prompt('Qual a largura da sala?'));
let area = calcularArea(altura, largura);
let perimetro = calcularPerimetro(altura, largura);
    console.log(`A área da sala é de ${area} e o perímetro de ${perimetro}.`);*/

/*Função para calcular área e perímetro de uma sala circular
function calcularArea(raio) {
    let pi = 3.14;
    let area = raio * 2;
    area = pi * area;
    return area;
}
function calcularPerimetro(raio) {
    let pi = 3.14;
    let perimetro = pi * 2;
    perimetro = perimetro * raio;
    return perimetro;
}

let raio = parseInt(prompt('Digite o raio de uma área circular.'));
let area = calcularArea(raio);
let perimetro = calcularPerimetro(raio);
    console.log(`A área da sala é de ${area} e o perímetro de ${perimetro}.`);*/

/*Função que retorna a tabuada
function retornarTabuada(numero) {
    let inicio = 1;
    while (inicio <= 10) {
        let resultado = numero * inicio;
        console.log(`${numero} x ${inicio} é igual a ${resultado}!`);
        inicio ++;
    }
}
let numero = parseInt(prompt('Digite um número para retornar a tabuada.'));
let valor = retornarTabuada(numero);*/

            /* --------- Introdução Arrays --------- */

/*Array com linguagens de programação
let linguagemDeProgramacao = ['Javascript','C','C++','Kotlin','Python'];

linguagemDeProgramacao.push('Java','Ruby', 'GoLand');

console.log(linguagemDeProgramacao[0]);
console.log(linguagemDeProgramacao[1]);
let ultimoElemento = linguagemDeProgramacao[linguagemDeProgramacao.length - 1];
    console.log(ultimoElemento);*/

/*Função para verificar se uma frase é um palíndromo
let palavra = prompt('Digite uma palavra para verificamos se é um palíndromo.');

    palavra = palavra.toLowerCase();
    palavra = palavra.replace(" ", "");
    let palavraInversa = palavra.split("").reverse().join("");

        if (palavra == palavraInversa) {
            alert('Essa palavra é um palíndromo.');
        } else {
            alert('Essa palavra não é um palíndromo.');
        }*/

/*Função para retornar três números em ordem crescente
function numeros(num1, num2, num3) {
    let arrayNumeros = [num1,num2,num3];
    arrayNumeros.sort((a, b) => a - b);
    return arrayNumeros;
}

let num1 = parseInt(prompt('Digite o primeiro número'));
let num2 = parseInt(prompt('Digite o segundo número'));
let num3 = parseInt(prompt('Digite o terceiro número'));

let ordenados = numeros(num1, num2, num3);
alert(`Os número ordenados ficam assim: ${ordenados}`);*/

/*Função com 3 inputs e 1 button para obter valores dos campos e alterar texto para resposta.
function enviar() {
    let num1 = parseInt(document.getElementById('campo-1').value);
    let num2 = parseInt(document.getElementById('campo-2').value);
    let num3 = parseInt(document.getElementById('campo-3').value);

    let resultado = num1 + num2 + num3;

    let texto = document.getElementById('titulo');
    texto.innerHTML = `<h5 class="titulo">A soma de ${num1}, ${num2} e ${num3} é ${resultado}!</h5>`;
}*/

/*Função calculadora
function calculadora() {
    let resposta = prompt('Digite M para multiplicação, D para divisão, S para subtração ou A para adição!');
    let num1 = parseInt(prompt('Digite o primeiro número.'));
    let num2 = parseInt(prompt('Digite o segundo número.'));
        if (resposta == 'M') {
            resposta = num1 * num2;
            alert(`A resposta da multiplicação entre ${num1} e ${num2} é ${resposta}`);
        } else if (resposta == 'D') {
            resposta = num1 / num2;
            alert(`A resposta da divisão entre ${num1} e ${num2} é ${resposta}`);
        } else if (resposta == 'S') {
            resposta = num1 - num2;
            alert(`A resposta da subtração entre ${num1} e ${num2} é ${resposta}`);
        } else if (resposta == 'A') {
            resposta = num1 + num2;
            alert(`A resposta da adição entre ${num1} e ${num2} é ${resposta}`);
        }
}*/

/*Função número par ou ímpar
function verificarNumero() {
    let num = prompt('Digite um número para verificar se ele é ímpar ou par.');
    if (isNaN(num)) {
        alert('Por favor, digite um número válido.');
        return;
    } else if (num = ' ') {
        alert('Por favor, digite um número válido.');
        return;
    }
    let ultimoNum = num[num.length - 1];
        if (['0', '2', '4', '6', '8'].includes(ultimoNum)) {
            alert(`O número ${num} é par.`);
        } else {
            alert(`O número ${num} é ímpar.`);
        }
        console.log(num, ultimoNum);
}*/

/*Função para converter Celsius em Fahrenheit e vice-versa.
function converterGraus() {
    let grau = prompt('Você deseja converter Celsius ou Fahrenheit?');
        if (grau == 'Celsius') {
            let qntd = parseInt(prompt('Quantos graus Celsius você deseja converter?'));
            let resposta = (qntd * 1.8) + 32;
            alert(`${qntd} graus Celsius convertidos em Fahrenheit é ${resposta}!`);
        } else {
            let qntd = parseInt(prompt('Quantos graus Fahrenheit você deseja converter?'));
            let resposta = (5 / 9) * (qntd - 32);
            alert(`${qntd} graus Fahrenheit convertidos em Graus é ${resposta}!`);
        }
}*/