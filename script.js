document.addEventListener("DOMContentLoaded", function() {
    // 🚀 Efecto de transformación en botones al hacer clic
    document.querySelectorAll("button").forEach((btn) => {
        btn.addEventListener("click", () => {
            btn.style.transform = "scale(1.05)";
            setTimeout(() => btn.style.transform = "scale(1)", 200);
        });
    });

    // 🚀 Botón "Comenzar" con efectos y ocultar portada
    let botonAccion = document.getElementById("botonAccion");
    if (botonAccion) {
        botonAccion.addEventListener("click", function() {
            this.innerText = "¡Vamos!";
            this.style.backgroundColor = "#8f6b54";

            let portada = document.getElementById("portada");
            if (portada) {
                portada.style.transition = "opacity 0.8s ease, transform 0.8s ease";
                portada.style.opacity = "0";
                portada.style.transform = "scale(0.9)";
                setTimeout(() => portada.style.display = "none", 800);
            }
        });
    }
});


// 🛒 Carrito de compras
let carrito = [];

function agregarAlCarrito(nombre, precio) {
    carrito.push({ nombre, precio });
    actualizarCarrito();
}

function actualizarCarrito() {
    let lista = document.getElementById("listaCarrito");
    if (!lista) return;

    lista.innerHTML = "";
    carrito.forEach((producto, index) => {
        let item = document.createElement("div");
        item.classList.add("carrito-item");
        item.innerHTML = `<p>${producto.nombre} - $${producto.precio} <button onclick="eliminarDelCarrito(${index})">❌</button></p>`;
        lista.appendChild(item);
    });

    calcularTotal();
}

function eliminarDelCarrito(index) {
    carrito.splice(index, 1);
    actualizarCarrito();
}

function calcularTotal() {
    let totalCarrito = carrito.reduce((sum, producto) => sum + producto.precio, 0);
    document.getElementById("totalCarrito").textContent = totalCarrito;
}

function vaciarCarrito() {
    carrito = [];
    actualizarCarrito();
}

function comprar() {
    if (carrito.length === 0) {
        alert("🛍️ Tu carrito está vacío.");
        return;
    }

    let totalFinal = carrito.reduce((sum, producto) => sum + producto.precio, 0);
    alert(`✅ Compra realizada. Total a pagar: $${totalFinal}`);
    vaciarCarrito();
}



// 🛍️ Expansión de productos al hacer clic
function toggleExpand(element) {
    document.querySelectorAll(".producto.expandido").forEach(prod => prod.classList.remove("expandido"));
    element.classList.toggle("expandido");
}









