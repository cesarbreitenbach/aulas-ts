function fibo(x: number): number {
  if (x === 1) return 1;
  if (x === 2) return 2;
  else return fibo(x - 1) + fibo(x - 2);
}

function testaFibo(): number {
  let indice = 0;
  let valor = 0;
  let soma = 0;

  while (valor < 4000000) {
    valor = fibo(indice + 1);
    indice++;
    if (valor % 2 === 0) {
      soma += valor;
    }
  }

  return soma;
}

const resposta = testaFibo();

console.log(resposta);
