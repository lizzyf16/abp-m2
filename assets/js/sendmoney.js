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
function formNuevocontacto() {
    let formNew = "";

    formNew += `
    <form>
                    <div class="mb-3">
                        <label for="name" class="form-label">Nombre y apellido:</label>
                        <input type="email" class="form-control" name="name" id="name"
                            placeholder="Introduce Nombre y apellido" required>
                    </div>
                    <div class="mb-3">
                        <label for="number" class="form-label">número de CBU:</label>
                        <input type="numer" class="form-control" name="CBU" id="cbu"
                            placeholder="Introduce número de CBU" required>
                    </div>
                    <div class="mb-3">
                        <label for="nickname" class="form-label">Alias:</label>
                        <input type="email" class="form-control" name="alias" id="alias"
                            placeholder="Introduce Alias" required>
                    </div>
                    <div class="mb-3">
                        <label for="banco" class="form-label">Nombre del Banco:</label>
                        <input type="email" class="form-control" name="banco" id="banco"
                            placeholder="Introduce Nombre del Banco" required>
                    </div>
                    <div>
                        <input type="submit" value="Agregar Contacto" class="btn btn-info my-1 col-12 mb-3">
                    </div>
                </form>
    `;

};
//FORMULARIO



//FUNCIÓN QUE SE VA A ENCARGAR DE CARGAR LOS CONTACTOS EN LA UL DEL DOM
function cargarContactos(listaContactos) {

    let acumuladorLi = "";

    for (const contacto of listaContactos) {

        //DESECTRUCTURAR LAS PROPIEDADES DEL OBJETO
        let { id, nombre, cbu, alias, banco } = contacto;

        //AQUÍ VAMOS ACUMULANDO TANTOS LI COMO CONTACTOS TENGAMOS
        acumuladorLi += `

<li class="list-group-item d-flex gap-3">
<input class="form-check-input " type="radio" name="contacto" value="${cbu}" id="contacto${id}" required>
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