//variables
const formulario = document.querySelector("#formulario");
const listaTareas = document.querySelector("#lista-tareas");
const botonSubmit = document.querySelector("#boton-submit");

let tasks = [];
let idEditar = null;


//funciones
formulario.addEventListener("submit", enviarFormulario);

function enviarFormulario(e) {
    e.preventDefault();

    const inputTarea = document.querySelector("#tarea").value;
    if(inputTarea === "") {
        mensajeAlerta("El campo no puede estar vacío");
        return;
    }

    const task = {
        id: Date.now(),
        name: inputTarea
    };

    if(idEditar) {
        tasks = tasks.map(task => task.id === idEditar ? {...task, name: inputTarea}: task);

        idEditar = null;
        botonSubmit.value = "Agregar";
    }else {
        tasks = [...tasks, task];
    }
    
    mostrarHTML();
    formulario.reset();
}

function mensajeAlerta(mensaje) {
    const parrafoAlerta = document.createElement("P");
    parrafoAlerta.textContent = mensaje;
    parrafoAlerta.classList.add("mensaje-alerta");

    formulario.appendChild(parrafoAlerta);

    setTimeout(()=> {
        parrafoAlerta.remove();
    }, 2000)
};

function mostrarHTML() {
    limpiarHTML();

    if(tasks.length > 0) {
        tasks.forEach(task => {
            const { name, id } = task;
    
            const divTarea = document.createElement("div");
            divTarea.classList.add("contenedor-tarea");
    
            const tareaTitulo = document.createElement("P");
            tareaTitulo.classList.add("tarea-titulo");
            tareaTitulo.textContent = name;
    
            const divBotones = document.createElement("div");
            divBotones.classList.add("contenedor-botones");
    
            const botonEliminar = document.createElement("button");
            botonEliminar.textContent = "Eliminar"
            botonEliminar.classList.add("boton-eliminar");
            botonEliminar.classList.add("botones-tareas");
    
            botonEliminar.onclick = () => {
                eliminarTarea(id);
            };
    
            const botonEditar = document.createElement("button");
            botonEditar.textContent = "Editar"
            botonEditar.classList.add("boton-editar");
            botonEditar.classList.add("botones-tareas");

            botonEditar.onclick = () => {
                editarTarea(id);
            };
    
            divBotones.appendChild(botonEliminar);
            divBotones.appendChild(botonEditar);
    
            divTarea.appendChild(tareaTitulo);
            divTarea.appendChild(divBotones);
    
            listaTareas.appendChild(divTarea);
        });
    }
};

function eliminarTarea(id) {
    tasks = tasks.filter(task => task.id !== id);

    mostrarHTML();
};

function editarTarea(id) {
    const tareaEncontrada = tasks.filter(task => task.id === id);
    document.querySelector("#tarea").value = tareaEncontrada[0].name;
    idEditar = id;

    botonSubmit.value = "Editar tarea";
};

function limpiarHTML() {
    while(listaTareas.firstChild) {
        listaTareas.removeChild(listaTareas.firstChild);
    };
};