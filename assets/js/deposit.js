//Variables

let balanceInicial = 100000;

//capturar elemento del dom

const montoBalance = document.getElementById("montoBalance");
console.log(montoBalance);

//manipulacion del elemento del dom

montoBalance.innerText = balanceInicial;

//evento para captuarar formulario y controlar el submit

const  formDeposit = document.getElementById ("formDeposit");

formDeposit.addEventListener("submit", function(event){
 //prevenir evento por defecto
 event.preventDefault();

 //capturamos el valor ingresado en el input
 let montoDeposit = document.getElementById("monto").value;
 
 //convertimos la conversion de string a number
 montoDeposit = Number(montoDeposit);

 let balance = Number(montoBalance.innerText);

 let nuevoBalance = balance + montoDeposit;

 //reasgnamos al elemento del dom el nuevo balance
 montoBalance.innerText = nuevoBalance;

//reiniciamos el form
 formDeposit.reset();
 //MENSAJE AL USUARIO DE ÉXITO
alert(`Se agregó un total de: ${montoDeposit}, siendo su nuevo balance: ${nuevoBalance}`);

})