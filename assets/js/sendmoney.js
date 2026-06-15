//SIMULAMOS LA CARGA DE UN BALANCE INICIAL
let balance = 100000;

//CAPTURAMOS EL ELEMENTO DEL DOM EN CUAL QUEREMOS MOSTRAR EL BALANCE
const balanceEl = document.getElementById("balance");

//LE ASIGNAMOS EL VALOR SIMULADO DE LA BASE DE DATOS
balanceEl.textContent = balance.toLocaleString("es-CL");

//SIMULAMOS LOS REGISTROS DE CONTACTO DEL CLIENTE

const contactos = [
    {
        id: 1,
        nombre: "John Doe",
        cbu: "123456789",
        alias: "john.doe",
        banco: "ABC Bank",
    },
    {
        id: 2,
        nombre: "Jane Smith",
        cbu: "987654321",
        alias: "jane.smith",
        banco: "XYZ Bank",
    },
    {
        id: 3,
        nombre: "María Pérez",
        cbu: "124578986",
        alias: "maria.perez",
        banco: "ABC Bank",
    },
    {
        id: 3,
        nombre: "José Cordova",
        cbu: "112233445",
        alias: "jose.cordova",
        banco: "XYZ Bank",
    },
];

//
const nombres = ["Buscar un Contacto", "John Doe", "Jane Smith", "María Pérez", "José Cordova"];

const select = document.getElementById("buscarContacto");

nombres.forEach(nombre => {
    const opcion = document.createElement("option");
    opcion.value = nombre.toLowerCase();
    opcion.textContent = nombre;
    select.appendChild(opcion);
});
//

const modal = document.getElementById("modal");

document.getElementById("abrirFormulario")

    .addEventListener("click", () => {
        
        modal.style.display = "block";
    });

function cerrar() {
    modal.style.display = "none";
};

function guardar() {
    const nombre = document.getElementById("nombre").value;
    const CBU = document.getElementById("numeroCBU").value;
    const alias = document.getElementById("alias").value;
    const banco = document.getElementById("nombreBanco").value;

    const contactoNuevo = {
        nombre,
        CBU,
        alias,
        banco

    };

    const contactoGuardados =
    JSON.parse(localStorage.getItem("contactos")) || [];

    const contactosActualizados = [
    ...contactoGuardados,
    contactoNuevo
];

localStorage.setItem(
    "contactos",
    JSON.stringify(contactosActualizados)
);
};




//FUNCIÓN QUE SE VA A ENCARGAR DE CARGAR LOS CONTACTOS EN LA UL DEL DOM
function cargarContactos(listaContactos) {

    let acumuladorLi = "";

    for (const contacto of listaContactos) {

        //DESECTRUCTURAR LAS PROPIEDADES DEL OBJETO
        let { id, nombre, cbu, alias, banco } = contacto;

        //AQUÍ VAMOS ACUMULANDO TANTOS LI COMO CONTACTOS TENGAMOS
        acumuladorLi += `

<li class="list-group-item d-flex gap-3" >
<input class="form-check-input " required type="radio" name="contacto" value="${cbu}" id="contacto${id}">
<label class="form-check-label" for="contacto${id}">${nombre}, CBU:
${cbu}, Alias: ${alias}, Banco: ${banco}</label>
</li>
`;
    };

    //AGREGAMOS LOS ELEMENTOS DE LISTA A LA UL DEL DOM
    document.getElementById("listaContactos").innerHTML = acumuladorLi;
};

//FUNCIÓN INICIAL / PRINCIAL

function main() {
    cargarContactos(contactos);
};

main();
    cerrar();


//LÓGICA BUSCAR CONTACTO CON FILTRO DE CONTACTOS

const buscarContactoEl = document.getElementById("buscarContacto");

//AGREGAMOS EL EVENTO INPUT AL ELEMENTO

buscarContactoEl.addEventListener("input", function (event) {
    event.preventDefault();

    let textoBusqueda = buscarContactoEl.value;

    //DEJAMO EL TEXTO EL INPUT EN MINÚSCULAS
    textoBusqueda = textoBusqueda.toLowerCase();

    //FILTRAR LOS CONTACTOS QUE COINCIDAN POR EL TEXTO BUSCADO

    let contactosFiltrados = contactos.filter(function (contacto) {
        //DESECTRUCTURAR LAS PROPIEDADES DEL OBJETO
        let { nombre, cbu, alias, banco } = contacto;

        nombre = nombre.toLowerCase();
        alias = alias.toLowerCase();
        banco = banco.toLowerCase();

        let reglaNombre = nombre.includes(textoBusqueda);
        let reglaAlias = alias.includes(textoBusqueda);
        let reglaCbu = cbu.includes(textoBusqueda);
        let reglaBanco = banco.includes(textoBusqueda);

        if (reglaNombre || reglaAlias || reglaCbu || reglaBanco) {
            return contacto;
        } else {
            return false;
        }
    });

    //UNA VEZ FILTRADOS LOS CONTACTOS LOS ENVIAMOS A LA FUNCIÓN DE CARGAR CONTACTOS
    cargarContactos(contactosFiltrados);
});

//LÓGICA DE ENVIAR DINERO A UN USUARIO SELECCIONADO

const formSendMoneyEl = document.getElementById("formSendMoney");

//AGREGAMOS EL EVENTO SUBMIT

formSendMoneyEl.addEventListener("submit", function (event) {

    //DEBEMOS PREVENIR LAS ACCIONES POR DEFECTO
    event.preventDefault();

    //CAPTURAMOS LA DATA DEL FORMULARIO
    let dataFormulario = new FormData(formSendMoneyEl);

    let monto = dataFormulario.get("monto");

    monto = Number(monto);

    //PREGUNTAMOS AL USUARIO SI ESTÁ SEGURO DE TRANSFERIR
    let confirmacion = confirm(`¿Está seguro de transferir la suma de: $ ${monto.toLocaleString("es-CL")}?`);

    if (!confirmacion) {
        //EL RETURN DETIENE LA EJECUCIÓN DEL RESTO DE CÓDIGO
        return;
    }


    let cbuContacto = dataFormulario.get("contacto");

    //VALIDAR SI EXISTE SALDO DISPONIBLE Y DESCONTAR DE SER POSIBLE

    if (balance >= monto) {
        //EN ESTE CASO PUEDO TRANSFERIR
        balance = balance - monto;
        let textoMensaje =
            `Se ha transferido correctamente la suma de: $ ${monto.toLocaleString("es-CL")} a la cuenta\nN° ${cbuContacto}.
\nSu nuevo saldo es de: ${balance.toLocaleString("es-CL")}
`;
        alert(textoMensaje);

        //ACTUALIZAMOS EL BALANCE EN EL SPAN DEL DOM
        balanceEl.textContent = balance.toLocaleString("es-CL");

        //limpiamos el formulario
        formSendMoneyEl.reset();
        cargarContactos(contactos);

    } else {
        alert("Usted no disponible de saldo suficiente");
    }
});