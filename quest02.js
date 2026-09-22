let numeros = [1, 1, 3, 4, 5, 6, 7, 9, 9, 5, 5, 5, 5, 3];

function removeDuplicatas(listaNumeros){
  return new Set(listaNumeros);
}

console.log(removeDuplicatas(numeros));