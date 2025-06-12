// 🚀 Efecto de transformación en botones al hacer clic
document.querySelectorAll("button").forEach((btn) => {
    btn.addEventListener("click", () => {
        btn.style.transform = "scale(1.05)";
        setTimeout(() => btn.style.transform = "scale(1)", 200);
    });
});

// 🚀 Botón "Comenzar" con efectos y ocultar portada
document.getElementById("botonAccion").addEventListener("click", function() {
    this.innerText = "¡Vamos!";
    this.style.backgroundColor = "#8f6b54";

    let portada = document.getElementById("portada");
    portada.style.transition = "opacity 0.8s ease, transform 0.8s ease";
    portada.style.opacity = "0";
    portada.style.transform = "scale(0.9)";
    setTimeout(() => portada.style.display = "none", 800);
});


// 🛒 ventana emergente y carrito de compras
function mostrarModal(nombre, imagen, descripcion, precio) {
    document.getElementById("tituloProducto").textContent = nombre;
    document.getElementById("imagenProducto").src = imagen;
    document.getElementById("descripcionProducto").textContent = descripcion;
    document.getElementById("valorProducto").textContent = precio;
    document.getElementById("modalProducto").style.display = "block";
}

function cerrarModal() {
    document.getElementById("modalProducto").style.display = "none";
}

function agregarAlCarritoDesdeModal() {
    let nombre = document.getElementById("tituloProducto").textContent;
    let precio = parseInt(document.getElementById("valorProducto").textContent);
    agregarAlCarrito(nombre, precio);
    cerrarModal();
}

