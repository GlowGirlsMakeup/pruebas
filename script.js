// 🚀 Efecto de transformación en botones al hacer clic
document.querySelectorAll("button").forEach((btn) => {
    btn.addEventListener("click", () => {
        btn.style.transform = "scale(1.05)";
        setTimeout(() => btn.style.transform = "scale(1)", 200);
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

    let portada = document.getElementById("portada");
    portada.style.transition = "opacity 0.8s ease, transform 0.8s ease";
    portada.style.opacity = "0";
    portada.style.transform = "scale(0.9)";
    setTimeout(() => portada.style.display = "none", 800);
});

// 💬 Agregar comentarios y guardarlos en LocalStorage
function agregarComentario() {
    let comentario = document.getElementById("comentario").value.trim();
    if (comentario !== "") {
        let lista = document.getElementById("lista-comentarios");
        let nuevoComentario = document.createElement("p");
        nuevoComentario.textContent = comentario;
        lista.appendChild(nuevoComentario);

        let comentariosGuardados = JSON.parse(localStorage.getItem("comentarios")) || [];
        comentariosGuardados.push(comentario);
        localStorage.setItem("comentarios", JSON.stringify(comentariosGuardados));

        document.getElementById("comentario").value = "";

        nuevoComentario.style.opacity = "0";
        nuevoComentario.style.transform = "translateY(10px)";
        setTimeout(() => {
            nuevoComentario.style.opacity = "1";
            nuevoComentario.style.transform = "translateY(0)";
        }, 200);
    }
}

// 🔄 Cargar comentarios almacenados al iniciar la página
window.addEventListener("load", () => {
    let comentariosGuardados = JSON.parse(localStorage.getItem("comentarios")) || [];
    let lista = document.getElementById("lista-comentarios");
    comentariosGuardados.forEach(comentario => {
        let nuevoComentario = document.createElement("p");
        nuevoComentario.textContent = comentario;
        lista.appendChild(nuevoComentario);
    });
});

// 🛒 Carrito de compras optimizado
let carrito = [];

function agregarAlCarrito(nombre, precio) {
    let existe = carrito.find(item => item.nombre === nombre);
    if (existe) {
        existe.cantidad += 1; // 💡 Si el producto ya está, aumenta cantidad
    } else {
        carrito.push({ nombre, precio, cantidad: 1 });
    }
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
            <p>${item.nombre} - $${item.precio} x ${item.cantidad}</p>
            <button class="eliminar" onclick="eliminarDelCarrito(${index})">❌</button>
        `;
        listaCarrito.appendChild(productoCarrito);
        total += item.precio * item.cantidad; // 💡 Multiplicar por la cantidad
    });

    document.getElementById("totalCarrito").textContent = total.toFixed(2); // 💡 Mostrar con formato correcto
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

// 🛒 Mostrar y ocultar carrito correctamente
document.getElementById("verCarrito").addEventListener("click", function () {
    let carritoModal = document.getElementById("carrito");
    carritoModal.style.display = carritoModal.style.display === "flex" ? "none" : "flex";
});

function cerrarCarrito() {
    document.getElementById("carrito").style.display = "none";
}

// 🔥 Integración con los productos - Ajustando evento de clic correctamente
document.querySelectorAll(".producto button").forEach((boton) => {
    if (boton.textContent.includes("Añadir al Carrito")) {
        boton.addEventListener("click", () => {
            let producto = boton.closest(".producto");
            let nombre = producto.querySelector("p").textContent.split(" - ")[0];
            let precioTexto = producto.querySelector("p").textContent.split("$")[1];
            let precio = parseFloat(precioTexto.replace(",", "").trim()); // 💡 Se limpia y convierte correctamente
            agregarAlCarrito(nombre, precio);
        });
    }
});
