let numero1 = 5;
let numero2 = "6";

let resta = numero1 - numero2;
console.log("Resta: ", resta);

//PARSEAR VALORES
let suma = parseInt(numero1) + parseInt(numero2);
console.log("Suma: ", suma);

numero1 = 5.5;
numero2 = "6.7";

console.log("Caso Número 2:")
suma = parseFloat(numero1) + parseFloat(numero2);
console.log("Suma: ", suma);

console.log("Caso Número 3:")
suma = Number(numero1) + Number(numero2);
console.log("Suma: ", suma);