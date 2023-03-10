class Pessoa {
    constructor(nome, idade, sexo) {
        this.nome = nome;
        this.idade = idade;
        this.sexo = sexo;
    }
}

const values = new Array(10);
const refeicoes = ["café da manhã", "almoço", "jantar", "jantar"];
console.log(refeicoes);

const set = new Set(refeicoes);
set.add("almoço");
console.log(set);

values[0] = true;
values[1] = "Natália";
values[2] = 3;
values[3] = { nome: "Natália", idade: 20, sexo: "F" };
values[4] = new Pessoa("Natália", 20, "F");
console.log(values);

console.log(`Tamanho do array: ${values.length}`);

values.push("Adicionado no final do array");
console.log(values);

values.pop(); // remove e retorna o último elemento do array
console.log("Valor removido.");
console.log(values);

delete values[0]; // remove o elemento do array, mas não reordena os índices
console.log(values);

values.splice(2, 1) // remove o elemento do array, reordenando os índices
// posição 0-indexed, quantidade de elementos a serem removidos
console.log(values);

// length
// push (adiciona no final do array)
// pop (remove do final do array)
// delete (remove um elemento do array)
// indexOf (retorna o índice do elemento)


// * (2 + a)
// * (a + 2)
