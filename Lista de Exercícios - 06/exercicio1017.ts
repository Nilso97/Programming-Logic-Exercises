/* Exercício 1017
Joaozinho quer calcular e mostrar a quantidade de litros de combustível gastos em uma viagem, ao utilizar um automóvel que faz 12 KM/L. Para isso, ele gostaria que você o auxiliasse através de um simples programa. Para efetuar o cálculo, deve-se fornecer o tempo gasto na viagem (em horas) e a velocidade média durante a mesma (em km/h). Assim, pode-se obter distância percorrida e, em seguida, calcular quantos litros seriam necessários. Mostre o valor com 3 casas decimais após o ponto.
Entrada

O arquivo de entrada contém dois inteiros. O primeiro é o tempo gasto na viagem (em horas) e o segundo é a velocidade média durante a mesma (em km/h).
Saída

Imprima a quantidade de litros necessária para realizar a viagem, com três dígitos após o ponto decimal
*/

// Tempo: 10h
// Velocidade: 85Km/h

function calcularCombustivel(tempo: number, velocidade: number) {
    var litros = (tempo * velocidade) / 12;
    
    return console.log(litros.toFixed(3));
}

calcularCombustivel(2, 92);


/* .js
function calcularCombustivel(tempo, velocidade) {
    var litros = tempo * velocidade / 12;
    
    console.log(litros.toFixed(3));
}

calcularCombustivel(10, 85);
*/
