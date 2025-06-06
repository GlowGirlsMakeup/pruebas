// 🚀 Efecto de transformación en botones
document.querySelectorAll("button").forEach((btn) => {
    btn.addEventListener("click", () => {
        btn.style.transform = "scale(1.05)";
        setTimeout(() => btn.style.transform = "scale(1)", 200);
    });
});

// 💬 Agregar comentarios y guardarlos en LocalStorage
function agregarComentario() {
    let comentario = document.getElementById("comentario").value.trim();
    if (comentario !== "") {
        let lista = document.getElementById("lista-comentarios");
        let nuevoComentario = document.createElement("p");
        nuevoComentario.textContent = comentario;
        lista.appendChild(nuevoComentario);

        // Guardar comentario en LocalStorage
        let comentariosGuardados = JSON.parse(localStorage.getItem("comentarios")) || [];
        comentariosGuardados.push(comentario);
        localStorage.setItem("comentarios", JSON.stringify(comentariosGuardados));

        // Limpiar campo y animación en comentario nuevo
        document.getElementById("comentario").value = "";
        nuevoComentario.style.opacity = "0";
        nuevoComentario.style.transform = "translateY(10px)";
        setTimeout(() => {
            nuevoComentario.style.opacity = "1";
            nuevoComentario.style.transform = "translateY(0)";
        }, 200);
    }
}

// 🔄 Cargar comentarios almacenados
window.addEventListener("load", () => {
    let comentariosGuardados = JSON.parse(localStorage.getItem("comentarios")) || [];
    let lista = document.getElementById("lista-comentarios");
    comentariosGuardados.forEach(comentario => {
        let nuevoComentario = document.createElement("p");
        nuevoComentario.textContent = comentario;
        lista.appendChild(nuevoComentario);
    });
});

// 🔎 Buscador mejorado con filtrado en tiempo real
document.getElementById("busqueda").addEventListener("input", function() {
    let query = this.value.toLowerCase();
    document.querySelectorAll(".producto").forEach(producto => {
        let nombreProducto = producto.querySelector("p").textContent.toLowerCase();
        producto.style.display = nombreProducto.includes(query) ? "block" : "none";
    });
});

// 🚀 Botón "Comenzar" con efectos y ocultar portada
document.getElementById("botonAccion").addEventListener("click", function() {
    this.innerText = "¡Vamos!";
    this.style.backgroundColor = "#8f6b54";

    // Ocultar portada con animación suave
    let portada = document.getElementById("portada");
    portada.style.transition = "opacity 0.8s ease, transform 0.8s ease";
    portada.style.opacity = "0";
    portada.style.transform = "scale(0.9)";
    setTimeout(() => portada.style.display = "none", 800);
});

// 🛒 Carrito de compras
let carrito = [];

function agregarAlCarrito(nombre, precio) {
    carrito.push({ nombre, precio });
    actualizarCarrito();
}

function actualizarCarrito() {
    let listaCarrito = document.getElementById("listaCarrito");
    let total = 0;
    listaCarrito.innerHTML = "";

    carrito.forEach((item, index) => {
        let productoCarrito = document.createElement("div");
        productoCarrito.classList.add("item-carrito");
        productoCarrito.innerHTML = `
            <p>${item.nombre} - $${item.precio}</p>
            <button class="eliminar" onclick="eliminarDelCarrito(${index})">❌</button>
        `;
        listaCarrito.appendChild(productoCarrito);
        total += item.precio;
    });

    document.getElementById("totalCarrito").textContent = total;
    document.getElementById("contadorCarrito").textContent = carrito.length;
}

function eliminarDelCarrito(index) {
    carrito.splice(index, 1);
    actualizarCarrito();
}

function vaciarCarrito() {
    carrito = [];
    actualizarCarrito();
}

// 🛒 Mostrar y ocultar carrito
document.getElementById("verCarrito").addEventListener("click", function () {
    document.getElementById("carrito").style.display = "flex";
});

function cerrarCarrito() {
    document.getElementById("carrito").style.display = "none";
}

// 🔥 Integración con los productos - Añadir al carrito
document.querySelectorAll(".producto button").forEach((boton) => {
    if (boton.innerText === "Añadir al Carrito") { // Filtrar solo los botones correctos
        boton.addEventListener("click", () => {
            let producto = boton.closest(".producto");
            let nombre = producto.querySelector("p").textContent.split(" - ")[0];
            let precio = parseFloat(producto.querySelector("p").textContent.split("$")[1]);
            agregarAlCarrito(nombre, precio);
        });
    }
});

document.getElementById("verCarrito").addEventListener("click", function () {
    document.getElementById("carrito").style.display = "flex"; // ✅ Mostrará el carrito
});

function cerrarCarrito() {
    document.getElementById("carrito").style.display = "none"; // ✅ Oculta el carrito
}

let carrito = [];

function agregarAlCarrito(nombre, precio) {
    carrito.push({ nombre, precio });
    actualizarCarrito();
}
