// $(document).ready(function() {
//   // Inicializar saldo en localStorage si no existe
//   if (localStorage.getItem("saldo") === null) {
//     localStorage.setItem("saldo", "100000"); // 100_000 inicial
//   }

//Variables

let balanceInicial = 100000;

//capturar elemento del dom

const montoBalanceElement = document.getElementById("montoBalance");
console.log(montoBalance);

//manipulacion del elemento del dom

montoBalance.innerText = balanceInicial;

console.log ("Valor del Elemento:", montoBalance.innerText)

 //MENSAJE AL USUARIO DE ÉXITO
alert(`Se agregó un total de: ${montoDeposit}, siendo su nuevo balance: ${nuevoBalance}`);

function mensajeDeposit (){
    alert("Redirigiendo a Depositar.");
    window.location.href = "./deposit.html"    
};

function mensajeSendmoney (){
    alert("Redirigiendo a Enviar Dinero.");
    window.location.href = "./sendmoney.html"    
};
function mensajeTransaction (){
    alert("Redirigiendo a Últimos Movimientos.");
    window.location.href = "./transactions.html"    
};

// $("#btnDeposit").on("click", function() {
//     alert(`Redirigiendo a Depositar`);
//     window.location.href = "./deposit.html";
//   });


//   $("#buttonSendMoneyt").on("click", function() {
//     alert("Redirigiendo a Enviar Dinero...");
//     window.location.href ="./sendmoney.html";
//   });
  
//   $("#buttonTransaction").on("click", function() {
//     alert("Redirigiendo a Transacciones...");
//     window.location.href = "./transactions.html";
//   });