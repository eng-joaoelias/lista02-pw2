let listaProdutos = new Map([
  ['Arroz', 7.1],
  ['Feijão', 2.3],
  ['Macarrão', 4.7],
  ['Refrigerante', 3.0]
]);

let listaFretes = new Map([
  ['São Paulo', 10.1],
  ['Rio de Janeiro', 12.3],
  ['Brasília', 14.7],
  ['Outros', 13],
]);

function calculaValorTotalDaCompra(produtosComprados, cidade, caixa, fretes) {
  let soma = 0;
  
  for (let item of produtosComprados) {
    if (listaProdutos.has(item)) {
      soma = soma + listaProdutos.get(item);
    }
  }

  let vlrFrete = listaFretes.has(cidade) ? listaFretes.get(cidade) : listaFretes.get('Outros');
  return soma + vlrFrete;
}

console.log(calculaValorTotalDaCompra(['Arroz'], 'São Paulo', listaProdutos, listaFretes));