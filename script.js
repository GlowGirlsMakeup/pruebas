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

