console.log(`Trabalhando com listas`);
// const salvador = `Salvador`;
// const saoPaulo = `São Paulo`;
// const rioDeJaneiro = `Rio de Janeiro`;

const listaDeDesdinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`,
);

listaDeDesdinos.push(`Curitiba`) //adicionando um item na lista

console.log("Destinos possíveis: ");
// console.log(salvador, saoPaulo, rioDeJaneiro);

console.log(listaDeDesdinos);

listaDeDesdinos.splice(1,1) //deleta um item da lista
console.log(listaDeDesdinos);
console.log(listaDeDesdinos[1]); //exibe o item da lista selecionada

console.log(listaDeDesdinos[1], listaDeDesdinos[0]);
