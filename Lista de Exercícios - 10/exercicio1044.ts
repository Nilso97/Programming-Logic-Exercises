/* Exercício 1044
Leia 2 valores inteiros (A e B). Após, o programa deve mostrar uma mensagem "Sao Multiplos" ou "Nao sao Multiplos", indicando se os valores lidos são múltiplos entre si.
Entrada

A entrada contém valores inteiros.
Saída

A saída deve conter uma das mensagens conforme descrito acima.
*/

function numbers(a: number, b: number) {
    if (b % a === 0) {
      console.log("São Múltiplos");
    } else {
      console.log("Não são Múltiplos");
    }
  }
  
  numbers(6, 24);
