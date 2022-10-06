console.log("Trabalhando com variáveis");
//JavaScript é um case sensitive, ou seja, letras maiuculas são diferentes de minusculas.
//não fazer:
//mes = "Janeiro";
let nome = "Alfredo"; //let é uma variável que pode mudar, const não muda.
const sobrenome = "Sena";

//console.log(nome + " " + sobrenome); //pode separar com virgula(,) ou com a concatenção(+)
console.log(nome, sobrenome);

console.log(`Meu nome é ${nome} ${sobrenome}`); //interpulação de variável

let contador = 0;
contador = contador +1;
const nomeCompleto = nome + sobrenome;
console.log(nomeCompleto);
//nomeCompleto = 2 "dá erro porque a variável é constante"

let idade; //declarando variável
idade = 24; //atribuindo valor
idade = idade + 1;
console.log(idade);