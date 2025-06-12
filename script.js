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

function toggleExpand(element) {
    // Si el producto ya está expandido, lo contrae
    if (element.classList.contains("expandido")) {
        element.classList.remove("expandido");
        return;
    }

    // Cierra cualquier otro producto expandido antes de abrir uno nuevo
    document.querySelectorAll(".producto.expandido").forEach(prod => prod.classList.remove("expandido"));

    // Expande el producto actual
    element.classList.add("expandido");
}

// 🚀 Cerrar el producto al hacer clic fuera
document.addEventListener("click", function(event) {
    let productos = document.querySelectorAll(".producto");

    productos.forEach(producto => {
        if (!producto.contains(event.target) && !event.target.classList.contains("btn-comprar")) {
            producto.classList.remove("expandido");
        }
    });
});


// 🛒 Carrito de compras
let carrito = [];
let totalCarrito = 0;
let costoEnvio = 500; // Valor inicial de envío estándar

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
    totalCarrito = carrito.reduce((sum, producto) => sum + producto.precio, 0);
    let envioSeleccionado = document.getElementById("metodoEnvio").value;

    // Ajustar el costo de envío según la opción seleccionada
    costoEnvio = envioSeleccionado === "express" ? 1500 : 500;

    document.getElementById("totalCarrito").textContent = totalCarrito + costoEnvio;
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

    let metodoPago = document.getElementById("metodoPago").value;
    let totalFinal = totalCarrito + costoEnvio;
    
    // 💳 Redirigir a MercadoPago (simulado)
    if (metodoPago === "mercadopago") {
        window.open("https://www.mercadopago.com.ar/", "_blank");
    }

    alert(`✅ Compra realizada. Total a pagar: $${totalFinal}`);
    vaciarCarrito();
}

// Detectar cambios en método de envío y actualizar total
document.getElementById("metodoEnvio").addEventListener("change", calcularTotal);


// 🛍️ Expansión de productos al hacer clic
function toggleExpand(element) {
    document.querySelectorAll(".producto.expandido").forEach(prod => prod.classList.remove("expandido"));
    element.classList.toggle("expandido");
}

// 📍Maps
document.getElementById("direccionEnvio").addEventListener("input", actualizarMapa);

function actualizarMapa() {
    let direccion = document.getElementById("direccionEnvio").value.trim();
    let mapaLink = document.getElementById("mapaLink");

    if (direccion !== "") {
        let urlMapa = `https://www.google.com/maps/search/${encodeURIComponent(direccion)}`;
        mapaLink.href = urlMapa;
        mapaLink.style.display = "block"; // Hace visible el enlace cuando hay dirección
    } else {
        mapaLink.href = "#";
        mapaLink.style.display = "none"; // Oculta el enlace si no hay dirección
    }
}


// 📍Maps
function comprar() {
    if (carrito.length === 0) {
        alert("🛍️ Tu carrito está vacío.");
        return;
    }

    let metodoPago = document.getElementById("metodoPago")?.value;
    let envioSeleccionado = document.getElementById("metodoEnvio")?.value;
    let direccion = document.getElementById("direccionEnvio")?.value.trim();

    if (!direccion) {
        alert("📍 Por favor, ingresa tu dirección de envío.");
        return;
    }

    let totalFinal = carrito.reduce((sum, producto) => sum + producto.precio, 0) + (envioSeleccionado === "express" ? 1500 : 500);

    let mensaje = `Hola, quiero realizar una compra con un total de $${totalFinal}. Métodos de pago: ${metodoPago}. 
    Envío seleccionado: ${envioSeleccionado}. 
    Dirección: ${direccion}.`;

    let whatsappURL = `https://api.whatsapp.com/send?phone=5491130126909&text=${encodeURIComponent(mensaje)}`;

    window.open(whatsappURL, "_blank");

    if (metodoPago === "mercadopago") {
        window.open("https://www.mercadopago.com.ar/", "_blank");
    }

    alert(`✅ Compra realizada. Total a pagar: $${totalFinal}`);
    vaciarCarrito();
}
