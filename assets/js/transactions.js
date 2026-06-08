/*                    <li class="list-group-item border border-info">Compra en línea - $50.00</li>
                    <li class="list-group-item border border-info">Depósito - $100.0</li>
                    <li class="list-group-item border border-info">Transferencia recibida - $75.00</li>
                    <li class="list-group-item border border-info">Compra en línea - $5550.0</li>
                    <li class="list-group-item border border-info">Depósito misma cuenta - $10500.0</li>
                    <li class="list-group-item border border-info">Transferencia recibida - $7575.00</li>*/

//Historial de transacciones (simula BD)
let transacciones =[
    {id: 1, glosa: "Compra en línea", monto: 50000},
    {id: 2, glosa: "Depósito", monto: 100000},
    {id: 3, glosa: "Transferencia recibida", monto: 75000},
    {id: 4, glosa: "Compra en línea", monto: 5500},
    {id: 5, glosa: "Depósito misma cuenta", monto: 10500},
    {id: 5, glosa: "Transferencia recibida", monto: 75500},
];

//Capturamos lista del dom donde queremos mostrar las transacciones

const listaTransaccionesEl = document.getElementById("listaTransacciones");
/*
for (const transaccion of transacciones){
    listaTransaccionesE1.innerHTML+=`<li class="list-group-item border border-info">${transaccion.Glosa} - ${transaccion.monto}</li>`;
};*/

//UTILIZAMOS UN CICLO / BUCLE PARA RECORRER LA LISTA

let elementosLi = "";
for (const transaccion of transacciones) {

elementosLi += `<li class="list-group-item border border-info">${transaccion.glosa} - $${transaccion.monto}</li>`;
}

//ASIGNAR LOS ELEMENTOS A LA UL DEL DOM
listaTransaccionesEl.innerHTML = elementosLi;
