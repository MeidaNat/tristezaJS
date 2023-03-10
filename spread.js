const chars = [..."Natália"];
console.log(chars);

const obj = {
    name: "Natália",
    age: 23,
    city: "São Paulo",
    comida: "Pizza"
}

const obj2 = {...obj, name: "João", age: 30};
console.log(obj2);

const vec = [1, 2, 3, 4, 5];
const vec2 = [...vec, 6, 7, 8, 9, 10];
console.log(vec2);

const comidas = ["Pizza", "Hamburguer", "Lasanha"];
const bebidas = ["Coca-cola", "Guaraná", "Suco de laranja"];
const comidasEBebidas = [...comidas, ...bebidas];
console.log(comidasEBebidas);
