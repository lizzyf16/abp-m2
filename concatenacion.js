let nombre = "Pedro";
let apellido = "Godoy";

let nombreCompleto = nombre + " " + apellido; //concatenación con operador +
console.log(nombreCompleto);

nombreCompleto = `${nombre} ${apellido}`; //interpolación / literal templates

console.log(nombreCompleto);