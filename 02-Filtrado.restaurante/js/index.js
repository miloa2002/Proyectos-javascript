//variables
const listaPlatos = document.querySelector(".lista-platos");
const btnTodos = document.getElementById("btn-todos");
const btnDesayunos = document.getElementById("btn-desayunos");
const btnAlmuerzos = document.getElementById("btn-almuerzos");

const platos = [
    {
        imagen: "https://images.pexels.com/photos/103124/pexels-photo-103124.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        nombreReceta: "Desayuno huevo y arepa",
        precio: "$25.000",
        descripcion: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis nihil unde voluptatum exercitationem fugiat aliquam fugit mollitia alias provident possimus beatae omnis autem, commodi, a maiores culpa, in esse maxime.",
        categoria: "desayuno"
    },
    {
        imagen: "https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        nombreReceta: "Almuerzo Pastas",
        precio: "$56.000",
        descripcion: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis nihil unde voluptatum exercitationem fugiat aliquam fugit mollitia alias provident possimus beatae omnis autem, commodi, a maiores culpa, in esse maxime.",
        categoria: "almuerzo"
    },
    {
        imagen: "https://images.pexels.com/photos/1639562/pexels-photo-1639562.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        nombreReceta: "Almuerzo Hamburguesa",
        precio: "$35.000",
        descripcion: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis nihil unde voluptatum exercitationem fugiat aliquam fugit mollitia alias provident possimus beatae omnis autem, commodi, a maiores culpa, in esse maxime.",
        categoria: "almuerzo"
    }
];

function mostrarHTML(categoria) {

    const platosFiltrados = platos.filter(plato => plato.categoria === categoria || categoria === "todos");

    limpiarHTML();
    platosFiltrados.forEach(plato => {
        const divPlato = document.createElement("div");
        divPlato.classList.add("contenedor-plato");
        
        const divContenedorNombrePrecio = document.createElement("div");
        divContenedorNombrePrecio.classList.add("contenedor-precio-nombre");
    
        const imagenPlato = document.createElement("img");
        imagenPlato.classList.add("imagen-plato");
        imagenPlato.src = plato.imagen;
    
        const nombreReceta = document.createElement("h3");
        nombreReceta.textContent = plato.nombreReceta;
    
        const descripcion = document.createElement("p");
        descripcion.textContent = plato.descripcion;
    
        const precio = document.createElement("p");
        precio.textContent = plato.precio;
    
        divContenedorNombrePrecio.appendChild(nombreReceta);
        divContenedorNombrePrecio.appendChild(precio);
    
        divPlato.appendChild(imagenPlato);
        divPlato.appendChild(divContenedorNombrePrecio);
        divPlato.appendChild(descripcion);
    
        listaPlatos.appendChild(divPlato);
    });
};

mostrarHTML("todos");

btnDesayunos.addEventListener("click", () => mostrarHTML("desayuno"));
btnAlmuerzos.addEventListener("click", () => mostrarHTML("almuerzo"));
btnTodos.addEventListener("click", () => mostrarHTML("todos"));


function limpiarHTML() {
    while(listaPlatos.firstChild) {
        listaPlatos.removeChild(listaPlatos.firstChild);
    };
};