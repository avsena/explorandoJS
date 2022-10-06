console.log(`Trabalhando com condicionais`);

const listaDeDesdinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`,
);

const idadeComprador = 15;
console.log("Destinos possíveis: ");
console.log(listaDeDesdinos);

if (idadeComprador >= 18) {
    console.log("Comprador maior de idade");
    listaDeDesdinos.splice(1, 1);
} else {
    //a pessoa é menor de idade:
    if (estaAcompanhado) {
        console.log("Comprador maior de idade");
        listaDeDesdinos.splice(1, 1);
    }else {
        console.log("Comprador está acompanhado");
    }
}
console.log(listaDeDesdinos);