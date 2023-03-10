const text = "Natália";
console.log(text.substr(0, 3));

console.log(text.toUpperCase());
console.log(text.toLowerCase());

console.log(text.replace("Nat", "natii"));

const date = "2021-10-10";
console.log(date.split("-"));

const dateVec = date.split(/[-\/\.]/g); 
if (dateVec[1] == "10") {
    console.log("O mês é outubro");
}

const textoLongo = "Paralelepípedo regular é um paralelepípedo que tem todos os seus lados iguais";
console.log(textoLongo.indexOf("regular"));

console.log(textoLongo);
console.log("Inicia-se com Para?  " + textoLongo.startsWith("Para"));
console.log("Termina com igual?  " + textoLongo.endsWith("igual"));

console.log("Inclui a palavra paralelepípedo?  " + textoLongo.includes("paralelepípedo"));

const email = "     andre@email.com      ";
console.log(email.trim());

const pi = 3.141592653589793;
const e = 2.718281828459045;
const fi = 1.618033988749895;
const c = 299792458;

const constantes = `PI = ${pi}\ne = ${e}\nfi = ${fi}\nc = ${c}`; // usando crase, é possível criar strings interpoladas
console.log(constantes);
