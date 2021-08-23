const listaDePecas = ["Ar Condicionado", "Suspensao", "Motor"];

console.log(listaDePecas);

//Cadastrar as Peças, Capacidade Máxima de peças cadastradas é de 10un
if (listaDePecas.length < 10) {
    console.log("E possivel cadastrar mais pecas.");
} else {
    console.log("Nao ha mais espaco na lista");
}

//Peso deve ser superior a 100g para ser cadastrada
var peso = 150;

if (peso > 100) {
    console.log("Peso da peca adequado.");
} else {
    console.log("Peso da peca não atinge o valor mínimo permitido de 101g.");
}

//Verificacao da quantidade de caracteres das pecas
let nomePeca = "Eixo";

if (nomePeca.length > 3) {
    console.log("Nome adequado.");
} else if (nomePeca.length == 0) {
    console.log("Nome nao pode ser vazio.");
} else {
    console.log("Nome muito curto, respeite o numero minimo de 3 caracteres");
}

/*Exemplo de verificacao da quantidade de caracteres das pecas usando switch case

switch (nomePeca.length) {
    case 0:
        console.log("Nome nao pode ser vazio.");
        break;
    case 1:
    case 2:
    case 3:
        console.log("Nome muito curto, respeite o numero minimo de 3 caracteres");
        break;
    default:
        console.log("Nome adequado.");
        break;
}

*/